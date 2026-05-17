const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// সব API রুট এখানে যোগ করুন
// ============================================

// ✅ হোম রুট - Vercel এ চেক করার জন্য
app.get('/', (req, res) => {
  res.json({
    message: 'পাহাড়ি হাট API is running! 🚀',
    status: 'active',
    timestamp: new Date().toISOString(),
    endpoints: {
      test: '/api/test',
      health: '/api/health',
      products: '/api/products'
    }
  });
});

// ✅ টেস্ট রুট
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is working perfectly!',
    data: { version: '1.0.0' }
  });
});

// ✅ হেলথ চেক রুট
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is healthy',
    uptime: process.uptime()
  });
});

// ✅ প্রোডাক্ট রুট (ডেমো ডাটা)
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'বান্দরবানের মধু', price: 950, category: 'honey' },
    { id: 2, name: 'রাঙ্গামাটির কমলা', price: 150, category: 'fruits' },
    { id: 3, name: 'পাহাড়ি মুরগি', price: 650, category: 'meat' }
  ]);
});

// ❌ 404 হ্যান্ডলার (সব রুটের শেষে থাকতে হবে)
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'NOT_FOUND',
    message: `Route ${req.originalUrl} not found`,
    availableRoutes: ['/', '/api/test', '/api/health', '/api/products']
  });
});

// লোকাল ডেভেলপমেন্টের জন্য
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Vercel এর জন্য export (এটা সবচেয়ে গুরুত্বপূর্ণ!)
module.exports = app;