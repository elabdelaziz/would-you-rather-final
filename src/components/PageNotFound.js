import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sorry, Page Not Found</h1>
      <Link to="/homelogin">
        <Button fullWidth variant="contained" color="secondary">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
