'use client'
import React from 'react';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <section className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="max-w-full sm:max-w-lg mx-auto bg-white rounded-lg  p-5 mt-10">
        <h2 className="text-center text-2xl font-semibold mt-3">Aayush Poudel</h2>
        <p className="text-center text-gray-600 mt-1">Grade 10 Student</p>
        
        <div className="mt-5">
          <h2>Name:</h2>
          <h2>Institute Name:</h2>
          <h2>Grade Level:</h2>
          <h2>Average Score:</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;

