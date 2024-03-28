import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, saveRead } from "../utility/localstorageRead";
import { getStoredWishlistBook, removeFromWishlist, saveWishlist } from "../utility/localstorageWishlist";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);

    const handleRead = () => {
        const storedReadBooks = getStoredReadBook();
        const storedWishlistBooks = getStoredWishlistBook();

        if (storedReadBooks.includes(id)) {
            toast.error('You have already marked this book as read.');
        } else {
            saveRead(id);
            if (storedWishlistBooks.includes(id)) {
                
                removeFromWishlist(id);
            }
            toast.success('You have marked this book as read.');
        }
    }


    const handleWishlist = () => {
        const storedReadBooks = getStoredReadBook();
        const storedWishlistBooks = getStoredWishlistBook();
        if (storedReadBooks.includes(id)) {
            toast.error('You have already marked this book as read.');
        } else if (storedWishlistBooks.includes(id)) {
            toast.error('You have already added this book to your wishlist.');
        } else {
            saveWishlist(id);
            toast.success('You have added this book to your wishlist.');
        }
    }


    const bookDetails = [
        { label: "Number of Pages:", value: book.totalPages },
        { label: "Publisher:", value: book.publisher },
        { label: "Year of Publishing:", value: book.yearOfPublishing },
        { label: "Rating:", value: book.rating }
    ];


    return (

        <div className="flex flex-col lg:flex-row font-workSans h-[500px] gap-8 mt-10 px-20">
            <div className="lg:w-[50%] bg-[#F3F3F3] rounded-[16px]">
                <img src={book.image} className="h-full flex  justify-center items-center  mx-auto p-4" alt="" />
            </div>
            <div className="lg:w-[50%] text-start">
                <h1 className=" font-bold text-[40px] font-playfair">{book.bookName}</h1>
                <p className=" text-[20px] text-[#131313CC] mb-2">By: {book.author}</p>
                <hr />
                <p className=" text-[20px]  text-[#131313CC] my-3">{book.category}</p>
                <hr />
                <p className="text-[16px]  text-[#131313CC]  my-4"><span className="text-black font-bold">Review: </span>{book.review}</p>
                <div className="flex gap-8">
                    <p className="text-black font-bold">Tag</p>
                    {book?.tags?.map((tag, index) => (
                        <button key={index} className="px-4 py-1 rounded-[24px] bg-[#17BE0A12]  text-[#23BE0A]">#{tag}</button>
                    ))}
                </div>
                <hr className="my-6" />
                <div className="font-workSans">
                    {bookDetails?.map((detail, index) => (
                        <div className="flex" key={index}>
                            <p className="w-[30%]">{detail.label}</p>
                            <p className="font-bold text-[#131313CC]">{detail.value}</p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-8 mt-5">
                    <button
                        onClick={handleRead}
                        className="text-black hover:bg-green-400 font-semibold px-4 py-2 rounded-xl border">Read</button>
                    <button
                        onClick={handleWishlist}
                        className="px-4 py-2 rounded-xl text-white bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default BookDetails;
