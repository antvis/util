export default function cancelAnimationFrame(fn: FrameRequestCallback) {
  const method = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    // @ts-ignore
    window.mozCancelAnimationFrame ||
    // @ts-ignore
    window.msCancelAnimationFrame ||
    clearTimeout;

  return method(fn);
};
