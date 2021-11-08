import React, { Fragment } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleOnChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmitQuestion = (e) => {
    e.preventDefault();

    const { optionOne: optionOneText, optionTwo: optionTwoText } = this.state;
    const { authedUser: author, history } = this.props;
    this.props.addQuestionToStore({ optionOneText, optionTwoText, author });
    history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <Fragment>
        <Container maxWidth="sm">
          <div className="new-question-container">
            <h1>Create Poll</h1>
            <h2>Would you Rather?</h2>

            <form autoComplete="off" className="add-new-question-form">
              <TextField
                className="new-question-input"
                id="optionOne"
                label="Option 1"
                placeholder="Option 1"
                color="secondary"
                required
                value={optionOne}
                onChange={(e) => this.handleOnChange(e)}
              />
              <br />
              <TextField
                className="new-question-input"
                id="optionTwo"
                label="Option 2"
                placeholder="Option 2"
                color="secondary"
                required
                value={optionTwo}
                onChange={(e) => this.handleOnChange(e)}
              />

              <Button
                style={{ marginTop: "20px" }}
                type="submit"
                color="secondary"
                fullWidth
                disabled={optionOne <= 0 || optionTwo <= 0}
                variant="contained"
                onClick={(e) => this.handleSubmitQuestion(e)}
              >
                Add Question
              </Button>
            </form>
          </div>
        </Container>
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestionToStore({ optionOneText, optionTwoText, author }) {
      dispatch(
        handleAddQuestion({
          optionOneText,
          optionTwoText,
          author,
        })
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
