import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';  

const Register: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-[28rem]">
      <div className="flex items-center justify-center mb-4"> 
        <img src={logo} alt="Pawsome Life Logo" className="w-12 h-12 mr-2" /> 
        <h1 className="text-3xl font-bold text-[#1a5736]">Pawsome Life</h1>
      </div>
      <h2 className="text-2xl font-semibold text-[#1a5736] mb-5 text-center">Register</h2> 
      <form>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" id="fullName" name="fullName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]" required />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
          <input type="tel" id="contact" name="contact" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Do you have a pet?</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="hasPet" value="yes" className="form-radio text-[#1a5736]" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="hasPet" value="no" className="form-radio text-[#1a5736]" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]" required />
        </div>
        <button type="submit" className="w-full bg-[#1a5736] text-white py-2 px-4 rounded-md hover:bg-[#134228] transition duration-300">Sign Up</button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/" className="text-[#1a5736] hover:underline">Already have an account? Sign in</Link>
      </div>
    </div>
  );
};

export default Register;
