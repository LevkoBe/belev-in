const isFirstRowShorter = 1;

export const calculateRowCount = (total: number, perRow: number) => {
  let remainingHexes = total;
  let rowIndex = 0;

  while (remainingHexes > 0) {
    const hexesInThisRow =
      rowIndex % 2 === isFirstRowShorter ? perRow : perRow - 1;
    remainingHexes -= hexesInThisRow;
    rowIndex++;
  }

  return rowIndex;
};

export const calculateHexesPerRow = (): number => {
  const rootStyles = getComputedStyle(document.documentElement);
  const baseHexWidth =
    (window.innerWidth *
      parseFloat(rootStyles.getPropertyValue("--hex-width"))) /
    100;
  const gapRatio =
    parseFloat(rootStyles.getPropertyValue("--hex-horizontal-gap-ratio")) + 0.5;

  const containerWidth =
    document.querySelector(".app")?.clientWidth || window.innerWidth - 64;
  const effectiveHexWidth = baseHexWidth * (1 + gapRatio);
  const hexCount = Math.floor(containerWidth / effectiveHexWidth);

  console.log(window.innerWidth, effectiveHexWidth);
  return Math.max(2, hexCount);
};

export const splitInAlternatingChunks = <T>(arr: T[], n: number): T[][] => {
  const result: T[][] = [];
  const perChunk = n - 1;

  for (let i = 0; i < arr.length; i += perChunk + 1) {
    if (i % 2 === 0) result.push(arr.slice(i, i + perChunk));
    else result.push(arr.slice(i, i + perChunk + 1));
  }

  return result;
};
