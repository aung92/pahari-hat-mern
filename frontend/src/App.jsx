import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Pages
import HomePage from './pages/HomePage';
import PreorderPage from './pages/PreorderPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import MyOrdersPage from './pages/MyOrdersPage';
import TrackOrderPage from './pages/TrackOrderPage';
import ContactPage from './pages/ContactPage';

// Vendor Pages
import VendorLoginPage from './pages/Vendor/VendorLoginPage';
import VendorDashboardPage from './pages/Vendor/VendorDashboardPage';
import VendorProductsPage from './pages/Vendor/VendorProductsPage';
import VendorOrdersPage from './pages/Vendor/VendorOrdersPage';
import VendorPaymentsPage from './pages/Vendor/VendorPaymentsPage';

// Components
import Navbar from './components/common/Navbar';
import MobileBottomNav from './components/common/MobileBottomNav';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Toaster position="bottom-center" />
          <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 font-hind">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/preorder" element={<PreorderPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/my-orders" element={<MyOrdersPage />} />
              <Route path="/track-order" element={<TrackOrderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Vendor Routes */}
              <Route path="/vendor/login" element={<VendorLoginPage />} />
              <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
              <Route path="/vendor/products" element={<VendorProductsPage />} />
              <Route path="/vendor/orders" element={<VendorOrdersPage />} />
              <Route path="/vendor/payments" element={<VendorPaymentsPage />} />
            </Routes>
            <MobileBottomNav />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;