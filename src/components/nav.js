import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearAuthedUser } from "../actions/authedUser";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Nav = (props) => {
  const { authedUser, users } = props;
  const avatar = authedUser ? users[authedUser].avatarURL : null;

  return (
    <nav className="nav">
      <div className="logo">
        <li className="logoName">
          <NavLink to="/" exact activeClassName="active">
            Would You Rather?
          </NavLink>
        </li>
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li style={{ color: "yellow" }}>{`hello ${users[authedUser].name}`}</li>
        <li>
          {/* <span >helo</span> */}
          <span className="userProfile">
            <img
              src={avatar}
              alt={`Avatar of ${props.authedUser}`}
              className="nav-avatar"
            />
          </span>
        </li>
        <li>
          <Button
            color="secondary"
            onClick={() => {
              props.dispatch(clearAuthedUser());
              return <Redirect to="/homelogin" />;
            }}
          >
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
