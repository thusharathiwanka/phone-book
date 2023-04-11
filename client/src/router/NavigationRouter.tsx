import { Route, Routes } from 'react-router-dom';
import Category from '../pages/category/Category';

const NavigationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
    </Routes>
  );
};
export default NavigationRouter;
