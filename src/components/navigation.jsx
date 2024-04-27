import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../store/actions/navigationActions";
import { Link } from "react-router-dom";

function Navigation({ currentPage, setCurrentPage }) {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => handleNavigation("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => handleNavigation("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => handleNavigation("/menu")}>
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
