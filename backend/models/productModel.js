import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    enname:  { type: String, required: true, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    vnbrand: { type: String, required: true},
    category: { type: String, required: true },
    encategory: { type: String, required: true },
    subcategory: { type: String, required: false},
    model: { type: String, required: true},
    description: { type: String, required: true },
    endescription: { type: String, required: true},
    parameter: { type: String, required: true },
    enparameter: { type: String, required: true},
    video: { type: String, required: false },
    catalog: { type: String, required: false },
    price: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
