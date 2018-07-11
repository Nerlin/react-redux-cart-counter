import PropTypes from "prop-types";
import React from "react";

import "../styles/Button.css";

export const ButtonTheme = {
  "default": "default",
  "submit": "submit"
};

const ButtonThemeStyles = {
  "default": "Button-Default",
  "submit": "Button-Submit"
};

const Button = ({theme, children, onClick}) => (
  <button className={`Button ${ButtonThemeStyles[theme]}`} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  theme: ButtonTheme.default
};

Button.propTypes = {
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;