import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="home">
        <h1 className="home__header">Admin Dashboard</h1>
        <div className="home__title">
          <Link to="" className="btn btn--primary">
            Manage Customer Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
