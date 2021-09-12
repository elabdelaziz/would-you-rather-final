import React, { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { makeStyles } from "@material-ui/core/styles";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Redirect } from "react-router-dom";
import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Card,
  Button,
} from "@material-ui/core/";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginTop: "10vw",
    height: "370px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    marginTop: "20px",
    backgroundColor: "white",
  },
  selection: {
    cursor: "pointer",
  },

  logHeader: {
    margin: "20px",
  },
  btn: {
    marginTop: "20px",
  },
});

function HomeLogin(props) {
  let [currUserId, handleChange] = useState(null);
  let [hasChoosed, changeHasChoosed] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleLoginDispatch = (event) => {
    const { dispatch } = props;
    dispatch(setAuthedUser(currUserId));
    changeHasChoosed((hasChoosed = true));
  };

  const { users } = props;
  const classes = useStyles();

  if (hasChoosed) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Card className={classes.root}>
        <Avatar className={classes.avatar}>
          <InsertEmoticonIcon color="secondary" fontSize="large" />
        </Avatar>
        <Typography className={classes.logHeader} variant="h4">
          Would You Rather?
        </Typography>
        <Typography variant="subtitle1">Pick Your Hero</Typography>

        <select
          className={classes.selection}
          onChange={(event) => {
            handleChange((currUserId = event.target.value));
            setBtnDisabled(false);
          }}
        >
          <option value="select user" selected disabled>
            Select user...
          </option>
          {Object.keys(users).map((key) => {
            return (
              <option value={users[key].id} key={key}>
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
      </Card>
    </Container>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(HomeLogin);
