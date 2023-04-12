import React, { ReactNode, createContext, useEffect, useState } from 'react';

import { ToastContextI } from '../types/toast.type';

type Props = {
  children: ReactNode;
};

const initialContext = {
  success: '',
  error: '',
  setSuccess: () => {},
  setError: () => {},
};

export const ToastContext = createContext<ToastContextI>(initialContext);

const ToastContextProvider: React.FC<Props> = ({ children }) => {
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const hiddenTimeout = setTimeout(() => {
      if (error) setError('');
      if (success) setSuccess('');
    }, 3000);

    return () => clearTimeout(hiddenTimeout);
  });

  return (
    <ToastContext.Provider value={{ success, error, setSuccess, setError }}>
      {children}
    </ToastContext.Provider>
  );
};
export default ToastContextProvider;
