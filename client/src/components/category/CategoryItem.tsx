import { Link } from 'react-router-dom';
import { CategoryI } from '../../types/category.type';

type Props = {
  category: CategoryI;
};

const CategoryItem: React.FC<Props> = ({ category }) => {
  const { name, _id } = category;

  return (
    <div className="card w-60 border border-gray-600 rounded-lg">
      <div className="px-6 py-4">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between mt-5">
          <Link to={`category/${_id}`} className="btn btn-primary px-5">
            View
          </Link>
          <button className="btn btn-primary px-5 bg-error hover:bg-red-500 border-red-400 hover:border-red-500 focus:outline-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;