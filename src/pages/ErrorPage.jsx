import React from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_9JkzuI.json" // Replace with your Lottie animation URL
          style={{ height: '300px', width: '300px' }}
        />
        <h1 className="text-3xl font-bold mt-6">Oops! Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </div>
    );
};

export default ErrorPage;