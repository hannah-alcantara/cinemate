import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export function Root() {
  return (
    <div>
      <Header />
      <div className='p-8'>
        <Outlet />
      </div>
    </div>
  );
}