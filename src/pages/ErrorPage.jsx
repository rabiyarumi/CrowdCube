import Lottie, { useLottie } from "lottie-react";
import { Link } from 'react-router-dom';
import lottieError from "../assets/404-lottie.json"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen  text-center">

          <div className='w-3/5'>
          <Lottie animationData={lottieError} loop={true} ></Lottie>
          </div>
          <div>
            <Link to={"/"} className='btn btn-outline btn-error' >Back to Home</Link>
          </div>
       
      </div>
    );
};

export default ErrorPage;