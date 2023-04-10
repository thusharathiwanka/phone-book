import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    contacts: { type: [mongoose.Schema.Types.ObjectId], ref: 'contacts' },
  },
  { timestamps: true }
);

const Category = mongoose.model('categories', categorySchema);

export default Category;