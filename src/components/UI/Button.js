import React from "react";
import './Button.scss'

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
