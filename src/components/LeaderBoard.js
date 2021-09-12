import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container, Card, Typography, makeStyles } from "@material-ui/core";
import Nav from "./nav";

const LeaderBoard = (props) => {
  const { users } = props;

  const useStyles = makeStyles({
    root: {
      Width: "100%",
      height: "246px",
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    mainHead: {
      backgroundColor: "#f50057",
      padding: "5px",
      color: "white",
      margin: "0",
      textAlign: "center",
    },
    secContainer: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    leftColumn: {
      display: "flex",
      width: "25%",
    },
    rightColumn: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "10px",
    },
    mainPic: {
      height: "70px",
      borderRadius: "50px",
      margin: "20px 0 0 10px",
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <Nav />
      <Container maxWidth="sm" style={{ marginTop: "10%" }}>
        <Typography variant="h4" style={{ margin: "30px 0 30px 0" }}>
          LeaderBoard:
        </Typography>
        {Object.keys(users)
          .map((id) => ({
            id: id,
            avatar: users[id].avatarURL,
            questionsMade: users[id].questions.length,
            questionsAnswered: Object.keys(users[id].answers).length,
            name: users[id].name,
            score:
              users[id].questions.length +
              Object.keys(users[id].answers).length,
          }))
          .sort((a, b) => b.score - a.score)
          .map((user) => (
            <Card key={user.id} className={classes.root}>
              <h3 className={classes.mainHead}>{user.name}</h3>
              <div className={classes.secContainer}>
                <div className={classes.leftColumn}>
                  <img
                    className={classes.mainPic}
                    src={`${user.avatar}`}
                    alt={`${user.name} avatar`}
                  />
                </div>
                <div className={classes.rightColumn}>
                  <span>{`Score: ${user.score}`}</span>
                  <span>{`Questions added: ${user.questionsMade}`}</span>
                  <span>{`Questions answered: ${user.questionsAnswered}`}</span>
                </div>
              </div>
            </Card>
          ))}
      </Container>
    </Fragment>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
