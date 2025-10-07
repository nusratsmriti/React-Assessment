import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100  px-4 md:px-16">
      {/* Left Section (Logo) */}
      <div className="flex-1 flex items-center">
        <a className="btn btn-ghost text-2xl md:text-3xl text-[#FFD337]">
          <span className="text-[#003EA4] poppins">Auction</span>Gallery
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6  lg:pr-48 justify-between poppins font-semibold">
        <a href="#" className="hover:text-[#003EA4]">
          Home
        </a>
        <a href="#" className="hover:text-[#003EA4]">
          Auctions
        </a>
        <a href="#" className="hover:text-[#003EA4]">
          Categories
        </a>
        <a href="#" className="hover:text-[#003EA4]">
          How it works
        </a>
      </div>

      {/* Right Section (Cart & Avatar) */}
      <div className="flex-none hidden md:flex items-center gap-2">
        {/* Cart */}
        <div className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 
                2 0 100 4 2 2 0 000-4zm-8 
                2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>

        {/* Avatar */}
        <div className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md flex flex-col items-center py-4 md:hidden">
          <a href="#" className="py-2 hover:text-[#003EA4]">
            Home
          </a>
          <a href="#" className="py-2 hover:text-[#003EA4]">
            Auctions
          </a>
          <a href="#" className="py-2 hover:text-[#003EA4]">
            Categories
          </a>
          <a href="#" className="py-2 hover:text-[#003EA4]">
            How it works
          </a>
          <div className="flex items-center gap-4 mt-3">
            <div className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 
                  5M7 13l-2.293 
                  2.293c-.63.63-.184 
                  1.707.707 
                  1.707H17m0 
                  0a2 2 0 
                  100 4 2 2 0 
                  000-4zm-8 
                  2a2 2 0 11-4 
                  0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
