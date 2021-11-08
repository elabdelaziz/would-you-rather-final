import React, { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core/";
import { connect } from "react-redux";

const useStyles = makeStyles({
  btn: {
    marginTop: "20px",
  },
});
function HomeLogin(props) {
  let [currUserId, handleChange] = useState(null);
  let [hasChoosed, changeHasChoosed] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { state } = useLocation();
  const handleLoginDispatch = (event) => {
    const { dispatch } = props;
    dispatch(setAuthedUser(currUserId));
    changeHasChoosed((hasChoosed = true));
  };
  const { users } = props;
  const classes = useStyles();

  if (hasChoosed) {
    return <Redirect to={state?.from || "/"} />;
  }
  return (
    <div className="box">
      <div>
        <h1 className="gradient-text">Would You Rather Game</h1>
      </div>
      <div className="card relative">
        <h1 className="">Would You Rather?</h1>
        <h2>Pick Your character</h2>
        <select
          className=""
          onChange={(event) => {
            handleChange((currUserId = event.target.value));
            setBtnDisabled(false);
          }}
        >
          <option value={true} style={{ display: "none" }}>
            Select user...
          </option>
          {Object.keys(users).map((key) => {
            return (
              <option className="user-options" value={users[key].id} key={key}>
                {users[key].name}
              </option>
            );
          })}
        </select>
        <Button
          disabled={btnDisabled}
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={(event) => handleLoginDispatch(event)}
        >
          login
        </Button>
      </div>
    </div>
  );
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(HomeLogin);
