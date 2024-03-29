import { useEffect, useState } from "react";
import FavBook from "../FavBook/FavBook";

const FavouriteBook = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedJsonReadBook = localStorage.getItem('read-books');
        const storedReadBooks = storedJsonReadBook ? JSON.parse(storedJsonReadBook) : [];
        const favBooks = [];

        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                data.forEach(book => {
                    if (storedReadBooks.includes(String(book.bookId))) {
                        favBooks.push(book);
                    }
                });
                setReadBooks(favBooks);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div>
            {readBooks.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                    {readBooks.map(readBook => ( readBook.rating>=4.5 &&
                        <FavBook key={readBook.bookId} readBook={readBook} />
                    ))}
                </div>
            ) : (
                <div className="text-center font-extrabold text-red-700 text-5xl p-8">
                    <p>No Favorite Books Added Yet</p>
                </div>
            )}
        </div>
    );
};

export default FavouriteBook;
