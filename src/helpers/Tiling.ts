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
  const baseHexWidth = parseFloat(getHexWidthPx());
  const gapRatio =
    parseFloat(rootStyles.getPropertyValue("--hex-horizontal-gap-ratio")) + 0.5;

  const containerWidth =
    document.querySelector(".app")?.clientWidth || window.innerWidth - 64;
  const effectiveHexWidth = baseHexWidth * (1 + gapRatio);
  const hexCount = Math.floor(containerWidth / effectiveHexWidth);

  console.log(window.innerWidth, effectiveHexWidth);
  return Math.max(1, hexCount);
};

function getHexWidthPx() {
  const element = document.documentElement;
  const computedStyle = getComputedStyle(element);
  const hexWidth = computedStyle.getPropertyValue("--hex-width").trim();

  const temp = document.createElement("div");
  temp.style.width = hexWidth;
  document.body.appendChild(temp);

  const pixelValue = getComputedStyle(temp).width;

  document.body.removeChild(temp);

  return pixelValue;
}

export const splitInAlternatingChunks = <T>(arr: T[], n: number): T[][] => {
  const result: T[][] = [];
  let perChunk = Math.max(n, 1);
  let counter = 0;
  console.log(n);

  for (let i = 0; i < arr.length; i += perChunk) {
    perChunk += counter++ % 2 === 0 ? -1 : 1;
    result.push(arr.slice(i, i + perChunk));
  }

  return result;
};
