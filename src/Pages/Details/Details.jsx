import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import routes from '../../utils/routes';
import locationIcon from '../../352521_location_on_icon.svg';
import buldingImg from '../../commercial-building.svg';
import plusIcon from '../../134224_add_plus_new_icon.svg';
import floorIconSmall from '../../icon_floor_small.svg';
import doorIcon from '../../icon_door.svg';
import backIcon from '../../2849832_arrows_navigation_arrow_left_back_icon.svg';
import officeIcon from '../../icon_appartment.svg';
import floorImg from '../../add-a-floor.png';

import './Details.css';
import { Link } from 'react-router-dom';


const Details = () => {
  const [currentItem, setcurrentItem] = useState(2)
  const data = useSelector((state) => state.building.data);
  const  navItems = [
    { id: 1, name:'All Devices'},
    { id: 2, name:'Floors'},
    { id: 3, name:'Apartements'},
    { id: 4, name:'Rooms'},
    { id: 5, name:'Manage Devices'},
    { id: 6, name:'User management'},
  ]

  const handleSelectItem = (e,id) => {
    e.preventDefault()
    console.log(typeof id);
    setcurrentItem(id)
  }

  return (
    <div class="details-page-home-page">
      <div className="details-page-main-wrapper">
        <div className="details-page-header d-flex-space-between">
          <button className="back-btn d-flex-center"><img src={backIcon} alt="Back icon" /><span className='back-span'>BACK</span></button>
          <button className="edit">Edit building</button>
        </div>
      </div>
      <div className="dashboard-title">Building Dashboard</div>
      {data.map((item) => (
            <div key={item.id} className="detail-page d-flex-space-between">
              <div className="detail-page-img">
                <img
                  src={buldingImg}
                  alt={item.name}
                  className="building-img"
                />
              </div>
              <div className="detail-left-container">
                <div className="detail-first-container d-flex-space-between">
                  <h4>{item.name}</h4>
                </div>
                <div className="detail-second-container">
                <img src={locationIcon} alt="right-icon" />
                  <span>AlexSandar Malinov 3, commercial</span>
                </div>
                <div className="detail-third-container d-flex-space-between">
                  <div class="detail-third-container-right">
                    <span><img src={floorIconSmall} /> Floors: 3</span>
                    <span><img src={officeIcon} /> Offices: 3</span>
                    <span><img src={doorIcon} /> Rooms: 3</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

      <div className="devices-wrapper d-flex-space-between">
        <div className="device-container right">
          <span className="devices">Online Devices</span>
          <span className="number">1</span>
        </div>     
        <div className="device-container left">
          <span className="devices">Total Devices</span>
          <span className="number">1</span>
        </div>
      </div>
          <div className="switch-detail-pages">
          <ul className="nav-list">
            {navItems.map(({id, name}) => (      
            <li className={`${currentItem === id ? 'nav-item active':'nav-item'}`} key={id} onClick={(e) => handleSelectItem(e,id)}>
              <a href=''>{name}</a>
            </li>
            ))}

          </ul>
          <div className="select-page-container">
            <div className="select-page-wrapper">
            <div className="details-page-header-bottom d-flex-space-between">
              <h4 className="back">Floors (0)</h4>
              <button className="edit"><img src={plusIcon} alt="right-icon" /><span>Create new floor</span></button>
            </div>
            <div className="add-a-floor-img d-flex-center">
              <Link to={routes.floor}><img src={floorImg} alt="building" className="add-a-floor-img" /></Link>
            </div>
            <div className="no-floor">
              <p>There are no floors created for this building </p>
            </div>
            </div>
          </div>
              
        </div>
    </div>
  )
}

export default Details