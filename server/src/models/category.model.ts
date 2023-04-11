import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    contacts: { type: [mongoose.Schema.Types.ObjectId], ref: 'contacts' },
    __v: { type: Number, select: false },
  },
  { timestamps: true }
);

const Category = mongoose.model('categories', categorySchema);

export default Category;
