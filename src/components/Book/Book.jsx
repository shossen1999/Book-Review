import PropTypes from 'prop-types'
import { IoStarOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId,image,tags,bookName,author,category,rating}=book;
   
  

    return (
        <div>

            <Link to={`/book/${bookId}`}>
            <div className="card border-[#282828] border-opacity-[20%] rounded-[16px] font-workSans border-2 p-4 md:p-8 md:w-96 bg-base-100 shadow-xl">
                <figure className=" rounded-[16px] p-6 bg-[#F3F3F3]"><img src={image} alt="books" /></figure>
                <div className="card-body">
                    <div className="flex justify-between ">
                        {
                           tags.map( (tag,index) => (<h5 className="text-[#23BE0A]  rounded-[30px] px-2 py-1  bg-[#F3F3F3] font-medium text-[16px] " key={index}>{tag}</h5>) )
                        }
                    </div>
                    <h2 className="card-title font-playfair">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr className='border-2 border-dashed' />
                    <div className='flex justify-between items-center'>
                        <h5 className='text-[#131313] text-[16px] text-opacity-[80%] font-medium '>{category}</h5>
                        <div className='flex gap-2 justify-center items-center'>
                            <h5 className='text-[#131313] text-[16px] text-opacity-[80%] font-medium '>{rating}</h5>
                            
                           <IoStarOutline></IoStarOutline>
                        </div>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            </Link>


        </div>
    );
};

Book.propTypes ={
    book:PropTypes.object,
}

export default Book;