function trimEmptyTextNodes(el) {
  for (let node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.data.trim() === '') {
      node.remove();
    }
  }
}

export default {
  inserted: trimEmptyTextNodes,
  componentUpdated: trimEmptyTextNodes,
};
