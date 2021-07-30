import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='settings'>
      <h2 className='secondary-heading'>
        <AiFillSetting className='heading-icon' /> Settings
      </h2>
      <ul>
        <li className='sidebar-item'>
          <Link to='/'>General</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='#'>Contact/Messaging</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='#'>Launch</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/applicant-settings'>Applicant Settings</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='/evaluation-settings'>Evaluation Settings</Link>
        </li>
        <li className='sidebar-item'>
          <Link to='#'>Advanced Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
