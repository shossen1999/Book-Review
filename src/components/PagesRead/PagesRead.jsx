import { useEffect, useState } from "react";


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';



const PagesRead = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storedJsonReadBook = localStorage.getItem('read-books');
    const storedReadBooks = JSON.parse(storedJsonReadBook)
    console.log('read', storedReadBooks);
    // console.log(storedJsonReadBook);


    // console.log(storedJsonWishlistBook);
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setBooks(data));

    const staticReadBooks = [];
    for (const book of books) {
      for (const storedReadBook of storedReadBooks) {
        if (book.bookId === parseInt(storedReadBook)) {
          staticReadBooks.push(book)
        }
      }
    }

    setReadBooks(staticReadBooks);
  }, [books]);
  console.log(readBooks);

  console.log(books);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  return (
    <div className="mt-10 overflow-x-auto">
      <div className="inline-block min-w-full">
        <BarChart
          width={window.innerWidth <= 768 ? window.innerWidth * 0.9 : 1200} 
          height={300} 
          data={readBooks}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='bookName' />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" shape={<TriangleBar />} >
            {readBooks?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>

        </BarChart>

      </div>

    </div>
  );
};


export default PagesRead;