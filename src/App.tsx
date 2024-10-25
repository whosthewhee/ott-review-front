import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlatformPage from "./pages/PlatformPage";
import ContentPage from "./pages/ContentPage";
import CategoryPage from "./pages/CategoryPage";
import CommentPage from "./pages/CommentPage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform/:platformId" element={<PlatformPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/contents/:contentId" element={<ContentPage />} />
        <Route path="/comment/:commentId" element={<CommentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
