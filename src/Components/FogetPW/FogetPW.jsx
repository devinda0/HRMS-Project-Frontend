import React, { useState } from 'react';

const ForgotPassword = ({ isOpen, onClose }) => {
  
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');

  
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset request for:", { userId, email });
    
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <p className="text-center mb-6">Request to Reset Password</p>

        <form onSubmit={handleSubmit} className='border border-black p-5 bg-[#DCCECE26] bg-opacity-15'>
          <div className="mb-4 ">
            <label className="block text-sm font-medium mb-1" htmlFor="userId">User ID</label>
            <input 
              type="text" 
              id="userId" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)} 
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button 
              type="button" 
              onClick={onClose} 
              className="w-1/2 mr-2 border border-gray-300 rounded-md p-2 text-gray-600 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="w-1/2 bg-black text-white rounded-md p-2 hover:bg-black"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
