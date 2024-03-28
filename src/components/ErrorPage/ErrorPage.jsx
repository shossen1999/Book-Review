import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";
// import NotFoundImage from "../assets/not_found.svg";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold text-red-500 mb-6">
                <AiOutlineWarning className="inline-block text-6xl" />
                Oops! 404 Not Found
            </h2>
            {/* <img src={NotFoundImage} alt="404 Not Found" className="w-64 mb-6" /> */}
            <p className="text-lg text-gray-600 mb-6">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
