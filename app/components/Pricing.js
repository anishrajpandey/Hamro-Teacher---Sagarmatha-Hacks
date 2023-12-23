import React from 'react'

function Pricing() {
  return (
    <div>
      <section id="pricing">
        <div class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-8 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Pricing Plan</h1>
            
                <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    We offer various plans that fits you budget and needs.
                </p>
                
                <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Govermental Institutes</p>

                        <h2 class="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                            NRS 1999
                        </h2>

                        <p class="font-medium text-gray-500 dark:text-gray-300">Monthly</p>

                        <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            NRS 4999
                        </button>
                    </div>

                        <div class="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
                        <p class="font-medium text-gray-200 uppercase">Popular</p>

                        <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
                            NRS 4999
                        </h2>

                        <p class="font-medium text-gray-200">Per Year</p>

                        <button class="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                            Start Now
                        </button>
                    </div>

                        <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Pro</p>

                        <h2 class="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                            NRS 15000
                        </h2>

                        <p class="font-medium text-gray-500 dark:text-gray-300">Life time</p>

                        <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Start Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Pricing
