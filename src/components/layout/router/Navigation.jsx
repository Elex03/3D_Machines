import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "../../../assets/logo.svg"; // Adjust the path as necessary
import { ComponentsDetails } from "../../../pages/ComponentsDetails";
import "../../../App.css";
import { HomePage } from "../../../pages/HomePage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "1rem 2rem",
          color: "white",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <img
          src={logo}
          style={{
            width: "90px",
            height: "90px",
            position: "absolute",
            left: "6rem",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: "1.5rem",
            }}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-not-active"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/conocer"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-not-active"
                }
              >
                Conocer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aprendiendo"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-not-active"
                }
              >
                Aprendiendo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recomendaciones"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-not-active"
                }
              >
                Recomendaciones
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conocer" element={<ComponentsDetails />} />
        <Route path="/aprendiendo" element={<h1>Soy</h1>} />
        <Route path="/recomendaciones" element={<h1>Tongo</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
