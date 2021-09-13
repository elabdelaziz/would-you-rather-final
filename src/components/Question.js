import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Container,
  CssBaseline,
  Button,
  Card,
  CardActions,
} from "@material-ui/core/";

const Question = (props) => {
  const { question, author, id } = props;

  const useStyles = makeStyles({
    content: {
      marginTop: "2rem",
    },

    root: {
      Width: "100%",
      height: "246px",
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
      width: "35%",
    },

    selectionColumn: {
      width: "65%",
      textAlign: "center",
      paddingTop: "40px",
    },
    viewBtn: {
      marginTop: "50px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="sm">
        <CssBaseline />
        <Card className={classes.root}>
          <h4 className={classes.mainHead}>{author.name} asks</h4>
          <h2 className={classes.mainHead}>Would you rather?</h2>
          <div className={classes.secContainer}>
            <div className={classes.imgColumn}>
              <img
                src={`${author.avatarURL}`}
                alt={`${question.author} avatar`}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className={classes.selectionColumn}>
              {question.optionOne.text}...
              <CardActions>
                <Link to={`/question/${id}`} style={{ width: "100%" }}>
                  <Button
                    className={classes.viewBtn}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    View Question
                  </Button>
                </Link>
              </CardActions>
            </div>
          </div>
        </Card>
        {/* </Link> */}
      </Container>
    </Fragment>
  );
};
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    authedUser,
    question: question,
    author,
  };
}
export default connect(mapStateToProps)(Question);
