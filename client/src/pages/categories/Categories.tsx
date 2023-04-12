import { FormEvent, useRef, useState } from 'react';

import { BASE_URL } from '../../config/app.config';
import CategoryItem from '../../components/category/CategoryItem';
import Success from '../../components/toasts/Success';
import Error from '../../components/toasts/Error';
import Alert from '../../components/toasts/Alert';
import useCategoryContextProvider from '../../providers/UseCategoryContextProvider';

const Category = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { categories, setCategories } = useCategoryContextProvider();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setSuccess('');
    setError('');

    const category = inputRef.current?.value;

    if (!category) return setError('Category cannot be empty!');

    try {
      const response = await fetch(`${BASE_URL}/categories`, {
        method: 'POST',
        body: JSON.stringify({ name: category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok && inputRef.current !== null) {
        const createdCategory = await response.json();
        setSuccess('Category has been created.');
        setCategories([...categories, createdCategory.data]);
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
    <div className="max-w-3xl mx-auto">
      <form className=" flex justify-between mt-10" onSubmit={handleSubmit}>
        {success ? <Success message={success} setMessage={setSuccess} /> : ''}
        {error ? <Error message={error} setMessage={setError} /> : ''}
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
    </div>
  );
};

export default Category;
