import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  inventory: Number,
  category: String,
  subcategory: [String],
  specifications: [{
    key: String,
    value: String
  }],
});

const Products = mongoose.model('Products', productSchema);

export default Products;
