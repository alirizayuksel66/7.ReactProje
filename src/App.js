import { Route, Routes, Link, NavLink } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

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
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </>
  );
}

export default App;