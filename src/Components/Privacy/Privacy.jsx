import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="h-full bg-custompurple p-8 px-28 py-6">
      <button 
        onClick={() => window.history.back()}
        className="text-black hover:text-gray-900 mb-6 text-lg flex items-center bg-customblue p-2 rounded-lg"
      >
        &larr; Back
      </button>
      <div className="bg-custompurple  rounded-lg ">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 mb-6">
          At Jupiter Apparels, we are committed to safeguarding your privacy and ensuring the protection of your personal information. This Privacy Policy outlines how we collect, use, and protect your data within our Human Resource Management (HRM) system.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-4">Data Collection and Use</h3>
        <p className="text-gray-700 mb-4">
          We collect personal information for the sole purpose of managing employee records, attendance, and other HR-related functions. This information is essential for maintaining accurate records and facilitating effective communication.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-4">Data Security</h3>
        <p className="text-gray-700 mb-4">
          We implement robust security measures to protect your personal information from unauthorized access, disclosure, or misuse. Access to your data is restricted to authorized personnel only.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-4">Data Sharing</h3>
        <p className="text-gray-700 mb-4">
          We do not sell or share your personal information with third parties without your explicit consent, except as required by law or for operational purposes necessary to support our HR functions.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-4">Compliance</h3>
        <p className="text-gray-700 mb-4">
          We adhere to all applicable data protection laws and regulations. We regularly review our policies and practices to ensure compliance and to enhance your privacy rights.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h3>
        <p className="text-gray-700 mb-6">
          You have the right to access, correct, or request the deletion of your personal information. For any inquiries or concerns regarding your data, please contact our admin team.
        </p>

        <p className="text-gray-700">
          By using our HRM system, you acknowledge that you have read and understood this Privacy Policy. Thank you for trusting Jupiter Apparels with your information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
