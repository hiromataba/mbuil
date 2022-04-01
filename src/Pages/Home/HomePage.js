import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import routes from '../../utils/routes';
import buldingImg from '../../commercial-building.svg'


import './HomePage.css';
import HomeHeader from '../../components/HomeHeader';

const HomePage = () => {
  const data = useSelector((state) => state.building.data);
  return (
    <div className="home-page container d ">
      <HomeHeader />
      {data.map((item) => (
        <div key={item.id} className="home-page-wrapper">
         <div >
         <div className="home-page-name">
            <h4>{item.name}</h4>
          </div>
         </div>
          <div className="homepage-img">
            <img src={buldingImg} alt={item.name} className="building-img" />
          </div>
          <Link to={`${routes.buildingDetails}/${item.id}`} >Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
