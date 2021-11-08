import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { clearAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = (props) => {
  const { authedUser, users } = props;
  const avatar = authedUser ? users[authedUser].avatarURL : null;

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo gradient-text">
          Would You Rather?
        </Link>
        <i className="hamburger-menu">
          <GiHamburgerMenu className="ham" />
        </i>
        <ul className="main-nav">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/add">New Question</NavLink>
          </li>
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
