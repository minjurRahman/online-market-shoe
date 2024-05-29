import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-slate-700 min-h-screen p-10">
        <ul>
          <li className="btn bg-sky-800 p-4 text w-full ">
            <Link to={"profile"}>Profile</Link>
          </li>
          <li className="btn bg-sky-800 p-4 text w-full ">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="btn bg-sky-800 p-4 text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="btn bg-sky-800 p-4 text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className="btn bg-sky-800 p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="btn p-4 bg-red-500 text w-full">
            {user && (
              <button onClick={handleLogout} className="">
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
