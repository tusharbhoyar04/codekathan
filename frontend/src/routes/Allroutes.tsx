import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Admin } from "../pages/Admin/Admin";
import Article from "../pages/Article/Article";
import Category from "../pages/Category/Category";
import Dashboard from "../pages/Dashboard/DashBoard";
import { Login } from "../pages/Login/Login";
import SearchbarPage from "../pages/SearchBarPage/SearchbarPage";
import Trending from "../pages/Trending/Trending";
import Users from "../pages/Users/users";
import { Buisness } from "../pages/buisness/Buisness";
import { Culture } from "../pages/culture/Culture";
import { Earth } from "../pages/earth/Earth";
import { Home } from "../pages/home/Home";
import { Innovation } from "../pages/innovation/Innovation";
import { News } from "../pages/news/News";
import { Profile } from "../pages/profile/profile";
import { SearchPage } from "../pages/searchPage/SearchPage";
import { Signup } from "../pages/signup/Signup";
import { Sports } from "../pages/sports/Sports";
import { Travel } from "../pages/travel/Travel";
import { Video } from "../pages/video/Video";
import { LayoutRoute } from "../utils/layoutRoute";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const layout: LayoutRoute[] = [
  { id: 1, name: "Home", path: "/", isVisible: true, element: <Home /> },
  { id: 2, name: "News", path: "/news", isVisible: true, element: <News /> },
  {
    id: 3,
    name: "Sports",
    path: "/sports",
    isVisible: true,
    element: <Sports />,
  },
  {
    id: 4,
    name: "Buisness",
    path: "/buisness",
    isVisible: true,
    element: <Buisness />,
  },
  {
    id: 5,
    name: "Innovation",
    path: "/innovation",
    isVisible: true,
    element: <Innovation />,
  },
  {
    id: 4,
    name: "SearchBarPage",
    path: "/searchbarpage",
    isVisible: false,
    element: <SearchbarPage />,
  },
  {
    id: 7,
    name: "Culture",
    path: "/culture",
    isVisible: true,
    element: <Culture />,
  },
  {
    id: 8,
    name: "Travel",
    path: "/travel",
    isVisible: true,
    element: <Travel />,
  },
  { id: 9, name: "Earth", path: "/earth", isVisible: true, element: <Earth /> },
  {
    id: 10,
    name: "Video",
    path: "/video",
    isVisible: false,
    element: <Video />,
  },
  {
    id: 11,
    name: "Login",
    path: "/login",
    isVisible: false,
    element: <Login />,
  },
  {
    id: 12,
    name: "Signup",
    path: "/signup",
    isVisible: false,
    element: <Signup />,
  },
  {
    id: 13,
    name: "Admin",
    path: "/admin",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Admin />
      </ProtectedRoutes>
    ),
  },
  {
    id: 14,
    name: "Home",
    path: "search/:id",
    isVisible: false,
    element: <SearchPage />,
  },
  {
    id: 15,
    name: "DashBoard",
    path: "/admin/dashboard/",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
  },
  {
    id: 16,
    name: "Trending",
    path: "/admin/trending/",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Trending />
      </ProtectedRoutes>
    ),
  },
  {
    id: 17,
    name: "Category",
    path: "/admin/category/",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Category />
      </ProtectedRoutes>
    ),
  },
  {
    id: 18,
    name: "Article",
    path: "/admin/article/",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Article />
      </ProtectedRoutes>
    ),
  },
  {
    id: 19,
    name: "Setting",
    path: "/admin/users/",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Users />
      </ProtectedRoutes>
    ),
  },
  {
    id: 20,
    name: "Profile",
    path: "/profile",
    isVisible: false,
    element: (
      <ProtectedRoutes>
        <Profile />
      </ProtectedRoutes>
    ),
  },
  {
    id: 21,
    name: "Default",
    path: "*",
    isVisible: false,
    element: <Home />,
  },
];

export const Allroutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {layout.map((item) => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
