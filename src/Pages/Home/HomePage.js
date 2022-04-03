import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import routes from '../../utils/routes';
import buldingImg from '../../commercial-building.svg';
import rightIcon from '../../arrow_right_icon.svg';
import plusIcon from '../../134224_add_plus_new_icon.svg';
import locationIcon from '../../352521_location_on_icon.svg';
import floorIcon from '../../icon_floor.svg';
import doorIcon from '../../icon_door.svg';
import officeIcon from '../../icon_appartment.svg';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import chipIcon from '../../2317836_chip_computer_cpu_device_frequency_icon.svg';


import './HomePage.css';

const HomePage = () => {
  const data = useSelector((state) => state.building.data);
  return (
    <div className="home-page">
      <div class="home-page-wrapper">
        <div className="container">
          <div className="home-header-title">
            <h3>Buildings (5)</h3>
          </div>
          <div className="home-header-button">
            <button className="btn btn-primary">
              <img src={plusIcon} alt="right-icon" />
              <span>Create new buiding</span>
            </button>
          </div>
        </div>
        <div class="home-page-card-wrapper">
          {data.map((item) => (
            <div key={item.id} className="home-page-card">
              <div className="homepage-img">
                <img
                  src={buldingImg}
                  alt={item.name}
                  className="building-img"
                />
              </div>
              <div className="left-container">
                <div className="first-container">
                  <h4>{item.name}</h4>
                  <span><MdOutlineModeEditOutline /></span>
                </div>
                <div className="second-container">
                  <img src={locationIcon} alt="right-icon" />

                  <span>AlexSandar Malinov 3, commercial</span>
                </div>
                <div className="third-container">
                  <div class="third-container-right">
                    <span><img src={floorIcon} alt="floor icon"/> Floors: 3</span>
                    <span><img src={officeIcon} alt="office icon"/> Offices: 1</span>
                    <span><img src={doorIcon} alt="room icon"/> Rooms: 2</span>
                    <span className='chip-icon'><img src={chipIcon} alt="chip icon"/> Devices: 4</span>
                    <span className="online-devices"> Online devices: 0</span>
                  </div>
                  <Link
                    to={`${routes.buildingDetails}:id`}
                    className="third-container-left"
                  >
                    <img src={rightIcon} alt="right icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
