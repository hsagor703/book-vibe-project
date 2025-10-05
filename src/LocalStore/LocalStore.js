
const getFromLocalStore = () => {
    const storeBook = localStorage.getItem("readList");
    if (storeBook) {
        const getStoreBook = JSON.parse(storeBook);
        return getStoreBook;
    } else {
        return [];
    }
};

const addFromLocalStore = (id) => {
    const getStoreBook = getFromLocalStore();
    if (getStoreBook.includes(id)) {
        alert("already added")
    } else {
        getStoreBook.push(id);
        const addData = JSON.stringify(getStoreBook);
        localStorage.setItem("readList", addData)
    }
};
export {addFromLocalStore, getFromLocalStore}