import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-700 text-white shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* Logo and Title */}
        <div className="flex items-center ml-8">
          <img
            src="/logo.png" // Replace with your logo/icon
            alt="Task Manager Logo"
            className="mr-3 w-8 h-8 rounded-full"
          />
          <h1 className="text-2xl font-bold">TASK MANAGER</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 mr-8 text-lg">
          <a
            href="#"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Create New Task
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mr-4 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger menu
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-800 text-center py-4">
          <a
            href="#"
            className="block py-2 hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 hover:text-blue-300 transition-colors duration-200"
          >
            Create New Task
          </a>
          <a
            href="#"
            className="block py-2 hover:text-blue-300 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="block py-2 hover:text-blue-300 transition-colors duration-200"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;