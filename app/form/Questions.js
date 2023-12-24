import React, { useState } from "react";

function Questions() {
  const [Answers, setAnswers] = useState([0, 0, 0, 0, 0]);
  return (
    <div>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 w-fit max-w-3xl">
    <h2 className="text-2xl font-medium mb-4"> Teachers Name Survey</h2>
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Subject Knowledge:</label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-red"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(1);
                    }}
                    type="radio"
                    id="Subject Knowledge"
                    name="Subject Knowledge"
                    value="1"
                    className="mr-2"
                  />
                  1
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-blue"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(2);
                    }}
                    type="radio"
                    id="Subject Knowledge"
                    name="Subject Knowledge"
                    value="2"
                    className="mr-2"
                  />
                  2
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(3);
                    }}
                    type="radio"
                    id="Subject Knowledge"
                    name="Subject Knowledge"
                    value="3"
                    className="mr-2"
                  />
                  3
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(4);
                    }}
                    type="radio"
                    id="Subject Knowledge"
                    name="Subject Knowledge"
                    value="4"
                    className="mr-2"
                  />
                  4
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(5);
                    }}
                    type="radio"
                    id="Subject Knowledge"
                    name="Subject Knowledge"
                    value="5"
                    className="mr-2"
                  />
                  5
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Effective Communication
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-red"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(1);
                    }}
                    type="radio"
                    id="Effective Communication"
                    name="Effective Communication"
                    value="1"
                    className="mr-2"
                  />
                  1
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-blue"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(2);
                    }}
                    type="radio"
                    id="Effective Communication"
                    name="Effective Communication"
                    value="2"
                    className="mr-2"
                  />
                  2
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(3);
                    }}
                    type="radio"
                    id="Effective Communication"
                    name="Effective Communication"
                    value="3"
                    className="mr-2"
                  />
                  3
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(4);
                    }}
                    type="radio"
                    id="Effective Communication"
                    name="Effective Communication"
                    value="4"
                    className="mr-2"
                  />
                  4
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(5);
                    }}
                    type="radio"
                    id="Effective Communication"
                    name="Effective Communication"
                    value="5"
                    className="mr-2"
                  />
                  5
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Student Friendly
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-red"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(1);
                    }}
                    type="radio"
                    id="Student Friendly"
                    name="Student Friendly"
                    value="1"
                    className="mr-2"
                  />
                  1
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-blue"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(2);
                    }}
                    type="radio"
                    id="Student Friendly"
                    name="Student Friendly"
                    value="2"
                    className="mr-2"
                  />
                  2
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(3);
                    }}
                    type="radio"
                    id="Student Friendly"
                    name="Student Friendly"
                    value="3"
                    className="mr-2"
                  />
                  3
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(4);
                    }}
                    type="radio"
                    id="Student Friendly"
                    name="Student Friendly"
                    value="4"
                    className="mr-2"
                  />
                  4
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(5);
                    }}
                    type="radio"
                    id="Student Friendly"
                    name="Student Friendly"
                    value="5"
                    className="mr-2"
                  />
                  5
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Class Management
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-red"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(1);
                    }}
                    type="radio"
                    id="Class Management"
                    name="Class Management"
                    value="1"
                    className="mr-2"
                  />
                  1
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-blue"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(2);
                    }}
                    type="radio"
                    id="Class Management"
                    name="Class Management"
                    value="2"
                    className="mr-2"
                  />
                  2
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(3);
                    }}
                    type="radio"
                    id="Class Management"
                    name="Class Management"
                    value="3"
                    className="mr-2"
                  />
                  3
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(4);
                    }}
                    type="radio"
                    id="Class Management"
                    name="Class Management"
                    value="4"
                    className="mr-2"
                  />
                  4
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(5);
                    }}
                    type="radio"
                    id="Class Management"
                    name="Class Management"
                    value="5"
                    className="mr-2"
                  />
                  5
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Creativity
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-red"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(1);
                    }}
                    type="radio"
                    id="creativity"
                    name="creativity"
                    value="1"
                    className="mr-2"
                  />
                  1
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-blue"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(2);
                    }}
                    type="radio"
                    id="creativity"
                    name="creativity"
                    value="2"
                    className="mr-2"
                  />
                  2
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(3);
                    }}
                    type="radio"
                    id="creativity"
                    name="creativity"
                    value="3"
                    className="mr-2"
                  />
                  3
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(4);
                    }}
                    type="radio"
                    id="creativity"
                    name="creativity"
                    value="4"
                    className="mr-2"
                  />
                  4
                </label>
              </div>
              <div className="px-12 w-fit">
                <label
                  htmlFor="color-green"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <input
                    onSelect={() => {
                      Answers.push(5);
                    }}
                    type="radio"
                    id="creativity"
                    name="creativity"
                    value="5"
                    className="mr-2"
                  />
                  5
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questions;
