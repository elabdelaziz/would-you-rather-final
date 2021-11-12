import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { clearAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const Nav = (props) => {
  const { authedUser, users } = props;
  const avatar = authedUser ? users[authedUser].avatarURL : null;

  const linksList = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/leaderboard",
      name: "Leaderboard",
    },
    {
      link: "/add",
      name: "New Question",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo gradient-text">
          Would You Rather?
        </Link>
        <i onClick={handleToggle} className="hamburger-menu">
          {navbarOpen ? (
            <AiFillCloseCircle className="ham" />
          ) : (
            <GiHamburgerMenu className="ham" />
          )}
        </i>
        <ul className={`main-nav ${navbarOpen ? " showMenu" : ""}`}>
          {linksList.map((item, i) => (
            <li key={i}>
              <NavLink onClick={() => closeMenu()} to={item.link} exact>
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <span>{`hello, ${
              authedUser ? users[authedUser].name : "none"
            }`}</span>
            <img
              src={avatar}
              alt={`Avatar of ${props.authedUser}`}
              className="nav-avatar"
            />
          </li>
          <li>
            <button
              onClick={() => {
                props.dispatch(clearAuthedUser());
                return <Redirect to="/homelogin" />;
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
