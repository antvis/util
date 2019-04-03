export interface BoundingRect {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export default function getBoundingClientRect(node:HTMLElement, defaultValue:any): BoundingRect {
  if (node && node.getBoundingClientRect) {
    const rect = node.getBoundingClientRect();
    const top = document.documentElement.clientTop;
    const left = document.documentElement.clientLeft;
    return {
      top: rect.top - top,
      bottom: rect.bottom - top,
      left: rect.left - left,
      right: rect.right - left,
    };
  }
  return defaultValue || null;
}
