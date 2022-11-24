import React from "react";
import "@popperjs/core";
import { navList } from "../shared/navList";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const { pathname } = useLocation();
  return (
    <div className="homepage">
      <div className="profile-avatar mb-3 ps-3">
        <img src="/images/avatar_4.png" alt="" />
      </div>

      <div className="welcome-text ps-3">
        <p className="text-light">
          Hey, <i className="text-warning fa-solid fa-hands-clapping"></i>{" "}
          <br /> <span className="fw-bold">Lily Watson</span>
        </p>
      </div>

      <nav>
        <ul className="nav flex-column">
          {navList.map((nav, i) => (
            <li className="nav-item py-2" key={i}>
              <Link
                to={nav.link}
                className={`nav-link ${pathname === nav.link ? "active" : ""}`}
              >
                <i className={`fas ${nav.icon} ps-3`}></i>
                <span>{nav.name}</span>
              </Link>
            </li>
          ))}

          <li className="nav-item ps-3 py-2">
            <div className="horizontal-line"></div>
          </li>

          <li className="nav-item py-2">
            <Link
              to={"/#settings"}
              className={`nav-link ${pathname === "/#signout" ? "active" : ""}`}
            >
              <i className="fas ps-3 fa-arrow-right-from-bracket"></i>
              <span>Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
