import { FormEvent, useRef } from 'react';

import CategoryItem from '../../components/category/CategoryItem';
import Alert from '../../components/toasts/Alert';
import useCategoryContextProvider from '../../providers/useCategoryContextProvider';
import { createCategory } from '../../api/category.api';
import useToastContextProvider from '../../providers/useToastContextProvider';

const Categories = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { categories, setCategories } = useCategoryContextProvider();
  const { setSuccess, setError } = useToastContextProvider();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const category = inputRef.current?.value;

    if (!category) return setError('Category cannot be empty!');

    try {
      const response = await createCategory(category);

      if (response.ok && inputRef.current !== null) {
        const createdCategory = await response.json();
        setSuccess('Category has been created.');
        setCategories([...categories, createdCategory]);
        inputRef.current.value = '';
        return;
      }

      setError('Something went wrong');
    } catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };

  return (
    <>
      <form className=" flex justify-between mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add Category"
          className="input input-bordered w-full flex-1 mr-5"
        />
        <button className="btn btn-primary rounded-lg">Add Category</button>
      </form>
      <div className="flex flex-wrap mt-10 gap-6">
        {categories?.length > 0 ? (
          categories.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))
        ) : (
          <Alert message="No categories available." />
        )}
      </div>
    </>
  );
};

export default Categories;
