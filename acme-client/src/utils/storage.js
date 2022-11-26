const getItem = (item) => {
    return localStorage.getItem(item);
}
const setItem = (item, value) => {
    return localStorage.setItem(item, value);
}
const clearItems = () => {
    return localStorage.clear();
}

module.exports = {
    getItem,
    setItem,
    clearItems
}