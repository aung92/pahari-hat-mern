import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { FaMountain, FaShoppingCart, FaUser, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <FaMountain className="text-primary text-2xl" />
            <span className="font-bold text-primary text-lg">পাহাড়ি হাট</span>
          </Link>

          {/* Desktop Search - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden text-gray-600"
            >
              <FaSearch size={20} />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-gray-600 text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-1"
              >
                <FaUser className="text-gray-600 text-xl" />
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {user ? (
                    <>
                      <div className="px-4 py-2 border-b">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.mobile}</p>
                      </div>
                      <Link to="/my-orders" className="block px-4 py-2 hover:bg-gray-50">
                        আমার অর্ডার
                      </Link>
                      <button 
                        onClick={logout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-500"
                      >
                        লগআউট
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 hover:bg-gray-50">
                        লগইন
                      </Link>
                      <Link to="/register" className="block px-4 py-2 hover:bg-gray-50">
                        সাইন আপ
                      </Link>
                      <Link to="/vendor/login" className="block px-4 py-2 hover:bg-gray-50 border-t">
                        ভেন্ডর লগইন
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden px-4 pb-3">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;