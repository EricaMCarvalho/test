import React from 'react';
import './Alert.css';

const Alert = ({ variant, children }) => {
  return <div className={`alert-${variant}`}>{children}</div>;
};

export default Alert;
