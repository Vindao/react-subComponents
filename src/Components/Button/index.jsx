import React from "react";

const Button = props => {
  const wrapperStyles = {
    margin: "0 auto"
  };
  const styles = {
    width: "7.5em",
    height: "2em",
    cursor: "pointer"
  };
  return (
    <div style={wrapperStyles}>
      <button style={styles} {...props}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
