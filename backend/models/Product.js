import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['honey', 'fruits', 'meat', 'spices', 'seafood', 'vegetables']
  },
  categoryName: String,
  estimatePrice: String,
  actualPrice: {
    type: Number,
    default: null
  },
  oldPrice: Number,
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  image: {
    type: String,
    default: 'https://placehold.co/300x250/2d6a4f/white?text=Product'
  },
  source: String,
  stock: {
    type: Number,
    default: 0
  },
  unit: {
    type: String,
    default: 'কেজি'
  },
  deliveryDate: String,
  deadline: Date,
  rating: {
    type: Number,
    default: 4
  },
  reviews: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  updated: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;