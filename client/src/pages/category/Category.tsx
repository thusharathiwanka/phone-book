import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { getCategory, updateCategory } from '../../api/category.api';
import { CategoryI } from '../../types/category.type';
import useToastContextProvider from '../../providers/useToastContextProvider';

type Params = {
  id: string;
};

const Category = () => {
  const { id } = useParams<Params>();
  const [category, setCategory] = useState<CategoryI>();
  const { setError, setSuccess } = useToastContextProvider();

  useEffect(() => {
    const fetchCategory = async () => {
      if (id) {
        const fetchedCategory = await getCategory(id);

        if (!fetchCategory) {
          return setError('Something went wrong!');
        }

        setCategory(fetchedCategory);
      }
    };

    fetchCategory();
  }, []);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!category || !id) return setError('Category cannot be empty!');

    try {
      const updatedCategory = await updateCategory(id, category.name);

      if (!isEmpty(updatedCategory)) {
        setSuccess('Category has been updated.');
        setCategory(updatedCategory);
        return;
      }

      setError('Something went wrong');
    } catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      <form className=" flex justify-between mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          value={category?.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCategory({ ...category!, name: e.target.value })
          }
          placeholder="Add Category"
          className="input input-bordered w-full flex-1 mr-5"
        />
        <button className="btn btn-primary rounded-lg">Update Category</button>
      </form>
      <div>{category?._id}</div>
    </div>
  );
};
export default Category;
