import React, { useEffect } from 'react';

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Error: React.FC<Props> = ({ message, setMessage }) => {
  useEffect(() => {
    const hiddenTimeout = setTimeout(() => setMessage(''), 3000);

    return () => clearTimeout(hiddenTimeout);
  }, []);

  return (
    <div className="alert alert-error shadow-lg absolute left-1/2 top-10 w-auto -translate-x-1/2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! {message}</span>
      </div>
    </div>
  );
};
export default Error;