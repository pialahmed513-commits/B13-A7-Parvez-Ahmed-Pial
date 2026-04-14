import React from "react";
import { Link } from "react-router";


const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      <div className="text-center max-w-md w-full">

        {/* 404 Number */}
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-100 transition"
          >
            Go Back
          </button>
        </div>

        {/* Extra UI */}
        <div className="mt-10">
          <p className="text-sm text-gray-400">
            KeenKeeper — Keep Your Friendships Alive 💙
          </p>
        </div>

      </div>
    </div>
  );
};

export default Error;