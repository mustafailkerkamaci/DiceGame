import React from 'react';
import ResultTitle from './ResultTitle';
import HeaderIcon from './HeaderIcon';
import './Header.css';

// result prop'unu aldık
const HeaderContainer = ({ result }) => {
  return (
    <div className="header-container">
      <div className="title-wrapper">
        <ResultTitle text={result} />
        <HeaderIcon />
      </div>
    </div>
  );
};

export default HeaderContainer;