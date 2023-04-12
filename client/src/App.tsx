import CategoryContextProvider from './contexts/CategoryContext';
import NavigationRouter from './router/NavigationRouter';

const App = () => {
  return (
    <CategoryContextProvider>
      <NavigationRouter />
    </CategoryContextProvider>
  );
};

export default App;
