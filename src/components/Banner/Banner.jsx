import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/pngwing 1.png'

const Banner = () => {

    return (
        <div className="hero h-[600px] rounded-[24px] bg-[#F3F3F3]  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:p-8  lg:w-2/3 '>
                    <h1 className="text-5xl font-bold font-playfair">Books to freshen up your bookshelf</h1>
                    {/* Remaining task of this button */}
                    <Link to="/books">
                        <button className="btn btn-success text-white mt-6 font-workSans">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;