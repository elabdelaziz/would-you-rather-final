import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  CssBaseline,
  makeStyles,
  Divider,
  Box,
  Chip,
  Avatar,
  LinearProgress,
} from "@material-ui/core/";

const QuestionAnswer = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      marginTop: "10vw",
      height: "308px",
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
      borderRight: "2px solid #eee",
    },

    selectionColumn: {
      width: "65%",
    },
    voteStat: {
      position: "relative",
    },
    progress: {
      height: "10px",
    },
    questionHead: {
      margin: "5px",
      textAlign: "center",
    },
    center: {
      textAlign: "center",
    },
    chipState: {
        position: 'relative',
        left: '210px',
        bottom: '5px'
    }
  });

  const classes = useStyles();

  const { question, avatar, authedUser, users } = props;

  const totalVoteOptionOne = question.optionOne.votes.length;
  const totalVoteOptionTwo = question.optionTwo.votes.length;
  const totalVotes = totalVoteOptionOne + totalVoteOptionTwo;

  const optionOnePercentage =
    Math.round((totalVoteOptionOne / totalVotes) * 10000) / 100;
  const optionTwoPercentage =
    Math.round((totalVoteOptionTwo / totalVotes) * 10000) / 100;
    
  return (
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
              height={"100%"}
            />
          </div>
          <div className={classes.selectionColumn}>
            <Box m={2} className={classes.voteStat}>
              <h4 className={classes.questionHead}>
                {question.optionOne.text}
              </h4>
              {question.optionOne.votes.includes(authedUser) && (
                <Chip
                  className={classes.chipState}
                  avatar={
                    <Avatar
                      alt="Natacha"
                      src={`${users[authedUser].avatarURL}`}
                    />
                  }
                  label="Your Answer"
                  color="primary"
                />
              )}
              <LinearProgress
                className={classes.progress}
                variant="determinate"
                value={optionOnePercentage}
                color="secondary"
              />
              <p className={classes.center}>
                {optionOnePercentage}% ... {totalVoteOptionOne} out of {""}
                {totalVotes}
              </p>
              <Divider middle="true" />
              <h4 className={classes.questionHead}>
                {question.optionTwo.text}
              </h4>
              {question.optionTwo.votes.includes(authedUser) && (
                <Chip
                  className={classes.chipState}
                  avatar={
                    <Avatar
                      alt="Natacha"
                      src={`${users[authedUser].avatarURL}`}
                    />
                  }
                  label="Your Answer"
                  color="primary"
                />
              )}
              <LinearProgress
                className={classes.progress}
                variant="determinate"
                value={optionTwoPercentage}
                color="secondary"
              />
              <p className={classes.center}>
                {optionTwoPercentage}% ― {totalVoteOptionTwo} out of{" "}
                {totalVotes} votes
              </p>
            </Box>
          </div>
        </div>
      </Card>
    </Container>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionAnswer);
