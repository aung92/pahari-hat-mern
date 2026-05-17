import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const MobileBottomNav = () => {
  const { cartCount } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden z-50">
      <div className="flex justify-around py-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
              isActive ? 'text-primary bg-green-50' : 'text-gray-500'
            }`
          }
        >
          <FaHome size={22} />
          <span className="text-xs mt-1">হোম</span>
        </NavLink>

        <NavLink 
          to="/preorder" 
          className={({ isActive }) => 
            `flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
              isActive ? 'text-primary bg-green-50' : 'text-gray-500'
            }`
          }
        >
          <FaSearch size={22} />
          <span className="text-xs mt-1">ব্রাউজ</span>
        </NavLink>

        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            `relative flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
              isActive ? 'text-primary bg-green-50' : 'text-gray-500'
            }`
          }
        >
          <FaShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className="text-xs mt-1">কার্ট</span>
        </NavLink>

        <NavLink 
          to="/my-orders" 
          className={({ isActive }) => 
            `flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
              isActive ? 'text-primary bg-green-50' : 'text-gray-500'
            }`
          }
        >
          <FaHeart size={22} />
          <span className="text-xs mt-1">অর্ডার</span>
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            `flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
              isActive ? 'text-primary bg-green-50' : 'text-gray-500'
            }`
          }
        >
          <FaUser size={22} />
          <span className="text-xs mt-1">আমি</span>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileBottomNav;