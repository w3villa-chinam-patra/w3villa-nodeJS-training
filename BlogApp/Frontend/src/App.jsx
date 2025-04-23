import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import { AppRoutes } from "./constants";
import BlogContainer from "./components/blogs/BlogContainer";
import { Login, Register } from "./components";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.BLOGS_ROUTE} element={<BlogContainer />} />
        <Route path={AppRoutes.LOGIN_ROUTE} element={<Login />} />
        <Route path={AppRoutes.REGISTER_ROUTE} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
