import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="p-5">
      <div className="navbar bg-base-300 rounded-lg">
        <a className="btn btn-ghost text-xl normal-case">Phonebook</a>
      </div>
      <main className="max-w-3xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
