import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyExoticComponent, Suspense } from "react";
import { routes } from "./routes";

import logo from "../logo.svg";

type JsxElement = () => JSX.Element; 

export interface Routes {
  to: string;
  path: string;
  Component:  JsxElement | LazyExoticComponent<JsxElement>;
  name: string;
}

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
