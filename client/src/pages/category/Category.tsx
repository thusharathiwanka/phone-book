import { FormEvent, useEffect, useRef, useState } from 'react';

import { BASE_URL } from '../../config/app.config';
import { CategoryI } from '../../types/category.type';
import CategoryItem from '../../components/category/CategoryItem';
import Success from '../../components/toasts/Success';
import Error from '../../components/toasts/Error';
import Alert from '../../components/toasts/Alert';

const Category = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [categories, setCategories] = useState<CategoryI[]>([]);
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

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
        setSuccess('Category has been created.');
        inputRef.current.value = '';
        return;
      }

      setError('Something went wrong');
    } catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setError('');
        const response = await fetch(`${BASE_URL}/categories`);
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        setError('Something went wrong.');
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <form className=" flex justify-between mt-10" onSubmit={handleSubmit}>
        {success ? <Success message={success} /> : ''}
        {error ? <Error message={error} /> : ''}
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
          categories.map((category) => <CategoryItem category={category} />)
        ) : (
          <Alert message="No categories available." />
        )}
      </div>
    </div>
  );
};

export default Category;
