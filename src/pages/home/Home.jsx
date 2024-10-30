import React, { useState, useContext } from 'react';
import Hrm from '../../Components/Assets/hrm2.jpg';
import { FaUser, FaCalendarAlt, FaFileAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HRMGuide from '../../Components/HRMGuide/HRMGuide';
import ContactHRAdmin from '../../Components/ContactAdmin/ContactAdmin';
import ReportProblem from '../../Components/ReportProblem/ReportProblem';
import { AuthContext } from '../../context/AuthContext'; 

const Home = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const { role } = useContext(AuthContext); 
  const handleGuideClick = (e) => {
    e.preventDefault();
    setIsGuideOpen(true);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  const handleReportClick = (e) => {
    e.preventDefault();
    setIsReportOpen(true);
  };

  return (
    <div className="min-h-screen flex-1 bg-custompurple items-center flex flex-col">
      {/* Header Section */}
      <div className="bg-white w-10/12 items-center justify-center py-4 px-10 mt-8"> 
        <div className="items-center">
          <h1 className="text-[32px] font-manrope font-bold text-gray-800 text-center lg:text-center">
            Welcome to Jupiter Apparels' Human Resource Management System!
          </h1>
        </div>
        <div className="flex justify-end">
          <div className="w-3/5 justify-between mt-16">
            <p className="mt-4 text-black lg:text-center font-manrope font-bold text-2xl text-justify">
              As a global leader in the apparel industry, with branches in Sri Lanka, Bangladesh, and Pakistan, we’re committed to simplifying workforce management.
            </p>
            <p className="mt-4 text-black lg:text-center font-manrope font-bold text-2xl text-justify">
              Our easy-to-use HRM platform is designed to enhance efficiency and streamline your daily HR tasks effortlessly.
            </p>
          </div>
          <div>
            <img src={Hrm} alt="HRM illustration" className="w-[385px] h-auto max-w-md" />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="p-10 flex justify-center w-10/12 space-x-6">
        <Link to="/pim-module" className="block w-full">
          <div className="bg-white p-6 rounded-lg items-center justify-center border-[2px] border-transparent hover:border-[#723BE9] shadow-xl lg:h-44 transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaUser className="text-4xl text-gray-700 mr-4" />
              <h3 className="text-3xl font-bold lg:text-center text-black font-manrope">PIM Module</h3>
            </div>
            <p className="text-2xl font-manrope font-normal lg:text-center text-black">
              Manages your personal information and job-related details.
            </p>
          </div>
        </Link>

        <Link to="/absent-management" className="block w-full lg:h-44">
          <div className="bg-white px-6 py-4 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl lg:h-44 transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaCalendarAlt className="text-4xl text-gray-700 mr-4" />
              <h3 className="text-3xl font-bold text-black font-manrope">Absent Management</h3>
            </div>
            <p className="text-2xl font-manrope text-center font-normal text-black">
              Easily apply for and manage your leave.
            </p>
          </div>
        </Link>

        {role === 'CEO' && (
          <Link to="/ceo-dashboard" className="block w-full lg:h-44">
            <div className="bg-white p-6 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl lg:h-44 transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                <FaFileAlt className="text-4xl text-gray-700 mr-4" />
                <h3 className="text-3xl font-bold text-black font-manrope">Report Module</h3>
              </div>
              <p className="text-2xl font-manrope text-center font-normal text-black">
              Generates detailed employee reports easily.
              </p>
            </div>
          </Link>
        )}
      </div>

      {/* Additional Sections */}

      <div className="py-5 w-10/12 space-y-6">
        <div 
          onClick={handleGuideClick} 
          className="bg-white p-8 rounded-lg shadow-lg border-[2px] border-transparent hover:border-[#723BE9] transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-2">
            <FaFileAlt className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-3xl font-bold font-manrope text-black">HRM IT Guide</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-lg">
              This provides first-level general IT related support for all users.
            </p>
          </div>
        </div>

        <div 
          onClick={handleContactClick} 
          className="bg-white p-8 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-3xl font-bold font-manrope text-black">Contact HR Manager</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-lg">
              Easily reach out to the HR Manager for help with system functionality and support.
            </p>
          </div>
        </div>

        <div 
          onClick={handleReportClick} 
          className="bg-white p-8 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-2">
            <FaQuestionCircle className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-3xl font-bold font-manrope text-black">Report a Problem</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-lg">
              Quickly report any issues you encounter with the system for assistance.
            </p>
          </div>
        </div>
      </div>

      <HRMGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      <ContactHRAdmin isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ReportProblem isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </div>
  );
};

export default Home;
