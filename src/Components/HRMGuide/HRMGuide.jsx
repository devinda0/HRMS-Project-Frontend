import React from 'react';

const HRMGuide = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-screen shadow-lg relative">
        <button
          className="absolute top-4 left-4 text-xl text-gray-600 hover:text-gray-900 mb-5"
          onClick={onClose}
        >
          &larr; Back
        </button>
        <h2 className="text-4xl font-bold mb-4 mt-5">HRM IT Guide</h2>
        <p className="text-lg mb-4">
          Need help using the HRM system? Our IT Support page is here to guide you through
          every step of managing your HR tasks. Whether you’re setting up employee profiles,
          managing leave requests, or generating reports, we provide easy-to-follow
          instructions and tips to ensure you get the most out of the system.
        </p>
        <h3 className="font-bold text-xl mb-2">Support Resources:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Getting Started:</strong> Learn how to log in, navigate, and use the system.</li>
          <li><strong>Personal Information Management (PIM):</strong> Step-by-step guides on how to view and edit employee details.</li>
          <li><strong>Absence Management:</strong> Find out how to apply and track leave requests.</li>
          <li><strong>Reports and Analytics:</strong> Instructions on generating detailed HR reports for data-driven decisions.</li>
        </ul>
        <p className="text-lg">
          We're here to help with FAQs, tutorials, and direct support to ensure you have a
          smooth experience. Let us guide you in optimizing your use of the HRM system!
        </p>
      </div>
    </div>
  );
};

export default HRMGuide;
