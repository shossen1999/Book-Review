import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Readbooks from "../Readbooks/Readbooks";
import Wishlistbooks from "../Wishlistbooks/Wishlistbooks";


const ListedBooks = () => {

  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlists, setWishlists] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    const storedJsonReadBook = localStorage.getItem('read-books');
    const storedReadBooks = JSON.parse(storedJsonReadBook)
    console.log('read', storedReadBooks);
    // console.log(storedJsonReadBook);

    const storedJsonWishlistBook = localStorage.getItem('wishlist-books');
    const storedWishlistBooks = JSON.parse(storedJsonWishlistBook)
    console.log('this is wishlist', storedWishlistBooks);
    // console.log(storedJsonWishlistBook);
    fetch('../books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
    // const read= books.filter()
    const staticReadBooks = [];
    for (const book of books) {
      for (const storedReadBook of storedReadBooks) {
        if (book.bookId === parseInt(storedReadBook)) {
          staticReadBooks.push(book)
        }
      }
    }

    setReadBooks(staticReadBooks);

    const staticWishlistBooks = [];
    for (const book of books) {
      for (const storedWishlistBook of storedWishlistBooks) {
        if (book.bookId === parseInt(storedWishlistBook)) {
          staticWishlistBooks.push(book)
        }
      }
    }

    setWishlists(staticWishlistBooks);
  }, [books]);
  console.log(readBooks);
  console.log(wishlists);
  // console.log(books)




  // console.log(category);
  return (
    <div>
      <h2>Listed Books are here</h2>

      <div className="text-center bg-[#131313] bg-opacity-5 border-green-300 rounded-[16px] ">
        <p className="font-bold p-5 text-[28px] text-[#131313]">Books</p>
      </div>

      <div className="text-center">
        <button className="btn btn-success text-white px-8 mt-6">Sort By</button>
      </div>

      <div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <div className="text-center font-bold my-3">
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>

            </TabList>
          </div>
          <div className="mt-4">
            <TabPanel>
              {/* <p>{readBooks.length}</p> */}
              <div className="flex flex-col gap-6 ">
                {
                  readBooks.map(readbook => <Readbooks key={readbook.bookId} readbook={readbook}></Readbooks>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              {/* <p>{wishlists.length}</p> */}
              {
                wishlists.map(wishlist => <Wishlistbooks key={wishlist.bookId} wishlist={wishlist}></Wishlistbooks>)
              }
            </TabPanel>

          </div>
        </Tabs>

      </div>



    </div>
  );
};

export default ListedBooks;