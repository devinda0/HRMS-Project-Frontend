import React, { useState } from 'react';
import { axiosWithCredential } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';
import Hrm from '../../Components/Assets/HRM 1.png';
import ReportProblem from '../../Components/ReportProblem/ReportProblem'; 
import ForgotPassword from '../../Components/FogetPW/FogetPW'; 

const Login = () => {
  const [formData, setFormData] = React.useState({ username: '', password: '' });
  const [isReportOpen, setIsReportOpen] = useState(false); 
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); 
  const { setAccessToken, setRole } = useAuth();
  const refreshToken = useRefreshToken();
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosWithCredential
      .post('/login', formData)
      .then((res) => {
        console.log(res);
        setAccessToken(res.data.accessToken);
        setRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const test2 = () => {
    refreshToken();
  };


  return (
    <div className="flex h-screen bg-background1">
      {/* Left section for the logo and image */}
      <div className="flex-1 bg-background1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-800 font-inter">Jupiter Apparels</h1>
          <h2 className="text-4xl text-white mt-2 font-inter font-bold">HRM System</h2>
          <img src={Hrm} alt="HRM illustration" className="w-[500px] h-[450px] mt-6" />
        </div>
      </div>

      {/* Right section for the login form */}
      <div className="flex-1 flex items-center justify-center rounded-bl-[100px] bg-white">
        <form
          className="w-4/6 max-w-full bg-white p-5 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-5xl font-bold text-center mb-16 font-inter">Login</h2>
          
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            User ID
          </label>
          <input
            className="border border-gray-300 w-full py-2 px-4 rounded-lg mb-4"
            value={formData.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            placeholder="Enter your user ID"
          />

          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            className="border border-gray-300 w-full py-2 px-4 rounded-lg mb-4"
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">Remember me</label>
            </div>
            <button
              className="text-indigo-500 hover:text-indigo-700"
              onClick={(e) => {
                e.preventDefault(); 
                setIsForgotPasswordOpen(true); 
              }}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Login
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-500">
              Have an issue? 
              <button
                className="text-indigo-500 hover:text-indigo-700"
                onClick={(e) => {
                  e.preventDefault(); 
                  setIsReportOpen(true); 
                }}
              >
                Report a problem
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Pop-up Modals for Report Problem and Forgot Password */}
      <ReportProblem isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
      <ForgotPassword isOpen={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} />
    </div>
  );
};

export default Login;
