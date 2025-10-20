import { Link } from "react-router-dom";
import { House } from "@phosphor-icons/react";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-300">404</h1>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Page not found
          </h2>
          <p className="mt-2 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-repurp text-white hover:bg-purple-700 transition-colors"
        >
          <House weight="bold" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
