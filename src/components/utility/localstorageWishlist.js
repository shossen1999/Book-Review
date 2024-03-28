const getStoredWishlistBook = () => {
    const storedWishlistBook = localStorage.getItem('wishlist-books');
    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook);
    }
    return [];
}

const saveWishlist = id => {
    const storedWishlistBooks = getStoredWishlistBook();
    const exists = storedWishlistBooks.includes(id);
    if (!exists) {
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks));
        return true;
    }
    return false;
}

const removeFromWishlist = id => {
    const storedWishlistBooks = getStoredWishlistBook();
    const updatedWishlist = storedWishlistBooks.filter(bookId => bookId !== id);
    localStorage.setItem('wishlist-books', JSON.stringify(updatedWishlist));
}

export { saveWishlist, getStoredWishlistBook, removeFromWishlist };
