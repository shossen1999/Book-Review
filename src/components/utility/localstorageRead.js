const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-books');
    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveRead = id => {
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.includes(id); 
    if (!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
        return true; 
    }
    return false; 
}

export { saveRead, getStoredReadBook };
