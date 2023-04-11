import { useEffect } from 'react';

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Success: React.FC<Props> = ({ message, setMessage }) => {
  useEffect(() => {
    const hiddenTimeout = setTimeout(() => setMessage(''), 3000);

    return () => clearTimeout(hiddenTimeout);
  }, []);

  return (
    <div className="alert alert-success shadow-lg absolute left-1/2 top-10 w-auto -translate-x-1/2">
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Success! {message}</span>
      </div>
    </div>
  );
};
export default Success;
