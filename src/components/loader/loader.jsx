import React from 'react';
import './loader.css';
import intro from '../../img/logo.webp';

const Loader = ({ showIntro }) => {
  return (
    <div className={`loader ${showIntro ? 'show' : 'hide'}`}>
      <div className="loader-content">
        <img src={intro} alt="Logo" className="logo" />
      </div>
    </div>
  );
}

export default Loader;