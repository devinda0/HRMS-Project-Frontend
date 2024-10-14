import React from 'react';

const ContactHRAdmin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-3xl font-bold font-poppins text-center mb-2">Report a Problem</h2>
        <p className="text-center mb-4">Any question or remarks? Just write us a message!</p>
        <form className='border-[2px] p-10 border-black bg-[#DCCECE26] bg-opacity-15'>
            <div className='flex justify-between'>
                <div className="mb-4 w-5/12">
                    <label className="block mb-1 font-poppins font-semibold text-xs" htmlFor="userId">User ID</label>
                    <input type="text" id="userId" className="border border-gray-300 p-1 w-full" />
                </div>
                <div className="mb-4 w-5/12">
                    <label className="block mb-1 font-poppins font-semibold text-xs" htmlFor="email">Email</label>
                    <input type="email" id="email" defaultValue="abcxx@jupyter.com" className="border border-gray-300 p-1 w-full" />
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-poppins font-semibold text-xs" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="border border-gray-300 p-1 w-full" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-poppins font-semibold text-xs" htmlFor="message">Message</label>
                <textarea id="message" className="border border-gray-300 p-1 w-full" rows="4" placeholder="Write your message.."></textarea>
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={onClose} className="bg-gray-300 text-black p-2 rounded">Cancel</button>
                <button type="submit" className="bg-black text-white p-2 rounded">Send Message</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactHRAdmin;
