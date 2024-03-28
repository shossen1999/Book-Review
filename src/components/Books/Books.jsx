import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div className="my-4 lg:my-6">
            <h2 className="text-center text-[40px] font-playfair font-Bold mb-2 lg:mb-4">Books</h2>
            <div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;