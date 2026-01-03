import React from 'react';
import './Header.css';

const ResultTitle = ({ text }) => {
  return (
    <h1 className="result-title">
      {text}
    </h1>
  );
};

export default ResultTitle;