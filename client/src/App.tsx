import Error from './components/toasts/Error';
import Success from './components/toasts/Success';
import ToastContextProvider from './contexts/ToastContext';
import NavigationRouter from './router/NavigationRouter';

const App = () => {
  return (
    <ToastContextProvider>
      <Success />
      <Error />
      <NavigationRouter />
    </ToastContextProvider>
  );
};

export default App;
