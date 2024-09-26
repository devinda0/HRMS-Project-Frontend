import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';  // Import Link
import logo from '../Assets/logo.png'
import profile from '../Assets/pofile.jpg'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Absent Management');

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-8 ">
        <img
          src={logo}
          alt=""
          className="w-30 h-10"
        />
        <span className="font-bold text-lg"></span>
      
        <Link
          to="/"
          className={`${
            activeLink === 'Home' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
          } font-medium transition-colors`}
          onClick={() => setActiveLink('Home')}
        >
          Home
        </Link>

        <Link
          to="/pim-module"
          className={`${
            activeLink === 'PIM Module' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
          } font-medium transition-colors`}
          onClick={() => setActiveLink('PIM Module')}
        >
          PIM Module
        </Link>

        <Link
          to="/absent-management"
          className={`${
            activeLink === 'Absent Management' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'
          } font-medium transition-colors`}
          onClick={() => setActiveLink('Absent Management')}
        >
          Absent Management
        </Link>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-2 ">
      <div className="flex items-center justify-center border border-black bg-white rounded-md px-3 py-1">
          <span className="text-sm font-medium">Employee Mode</span>
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
              <Link to="/settings" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}>
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => console.log('Logout clicked')}
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
