//IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import SinglePortfolioPage from "./pages/SinglePages/SinglePortfolioPage";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SinglePages/SingleBlogPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilPage from "./pages/User/ProfilPage";
import SettingPage from "./pages/User/SettingPage";
import ConnectPage from "./pages/Auth/ConnectPage";
import SuscribePage from "./pages/Auth/SuscribePage";
import DashBoardPage from "./pages/Admin/DashBoardPage";
import PostPortfolioPage from "./pages/Admin/PostPortfolioPage";
import PostBlogPage from "./pages/Admin/PostBlogPage";
import UserListPage from "./pages/Admin/UserListPage";
import PortfolioListPage from "./pages/Admin/PortfolioListPage";
import BlogListPage from "./pages/Admin/BlogListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<SinglePortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<ConnectPage />} />
          <Route path="/logout" element={<SuscribePage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/dashboard/post/portfolio" element={<PostPortfolioPage />}/>
          <Route path="/dashboard/post/blog" element={<PostBlogPage />} />
          <Route path="/dashboard/list/users" element={<UserListPage />} />
          <Route path="/dashboard/list/portfolio" element={<PortfolioListPage />}/>
          <Route path="/dashboard/list/blog" element={<BlogListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
