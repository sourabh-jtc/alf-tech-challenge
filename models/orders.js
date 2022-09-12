import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  product: {
    name: String,
    category: String
  },
  quantity: Number,
});

const Orders = mongoose.model('Orders', orderSchema);

export default Orders;
