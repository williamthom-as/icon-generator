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
