import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Container,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  CssBaseline,
  Button,
  Card,
} from "@material-ui/core/";
import { handleAnswer } from "../actions/questions";
import Nav from "./nav";
const QuestionToBeAnswered = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      marginTop: "10vw",
      height: "208px",
      display: "flex",
      flexDirection: "column",
    },

    mainHead: {
      backgroundColor: "#f50057",
      padding: "5px",
      color: "white",
      margin: "0",
      textAlign: "center",
    },

    headingSec: {
      marginTop: "10px",
    },

    secContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },

    imgColumn: {
      width: "25%",
    },

    selectionColumn: {
      width: "75%",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  const { question, authedUser, dispatch, avatar } = props;
  const qid = question.id;

  let [answer, changeSelection] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!answer) {
      return alert("Answer Required");
    }
    dispatch(handleAnswer({ authedUser, qid, answer }));
  };
  return (
    <Fragment>
      <Nav />
      <Container maxWidth="sm">
        <CssBaseline />
        <Card className={classes.root}>
          <h4 className={classes.mainHead}>{question.author} asks</h4>
          <h2 className={classes.mainHead}>Would you rather?</h2>
          <div className={classes.secContainer}>
            <div className={classes.imgColumn}>
              <img
                src={avatar}
                alt={`${question.author} avatar`}
                width={"100%"}
                height={"auto"}
              />
            </div>
            <div className={classes.selectionColumn}>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={answer}
                  onChange={(event) => changeSelection(event.target.value)}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio required={true} />}
                    label={question.optionOne.text}
                  />
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio required={true} />}
                    label={question.optionTwo.text}
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  color="secondary"
                  fullWidth
                  variant="contained"
                  onClick={(event) => handleSubmit(event)}
                >
                  Submit Question Answer
                </Button>
              </FormControl>
            </div>
          </div>
        </Card>
      </Container>
    </Fragment>
  );
};
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(QuestionToBeAnswered);
