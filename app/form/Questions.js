import React, { useState } from "react";

function Questions() {
  const [Answers, setAnswers] = useState([0, 0, 0, 0, 0]);
  return (
    <div>
      <div className="bg-white border rounded-lg px-8 py-6  my-8 mx-4 w-full">
        <h2 className="text-2xl font-medium mb-4"> Teachers Name Survey</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Subject Knowledge
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
                    id="color-red"
                    name="color"
                    value="red"
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
                    id="color-blue"
                    name="color"
                    value="blue"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-red"
                    name="color"
                    value="red"
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
                    id="color-blue"
                    name="color"
                    value="blue"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-red"
                    name="color"
                    value="red"
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
                    id="color-blue"
                    name="color"
                    value="blue"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-red"
                    name="color"
                    value="red"
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
                    id="color-blue"
                    name="color"
                    value="blue"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-red"
                    name="color"
                    value="red"
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
                    id="color-blue"
                    name="color"
                    value="blue"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
                    id="color-green"
                    name="color"
                    value="green"
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
