
export function createBasicRectangle(width, height, x, y, fill) {
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttributeNS(null, "width", width);
  rect.setAttributeNS(null, "height", height);

  if (x) rect.setAttributeNS(null, "x", x);
  if (y) rect.setAttributeNS(null, "y", y);

  rect.setAttributeNS(null, "fill", fill);

  return rect;
}