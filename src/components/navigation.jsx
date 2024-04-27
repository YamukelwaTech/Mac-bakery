import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../store/actions/navigationActions";
import { Link } from "react-router-dom";

function Navigation({ currentPage, setCurrentPage }) {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className=" py-9">
      <ul className="flex justify-center mr-10 space-x-8">
        <li className="mr-8">
          <img src="logo.png" alt="Logo" className="h-8" />
        </li>
        <li>
          <Link
            to="/"
            className={`text-white ${currentPage === "/" ? "font-bold" : ""}`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`text-white ${
              currentPage === "/about" ? "font-bold" : ""
            }`}
            onClick={() => handleNavigation("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className={`text-white ${
              currentPage === "/menu" ? "font-bold" : ""
            }`}
            onClick={() => handleNavigation("/menu")}
          >
            Menu
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  currentPage: state.navigation.currentPage,
});

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
