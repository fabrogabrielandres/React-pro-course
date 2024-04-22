import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Lazypage1 from "../pages/Lazypage1";
import Lazypage2 from "../pages/Lazypage2";
import Lazypage3 from "../pages/Lazypage3";

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>
      <ul>
        <li><NavLink to={"lazy1"}>lazipage1</NavLink></li>
        <li><NavLink to={"lazy2"}>lazipage2</NavLink></li>
        <li><NavLink to={"lazy3"}>lazipage3</NavLink></li>
      </ul>
      <Routes> 
            
              <Route path={"lazy1"} element={<Lazypage1 />} />
              <Route path={"lazy2"} element={<Lazypage2 />} />
              <Route path={"lazy3"} element={<Lazypage3 />} />
            
              {/* <Route path="*" element={<Navigate to="lazy2" replace />} /> */}
              <Route path="*" element={<h1>where are you go?</h1>} />
        </Routes>
    </div>
  );
};

export default LazyLayout;

// className={({ isActive }) => (isActive ? "nav-active" : "")}
// className={({ isActive }) => (isActive ? "nav-active" : "")}
// className={({ isActive }) => (isActive ? "nav-active" : "")}