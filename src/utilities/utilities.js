const addItem = (name, item) => {
  const nItem = JSON.stringify(item);
  localStorage.setItem(name, nItem);
};

const getItem = (name) => {
  const item = localStorage.getItem(name);
  if (item) {
    return JSON.parse(item);
  }
};


export {
    addItem,
    getItem
}