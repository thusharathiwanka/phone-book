import React, { ReactNode, createContext, useEffect, useState } from 'react';

import { CategoryContextI, CategoryI } from '../types/category.type';
import { BASE_URL } from '../config/app.config';
import { getCategories } from '../api/category.api';

type Props = {
  children: ReactNode;
};

const initialContext = {
  categories: [],
  setCategories: () => {},
};

export const CategoryContext = createContext<CategoryContextI>(initialContext);

const CategoryContextProvider: React.FC<Props> = ({ children }) => {
  const [categories, setCategories] = useState<CategoryI[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryContextProvider;
