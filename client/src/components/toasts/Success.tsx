import useToastContextProvider from '../../providers/useToastContextProvider';

const Success: React.FC = () => {
  const { success } = useToastContextProvider();

  return (
    <>
      {success ? (
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
            <span>Success! {success}</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default Success;
