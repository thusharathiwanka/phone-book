import { useContext } from 'react';

import { ToastContext } from '../contexts/ToastContext';
import { ToastContextI } from '../types/toast.type';

const useToastContextProvider = (): ToastContextI => {
  const toastContext = useContext(ToastContext);
  return toastContext;
};

export default useToastContextProvider;
