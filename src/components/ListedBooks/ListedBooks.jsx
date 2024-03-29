import React, { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Readbooks from "../Readbooks/Readbooks";
import Wishlistbooks from "../Wishlistbooks/Wishlistbooks";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const storedJsonReadBook = localStorage.getItem('read-books');
    const storedReadBooks = storedJsonReadBook ? JSON.parse(storedJsonReadBook) : [];
    
    const storedJsonWishlistBook = localStorage.getItem('wishlist-books');
    const storedWishlistBooks = storedJsonWishlistBook ? JSON.parse(storedJsonWishlistBook) : [];
  
    setReadBooks([]);
    setWishlists([]);
  
    fetch('/books.json')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        const staticReadBooks = [];
        const staticWishlistBooks = [];
        for (const book of data) {
          if (storedReadBooks.includes(String(book.bookId))) {
            staticReadBooks.push(book);
          }
          if (storedWishlistBooks.includes(String(book.bookId))) {
            staticWishlistBooks.push(book);
          }
        }
        setReadBooks(staticReadBooks);
        setWishlists(staticWishlistBooks);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, [localStorage.getItem('read-books'), localStorage.getItem('wishlist-books')]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedReadBooks = [...readBooks].sort((a, b) => {
    if (sortOption === 'rating') {
      return b.rating - a.rating;
    } else if (sortOption === 'totalPages') {
      return b.totalPages - a.totalPages;
    } else if (sortOption === 'yearOfPublishing') {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  });

  const sortedWishlistBooks = [...wishlists].sort((a, b) => {
    if (sortOption === 'rating') {
      return b.rating - a.rating;
    } else if (sortOption === 'totalPages') {
      return b.totalPages - a.totalPages;
    } else if (sortOption === 'yearOfPublishing') {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  });

  return (
    <div>
      <div className="text-center bg-[#131313] bg-opacity-5 border-green-300 rounded-[16px] ">
        <p className="font-bold p-5 text-[28px] text-[#131313] font-workSans">Books</p>
      </div>
      <div className="text-center">
        <select className="btn btn-success text-white px-8 mt-6 font-workSans" onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="totalPages">Total Pages</option>
          <option value="yearOfPublishing">Year of Publishing</option>
        </select>
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="text-center font-bold my-3">
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>
          </div>
          <div className="mt-4">
            <TabPanel>
              <div className="flex flex-col gap-6 ">
                {sortedReadBooks.map(readbook => <Readbooks key={readbook.bookId} readbook={readbook}></Readbooks>)}
              </div>
            </TabPanel>
            <TabPanel>
              {sortedWishlistBooks.map(wishlist => <Wishlistbooks key={wishlist.bookId} wishlist={wishlist}></Wishlistbooks>)}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
