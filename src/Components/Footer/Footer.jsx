import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ReportProblem from '../../Components/ReportProblem/ReportProblem';

const Footer = () => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  return (
    <footer className="footer w-full flex flex-row justify-between items-center bg-custompurple text-base-content p-10">
        <nav>
            <h2>© 2024 All Right Reserved</h2>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
                <Link to={'/privacy'} className='text-blue-600'>Privacy Policy</Link>
                <Link to={'/terms'} className='text-blue-600'>Terms of Service</Link>
                <button
                className="text-indigo-500 hover:text-indigo-700"
                onClick={(e) => {
                  e.preventDefault(); 
                  setIsReportOpen(true); 
                }}
              >
                Report a problem
              </button>
            </div>
        </nav>
        <ReportProblem isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </footer>
  )
}

export default Footer