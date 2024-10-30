import React from 'react';
import { Menu } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';  
import logo from '../Assets/logo.png'
import profile from '../Assets/pofile.jpg'
import useAuth from '../../hooks/useAuth';
import { axiosWithCredential } from '../../api/axios';
import useWaitingSpinner from '../../hooks/useWaitingSpinner';

const Navbar = () => {
  const location = useLocation(); 
  const isAbsentManagementPage = location.pathname === '/absent-management';
  const { addWaiter, removeWaiter } = useWaitingSpinner();
  const {role, setAccessToken} = useAuth();

  const handleLogout = () => {
    addWaiter('navbar');
    axiosWithCredential.post('/user/logout')
      .then(() => {
        setAccessToken(null);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        removeWaiter('navbar');
      });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md z-50">
      
      <div className="flex items-center space-x-8 ">
        <img src={logo} alt="" className="w-30 h-10" />

        <Link
          to="/"
          className={`${
            location.pathname === '/' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
          } font-medium font-manrope transition-colors`}
        >
          Home
        </Link>

        {(role==='Manager'|| role==='Admin') && (
          <Link
            to="/pim-module"
            className={`${
              location.pathname === '/pim-module' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
            } font-medium font-manrope transition-colors`}
          >
            PIM Module
          </Link>
        )}

        <Link
          to="/absent-management"
          className={`${
            location.pathname === '/absent-management' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
          } font-medium font-manrope transition-colors`}
        >
          Absent Management
        </Link>

        {role === 'Admin' && (
          <Link
            to="/reports"
            className={`${
              location.pathname === '/reports' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
            } font-medium font-manrope transition-colors`}
          >
            Reports
          </Link>
        )}
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-2 ">
        <div className="flex items-center justify-center border border-black bg-white rounded-md px-3 py-1">
          <span className="text-sm font-medium font-poppins">
            {isAbsentManagementPage ? role : role}
          </span>
        </div>
        <Menu as="div" className="relative inline-block ">
          <Menu.Button className="flex items-center space-x-2 focus:outline-none" aria-label="User menu">
            <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
          </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <div className="p-4 border-b">
            <p className="text-sm font-bold">Lisa Anderson</p>
            <p className="text-sm text-gray-500">Senior Accountant</p>
          </div>
          <Menu.Item>
            {({ active }) => (
              <Link to="/profile" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}>
                Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleLogout}
                className={`block w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      </div>
    </nav>
  );
};

export default Navbar;
