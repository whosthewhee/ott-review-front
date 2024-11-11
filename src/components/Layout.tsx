import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuthStore } from "../store/useAuthStore";
import CoverPage from "@/pages/CoverPage";

const Layout = () => {
  const { user } = useAuthStore((state) => state);

  if (!user) {
    return <CoverPage />;
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
