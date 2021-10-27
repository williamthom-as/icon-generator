import { MD5 } from "crypto-js";

export function md5(str) {
  if (!str) return null;
  return MD5(str, 128).toString()
}