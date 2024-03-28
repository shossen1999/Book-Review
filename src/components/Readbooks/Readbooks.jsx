import { GrLocation } from "react-icons/gr";
import publisherImg from '../../assets/images/Vector.png'
import pageImg from '../../assets/images/Vector (1).png'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const Readbooks = ({ readbook }) => {

    const { bookId, publisher, totalPages, yearOfPublishing, image, tags, bookName, author, category, rating } = readbook;



    return (

        <div className="card flex flex-col lg:flex-row card-side lg:m-0 m-4 bg-base-100 shadow-xl p-8 border-[#282828] border-opacity-[20%] rounded-[16px] border-2">
            <div className="lg:w-[20%] bg-[#F3F3F3] rounded-[16px]">
                <img src={image} className="h-full flex  justify-center items-center  mx-auto p-4" alt="" />
            </div>
            <div className="card-body flex flex-col space-y-2">
                <h1 className=" font-bold text-[24px] ">{bookName}</h1>
                <p className=" text-[16px] text-[#131313CC] text-opacity-5 mb-2 font-medium">By: {author}</p>


                <div className="flex items-center lg:gap-4 gap-1">
                    <div className=" lg:w-[80px]"><p className="text-black font-bold">Tag</p></div>
                    <div className="flex lg:gap-3 gap-1 ">
                        {
                            tags.map((tag, index) => (

                                <p className="lg:px-4 px-6 py-1 rounded-[24px] bg-[#17BE0A12]  text-[#23BE0A]" key={index}> #{tag}</p>
                            ))

                        }
                    </div>

                    <div className='flex gap-2 justify-center items-center'>
                        <GrLocation></GrLocation>
                        <h5 className='text-[#131313] text-[16px] text-opacity-[80%] font-medium '>Year of Publishing : {yearOfPublishing}</h5>


                    </div>
                </div>

                {/* publisher */}
                <div className="flex gap-8">
                    <div className="flex gap-2 items-center">
                        <img src={publisherImg} className="h-[16px]" alt="" />
                        <p>Publisher :{publisher}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <img src={pageImg} className="h-[16px]" alt="" />
                        <p>Page:{totalPages}</p>
                    </div>

                </div>

                <hr className="border-2" />
                {/* publisher end */}

                {/* category */}
                <div className="flex gap-5 items-center">
                    <div> <p className="px-4 py-1 text-[#328EFF] bg-[#328EFF] bg-opacity-15 rounded-[30px]">Category : {category}</p>
                    </div>
                    <div> <p className="px-4 py-1 text-[#FFAC33] bg-[#FFAC33] bg-opacity-15 rounded-[30px]">Rating : {rating} </p>
                    </div>
                    <Link to={`/book/${bookId}`}>
                        <button className="btn btn-success px-4 text-white rounded-[30px] ">View Details</button>
                    </Link>
                </div>


                
            </div>
        </div>


    );
};

Readbooks.propTypes = {
    readbook: PropTypes.object
}
export default Readbooks;