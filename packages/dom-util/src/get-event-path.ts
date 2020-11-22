/**
 * 返回事件路径
 * @param event 事件
 */

export default function getEventPath(event: MouseEvent): Array<EventTarget> {
  if(!event) {
    return;
  }

  if (event.composedPath) {
    return event.composedPath();
  }

  const path = [];
  let el = event.target as HTMLElement;

  while (el) {
    path.push(el);
    if (el.tagName === 'HTML') {
      path.push(document, window);
      return path;
    }

    el = el.parentElement;
  }
  return path;
}
