import { Route, Routes, Link, NavLink } from "react-router-dom";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/404";

function App() {

  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}>AnaSayfa</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ backgroundColor: isActive ? 'pink' : 'transparent'})}>İletişim</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog/>} />
          <Route path="categories" element={<Categories />} />
          <Route path="post/:id/:url"  element={<Post />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;