import React from 'react'

function Newsletter() {
  return (
    <div>
      <section class="bg-[#f8f4ee]">
        <div class="max-w-3xl px-6 py-16 mx-auto text-center">
            <h1 class="text-3xl font-semibold text-gray-800 ">Want to know more about our product ??</h1>
            <p class="max-w-md mx-auto mt-5 text-gray-500 ">Get updated with our offers and plans.</p>

            <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2   focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Email Address"/>
                
                <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Get Started
                </button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Newsletter
