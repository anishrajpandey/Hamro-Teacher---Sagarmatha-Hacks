'use client';
import React from "react";


const StudentsInfo = () => {
  

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4 text-[#324A5F]">
        Add Student's Info
      </h1>
      <form className="m-12" >
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900   "
            >
              Full Name
            </label>
            <input 
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label
              for="number"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Student ID
            </label>
            <input
              type="ID"
              id="ID"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="****-****"
              required
            />
          </div>
          <div>
            <label
              for="class"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Class
            </label>
            <input
              type="text"
              id="class"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Science"
              required
            />
          </div>
        
        </div>
       
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900">
            I agree with the
            <a href="#" class="text-blue-600 hover:underline">
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <button
          type="submit"
          class="text-white bg-gray-700 ml-16 hover:bg-[#324A5F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add a Student  +
        </button>
        <button  
          type="reset"
          class="hidden"
        >
      </button>
        
      </form>
    </div>
  );
};

export default StudentsInfo;
