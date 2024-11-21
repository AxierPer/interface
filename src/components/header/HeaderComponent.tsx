import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/routes";

export default function HeaderComponent() {
  return (
    <header className="bg-zinc-800 text-white">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-500 text-xl font-bold">
          <a href="#">Your Logo</a>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">
            <Link to={RoutePaths.home}>Blog</Link>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Marketplace
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Company
          </a>
        </nav>

        {/* Botón de Login */}
        <div>
          <Link to={RoutePaths.login}>
            <a
              className="text-gray-300 hover:text-white flex items-center space-x-1"
            >
              <span>Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </header >
  );
}
