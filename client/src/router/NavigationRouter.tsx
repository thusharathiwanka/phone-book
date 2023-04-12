import { Route, Routes } from 'react-router-dom';

import Category from '../pages/category/Category';
import Categories from '../pages/categories/Categories';
import CategoryContextProvider from '../contexts/CategoryContext';
import Layout from '../components/layout/Layout';

const NavigationRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <CategoryContextProvider>
              <Categories />
            </CategoryContextProvider>
          }
        />
        <Route path="category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};
export default NavigationRouter;
