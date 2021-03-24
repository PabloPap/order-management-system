import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1 className="title">Admin Dashboard</h1>
      <div>
        <Link to="">Manage Customer Orders</Link>
      </div>
    </>
  );
};

export default HomePage;
