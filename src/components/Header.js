import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'></div>
      <nav className='sm-nav'></nav>
      <nav className='nav'>
        <ul className='nav__right'>
          <li className='dropdown'>
            <Link to='' className='dropdown-btn'>
              Programs
              <IoMdArrowDropdown className='dropdown-btn-icon' />
            </Link>
            <div className='dropdown-content'>
              <Link className='dropdown-item' to='#'>
                Link 1
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 2
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 3
              </Link>
            </div>
          </li>

          <li className='dropdown'>
            <Link to='' className='dropdown-btn'>
              Awards <IoMdArrowDropdown className='dropdown-btn-icon' />
            </Link>
            <div className='dropdown-content'>
              <Link className='dropdown-item' to='#'>
                Link 1
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 2
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 3
              </Link>
            </div>
          </li>

          <li className='dropdown'>
            <Link to='' className='dropdown-btn'>
              Users <IoMdArrowDropdown className='dropdown-btn-icon' />
            </Link>
            <div className='dropdown-content'>
              <Link className='dropdown-item' to='#'>
                Link 1
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 2
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 3
              </Link>
            </div>
          </li>

          <li className='dropdown'>
            <Link to='' className='dropdown-btn'>
              Settings <IoMdArrowDropdown className='dropdown-btn-icon' />
            </Link>
            <div className='dropdown-content'>
              <Link className='dropdown-item' to='#'>
                General
              </Link>
              <Link className='dropdown-item' to='#'>
                Contact/Messaging
              </Link>
              <Link className='dropdown-item' to='#'>
                Launch
              </Link>
              <Link className='dropdown-item' to='#'>
                Applicant Settings
              </Link>
              <Link className='dropdown-item' to='#'>
                Evaluation Settings
              </Link>
              <Link className='dropdown-item' to='#'>
                Advanced Settings
              </Link>
            </div>
          </li>
        </ul>
        <ul className='nav__left'>
          <li className='dropdown'>
            <Link to='' className='dropdown-btn'>
              My Evaluations <IoMdArrowDropdown className='dropdown-btn-icon' />
            </Link>
            <div className='dropdown-content'>
              <Link className='dropdown-item' to='#'>
                Link 1
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 2
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 3
              </Link>
            </div>
          </li>
          <li className='dropdown'>
            <Link to='' className='link-btn'>
              My applications
            </Link>
          </li>
          <li className='dropdown'>
            <Link to='' className='dropdown-btn'>
              User Name <IoMdArrowDropdown className='dropdown-btn-icon' />
            </Link>
            <div className='dropdown-content'>
              <Link className='dropdown-item' to='#'>
                Link 1
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 2
              </Link>
              <Link className='dropdown-item' to='#'>
                Link 3
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
