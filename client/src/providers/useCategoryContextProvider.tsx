import { useContext } from 'react';

import { CategoryContext } from '../contexts/CategoryContext';

const useCategoryContextProvider = () => {
  const { categories, setCategories } = useContext(CategoryContext);

  return { categories, setCategories };
};

export default useCategoryContextProvider;
