import "./App.css";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlatformPage from "./pages/PlatformPage";
import ContentPage from "./pages/ContentPage";
import CategoryPage from "./pages/CategoryPage";
import CommentPage from "./pages/CommentPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "@/pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import UserInfoPage from "./pages/UserInfoPage";
import CoverPage from "./pages/CoverPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CoverLayout from "./components/CoverLayout";

function App() {
  return (
    <Routes>
      {/* 공개된 경로 */}
      <Route element={<CoverLayout />}>
        <Route path="/cover" element={<CoverPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* 보호된 경로 */}
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route> */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/platform/:platformId" element={<PlatformPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/contents/:contentId" element={<ContentPage />} />
          <Route path="/comment/:commentId" element={<CommentPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/userInfo" element={<UserInfoPage />} />
        </Route>
      </Route>

      {/* 기본 경로 */}
      <Route path="*" element={<Navigate to="/cover" />} />

      {/* <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform/:platformId" element={<PlatformPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/contents/:contentId" element={<ContentPage />} />
        <Route path="/comment/:commentId" element={<CommentPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/userInfo" element={<UserInfoPage />} />
      </Route> */}
    </Routes>
  );
}

export default App;
