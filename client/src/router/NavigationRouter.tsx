import { Route, Routes } from 'react-router-dom';

import Category from '../pages/categories/Categories';
import CategoryContextProvider from '../contexts/CategoryContext';

const NavigationRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CategoryContextProvider>
            <Category />
          </CategoryContextProvider>
        }
      />
    </Routes>
  );
};
export default NavigationRouter;
