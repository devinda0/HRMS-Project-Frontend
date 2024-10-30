import React, { useState } from 'react';
import ContactHRAdmin from '../../Components/ContactAdmin/ContactAdmin';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const handleContactClick = (e) => {
        e.preventDefault();
        setIsContactOpen(true);
      };
  return (
    <div className="px-28 py-6 text-gray-800">
      <button className="text-lg text-blue-500 hover:underline mb-4 bg-customblue p-2 rounded-lg">&larr; Back</button>
      <h1 className="text-2xl font-semibold mb-6">Terms of Service</h1>

      <div className="space-y-6">
        <Section
          title="1. Acceptance of Terms"
          content="By accessing and using the Jupiter Apparels Human Resource Management (HRM) system, you agree to comply with these Terms of Service. If you do not agree, please refrain from using the system."
        />
        <Section
          title="2. Purpose of the HRM System"
          content="This HRM system is provided exclusively for managing employee information, attendance, leave requests, and other HR-related functions. It is intended for internal use only and is not for commercial purposes."
        />
        <Section
          title="3. User Responsibilities"
          content={
            <ul className="list-disc pl-6">
              <li>Provide accurate and up-to-date personal information.</li>
              <li>Use the system in a responsible manner, ensuring that your account credentials remain confidential.</li>
              <li>Report any issues or unauthorized access immediately.</li>
            </ul>
          }
        />
        <Section
          title="4. Data Privacy"
          content={
            <>
              Your use of the HRM system is subject to our{' '}
              <Link to="/privacy" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>
              , which explains how your personal data is collected, used, and protected.
            </>
          }
        />
        <Section
          title="5. Access and Security"
          content="Access to the HRM system is restricted to authorized employees only. You are responsible for maintaining the security of your account and must not share your login credentials with others."
        />
        <Section
          title="6. Modifications"
          content="We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the system constitutes acceptance of the updated Terms."
        />
        <Section
          title="7. Governing Law"
          content="These Terms of Service are governed by the laws of Sri Lanka."
        />
        <Section
          title="8. Contact Information"
          content={
            <>
              For any questions or concerns regarding these Terms of Service, please contact your HR representative.
              <div onClick={handleContactClick} className="mt-2">
                <a href="" className="text-blue-500 hover:underline">Contact HR Admin</a>
              </div>
            </>
          }
        />
      </div>

      <footer className="mt-8 text-gray-600">
        By using the HRM system, you acknowledge that you have read and understood these Terms of Service. Thank you for being a part of Jupiter Apparels!
      </footer>
      <ContactHRAdmin isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
    
  );
};

const Section = ({ title, content }) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default TermsOfService;
