export function flattenWorkspace(tree) {
  const out = [];
  const walk = (items) => {
    for (const it of items) {
      if (it.type === "file") out.push(it);
      if (it.type === "folder" && it.children) walk(it.children);
    }
  };
  walk(tree);
  return out;
}
