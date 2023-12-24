import React from 'react'

function Questions() {
  return (
    <div>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
    <h2 className="text-2xl font-medium mb-4"> Teachers Name Survey</h2>
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Subject Knowledge</label>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                    <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" className="mr-2"/>Bad
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" className="mr-2"/>Neutral
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" className="mr-2"/>Great
                    </label>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Organizational Skills</label>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                    <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" className="mr-2"/>Bad
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" className="mr-2"/>Neutral
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" className="mr-2"/>Great
                    </label>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Effective Communication</label>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                    <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" className="mr-2"/>Bad
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" className="mr-2"/>Neutral
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" className="mr-2"/>Great
                    </label>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Creativity</label>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                    <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" className="mr-2"/>Bad
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" className="mr-2"/>Neutral
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" className="mr-2"/>Great
                    </label>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Student Friendly</label>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                    <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" className="mr-2"/>Bad
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" className="mr-2"/>Neutral
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" className="mr-2"/>Great
                    </label>
                </div>
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Classroom</label>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                    <label htmlFor="color-red" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-red" name="color" value="red" className="mr-2"/>Bad
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-blue" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-blue" name="color" value="blue" className="mr-2"/>Neutral
                    </label>
                </div>
                <div className="px-2 w-1/3">
                    <label htmlFor="color-green" className="block text-gray-700 font-medium mb-2">
                        <input type="radio" id="color-green" name="color" value="green" className="mr-2"/>Great
                    </label>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" name="message"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
        </div>
        <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </div>

    </form>
</div>
    </div>
  )
}

export default Questions
