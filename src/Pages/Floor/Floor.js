import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import routes from '../../utils/routes';
import buldingIcon from '../../commercial-building_icon.svg';
import floorIcon from '../../icon_floor.svg';
import doorIcon from '../../icon_door.svg';
import backIcon from '../../2849832_arrows_navigation_arrow_left_back_icon.svg';
import officeIcon from '../../icon_appartment.svg';
import floorImg from '../../add-a-device.png';

import './Floor.css';

const Floor = () => {
  const [currentItem, setcurrentItem] = useState(2)
  const data = useSelector((state) => state.building.data);
  const  navItems = [
    { id: 1, name:'All Devices'},
    { id: 2, name:'Offices'},
    { id: 3, name:'Manage devices'},
    { id: 4, name:'User management'},
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
          <button className="back-btn"><img src={backIcon} alt="Back icon" /><span className='back-span'>BACK</span></button>
          <button className="edit">Edit floor</button>
        </div>
      </div>
      <div className="dashboard-title">Floor Dashboard</div>
      {data.map((item) => (
            <div key={item.id} className="detail-page d-flex-center">
              <div className="detail-page-img ">
                <img
                  src={floorIcon}
                  alt={item.name}
                  className="building-img"
                />
              </div>
              <div className="detail-left-container">
                <div className="detail-first-container">
                  <h4>Floor 1</h4>
                </div>
                <div className="detail-second-container ">
                <img src={buldingIcon} alt="right-icon" className="floor-details" />
                  <span>{item.name}</span>
                </div>
                <div className="detail-third-container">
                  <div class="detail-third-container-right">
                    <span><img src={officeIcon} /> Offices: 3</span>
                    <span><img src={doorIcon} /> Rooms: 3</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

      
          <div className="switch-detail-pages">
          <ul className="nav-list">
            {navItems.map(({id, name}) => (      
            <li className={`${currentItem === id ? 'nav-item active':'nav-item'}`} key={id} onClick={(e) => handleSelectItem(e,id)}>
              <a href=''>{name}</a>
            </li>
            ))}

          </ul>
          <div className="select-page-container-floor">
            
            <div className="add-a-floor-img">
              <img src={floorImg} alt="building" className="add-a-floor-img" />
            </div>
            <div className="no-floor">
              <p>There are no devices assigned this building </p>
            </div>
            </div>
              
        </div>
    </div>
  )
}

export default Floor