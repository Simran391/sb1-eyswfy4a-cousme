import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 pt-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          RETURN TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;