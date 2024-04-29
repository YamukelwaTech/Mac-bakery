import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../store/actions/navigationActions";
import { Link } from "react-router-dom";
import logo from "../assets/McDonald's.svg";

function Navigation({ currentPage, setCurrentPage }) {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="fixed top-0 left-0 bg-red-600 0 w-full py-4 z-10">
      <div className="max-w-4xl mx-auto">
        <ul className="flex items-center justify-center">
          <li className="mr-6 flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <span className="text-white font-bold">Bakery</span>
          </li>
          <NavItem
            to="/"
            currentPage={currentPage}
            handleNavigation={handleNavigation}
          >
            Home
          </NavItem>
          <NavItem
            to="/about"
            currentPage={currentPage}
            handleNavigation={handleNavigation}
          >
            About
          </NavItem>
          <NavItem
            to="/menu"
            currentPage={currentPage}
            handleNavigation={handleNavigation}
          >
            Menu
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ to, currentPage, handleNavigation, children }) => {
  const isCurrentPage = currentPage === to;
  return (
    <li className="ml-6">
      <Link
        to={to}
        className={`text-white ${isCurrentPage ? "font-bold" : ""}`}
        onClick={() => handleNavigation(to)}
        style={{ color: isCurrentPage ? "black" : "white" }}
      >
        {children}
      </Link>
    </li>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.navigation.currentPage,
});

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
