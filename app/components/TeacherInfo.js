'use client';
import React, { useState,useRef } from "react";


const TeacherInfo = () => {
    const resetbtn=useRef()


    const[teachers, setTeachers] = useState({});
    const [teachersArray,setTeachersArray]=useState([])
    function handleAddTeacher(){
        setTeachersArray((prev)=>([...prev,teachers]))
        setTeachers({})
        resetbtn.current.click()
        console.log(teachersArray);
        
    }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4 text-[#324A5F]">
        Teacher's Info
      </h1>
      <form className="m-12" >
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900   "
            >
              Name
            </label>
            <input onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Name:e.target.value}
                })
            }}
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label
              for="number"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Phone Number"
              required
              onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Phone:e.target.value}
                })
            }}
              
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Science"
              required
              onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Subject:e.target.value}
                })
            }}
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
              id="Grade"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="10C"
              required
              onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Class:e.target.value}
                })
            }}
            />
            
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    0   "
            placeholder="email"
            required
            onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Email:e.target.value}
                })
            }}
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    0   "
            placeholder="•••••••••"
            required
            onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Password:e.target.value}
                })
            }}
          />
        </div>
        {/* <div class="mb-6">
          <label
            for="confirm_password"
            class="block mb-2 text-sm font-medium text-gray-900   "
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    0   "
            placeholder="•••••••••"
            required
            onChange={(e) => {
                setTeachers((prev)=>{
                   return {...prev,Password:e.target.value}
                })
            }}
          />
        </div> */}
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
            I agree with the{" "}
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
        <button onClick={handleAddTeacher}
          type="submit"
          class="text-white bg-gray-700 ml-4 hover:bg-[#324A5F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add a teacher  +
        </button>
        <button  ref={resetbtn}
          type="reset"
          class="hidden"
        >
reset        </button>
        
      </form>
    </div>
  );
};

export default TeacherInfo;
