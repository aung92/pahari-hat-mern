import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  shopName: {
    type: String,
    required: true,
    trim: true
  },
  ownerName: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  email: String,
  district: {
    type: String,
    enum: ['bandarban', 'rangamati', 'khagrachhari', 'dhaka', 'chittagong'],
    required: true
  },
  productType: {
    type: String,
    enum: ['honey', 'fruits', 'meat', 'spices', 'seafood', 'vegetables'],
    required: true
  },
  address: String,
  description: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'suspended'],
    default: 'pending'
  },
  totalEarnings: {
    type: Number,
    default: 0
  },
  balance: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Vendor = mongoose.model('Vendor', vendorSchema);
export default Vendor;