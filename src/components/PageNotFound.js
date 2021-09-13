import React from "react";
import { Redirect } from "react-router";

const PageNotFound = (props) => {
  return (
    <div>
      <h1>Sorry, Page Not Found</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          return <Redirect to="/" />;
        }}
      >
        Home
      </button>
    </div>
  );
};

export default PageNotFound;
