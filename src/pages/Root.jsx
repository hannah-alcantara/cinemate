import { Outlet } from "react-router-dom";
import Header from "../components/Navigation/Header";
import { Footer } from "../components/Navigation/Footer";

export function Root() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
