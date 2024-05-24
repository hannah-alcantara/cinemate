import { Outlet } from "react-router-dom";
import Header from "../components/Navigation/Header";

export function Root() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
