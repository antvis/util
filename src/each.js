function each(elements, callback) {
  if (!elements) return;

  if (isFinite(elements.length)) {
    for (let i = 0; i < elements.length; i ++) {
      const result = callback(elements[i], i, elements);
      if (result === false) break;
    }
  } else {
    for (const key in elements) {
      if (elements.hasOwnProperty(key)) {
        const result = callback(elements[key], key, elements);
        if (result === false) break;
      }
    } 
  }
}
