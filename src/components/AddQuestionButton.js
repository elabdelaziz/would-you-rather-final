import React from "react";
import { Link } from "react-router-dom";

const AddQuestionButton = () => {
  return (
    <div className="new-q-btn">
      <Link to="/add" className="new-q-btn-link">
        Add a book
      </Link>
    </div>
  );
};

export default AddQuestionButton;
