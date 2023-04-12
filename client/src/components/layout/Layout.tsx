import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="p-5">
      <div className="navbar bg-base-300 rounded-lg">
        <Link className="btn btn-ghost text-xl normal-case" to={'/'}>
          Phonebook
        </Link>
      </div>
      <main className="max-w-3xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
