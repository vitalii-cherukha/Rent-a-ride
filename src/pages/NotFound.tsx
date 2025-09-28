import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="max-w-[600px] w-full text-center">
        <h1 className="text-[120px] md:text-[180px] font-bold text-primary leading-none mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-dark-bg mb-4">
          Page Not Found
        </h2>

        <p className="text-base md:text-lg text-grey mb-8 max-w-[400px] mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mb-8">
          <svg
            className="w-32 h-32 mx-auto text-primary opacity-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-250"
          >
            Go to Home
          </Link>
          <Link
            to="/catalog"
            className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-250"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
