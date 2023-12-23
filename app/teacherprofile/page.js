'use client'
import React from 'react';
import { Chip } from '@material-tailwind/react';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <section className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="max-w-full sm:max-w-lg mx-auto bg-white rounded-lg p-5 mt-10">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-20">
          <Chip color="blue" value="Best communicator" className="w-fit mb-2 sm:mb-0" style={{ padding: '2px' }} />
          <Chip color="amber" value="Best Teacher" className="w-fit" style={{ padding: '2px' }} />
        </div>
        <h2 className="text-center text-2xl font-semibold mt-3">Aayush Poudel</h2>
        <p className="text-center text-gray-600 mt-1">Biology Teacher</p>
        <div className="flex justify-center mt-5">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-3">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-3">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-3">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h2>Name:</h2>
          <h2>Institute Name:</h2>
          <h2>Education Level:</h2>
          <h2>Teaching Experience</h2>
          <h2>Overall Rating:</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;

