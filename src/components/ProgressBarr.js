import React from "react";

const ProgressBarr = ({ value }) => {
  const containerStyles = {
    height: 16,
    // width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${value}%`,
    backgroundColor: "#f50057",
    borderRadius: "inherit",
    textAlign: "center",
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBarr;
