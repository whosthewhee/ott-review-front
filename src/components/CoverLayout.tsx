import { Outlet } from "react-router-dom";
import CoverHeader from "@/components/CoverHeader";
import CoverFooter from "@/components/CoverFooter";

const CoverLayout = () => {
  return (
    <div className="overflow-hidden">
      <CoverHeader />
      <Outlet />
      <CoverFooter />
    </div>
  );
};

export default CoverLayout;
