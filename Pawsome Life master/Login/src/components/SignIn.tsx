import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

const SignIn: React.FC = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-[28rem]"> 
      <div className="flex items-center justify-center mb-6">
  
        <img src={logo} alt="Pawsome Life Logo" className="w-14 h-14 mr-3" /> 
        <h1 className="text-4xl font-bold text-[#1a5736]">Pawsome Life</h1> 
      </div>
      <h2 className="text-3xl font-semibold text-[#1a5736] mb-8 text-center">Sign In</h2> 
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]" required />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]" required />
        </div>
        <button type="submit" className="w-full bg-[#1a5736] text-white py-3 px-4 rounded-md hover:bg-[#134228] transition duration-300">Sign In</button>
      </form>
      <div className="mt-6 text-center">
        <Link to="/register" className="text-[#1a5736] hover:underline">New user? Register now</Link>
      </div>
    </div>
  );
};

export default SignIn;
