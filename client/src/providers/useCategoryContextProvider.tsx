import { useContext } from 'react';

import { CategoryContext } from '../contexts/CategoryContext';
import { CategoryContextI } from '../types/category.type';

const useCategoryContextProvider = (): CategoryContextI => {
  const categoryContext = useContext(CategoryContext);

  return categoryContext;
};

export default useCategoryContextProvider;
