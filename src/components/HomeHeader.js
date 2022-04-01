import React from 'react';

const HomeHeader = () => {
  return (
    <div className="container d-flex justify-content-between">
      <div className="home-header-title">
        <h3>
          Buildings (5)
        </h3>
      </div>
      <div className="home-header-button">
        <button className="btn btn-primary">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
