import { MD5 } from "crypto-js";

export function generateMD5(str) {
  if (!str) return null;
  return MD5(str, 128).toString()
};

export function extractColorPalette(string) {
  const md5 = generateMD5(string);
  if (!md5) return null;
  
  const colorArr = [];
  for (let idx = 0; idx < 5; idx++) {
    colorArr.push(`#${md5.substring(idx * 6, (idx + 1) * 6)}`);
  }

  return colorArr;
};

export function extractPatternSequencing(string) {
  const md5 = generateMD5(string);
  const decArr = [];

  for (let idx = 0; idx < (md5.length / 2); idx++) {
    let sub = md5.substring(idx * 2, (idx + 1) * 2)
    decArr.push(parseInt(sub, 16))
  }

  const numPerGroups = 4;
  const result = new Array(numPerGroups)
    .fill('')
    .map((_, i) => decArr.slice(i * numPerGroups, (i + 1) * numPerGroups));


  return result;
}