import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
  <div className="flex items-start justify-between">
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className='font-bold text-lg'><span className='text-[#F79256]'>Hamro</span> Teacher</p>
        </div>
        <nav className="mt-6">
          <div>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 hover:text-gray-800 "
              href="/"
            >
              <span className="text-left">
                <svg
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                </svg>
              </span>
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 border-transparent text-gray-800 transition-colors duration-200 border-l-4 border-blue-500"
              href="#"
            >
              <span className="text-left">
                <svg
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
              </span>
              <span className="mx-2 text-sm font-normal">
                Dashboard
                <span className="w-4 h-2 p-1 ml-4 text-xs text-gray-400 bg-gray-200 rounded-lg">
                  0
                </span>
              </span>
            </a>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              href="#"
            >
              <span className="text-left">
                <svg width={20} height={20} viewBox="0 0 20 20"  version="1.1"  xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink"  fill="#000000">  <g id="SVGRepo_bgCarrier" strokeWidth={0} />  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />  <g id="SVGRepo_iconCarrier">    {" "}    <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc>{" "}    <defs> </defs>{" "}    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">      {" "}      <g        id="Dribbble-Light-Preview"        transform="translate(-140.000000, -2159.000000)"        fill="#000000"      >        {" "}        <g id="icons" transform="translate(56.000000, 160.000000)">          {" "}          <path            d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"            id="profile_round-[#1342]"          >            {" "}          </path>{" "}        </g>{" "}      </g>{" "}    </g>{" "}  </g></svg>
              </span>
              <span className="mx-4 text-sm font-normal">Profile</span>
            </a>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              href="#"
            >
              <span className="text-left">
              <svg height={16} width={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5023 14.3674L20.5319 9.35289C21.2563 8.63072 21.6185 8.26963 21.8092 7.81046C22 7.3513 22 6.84065 22 5.81937V5.33146C22 3.76099 22 2.97576 21.5106 2.48788C21.0213 2 20.2337 2 18.6585 2H18.1691C17.1447 2 16.6325 2 16.172 2.19019C15.7114 2.38039 15.3493 2.74147 14.6249 3.46364L9.59522 8.47817C8.74882 9.32202 8.224 9.84526 8.02078 10.3506C7.95657 10.5103 7.92446 10.6682 7.92446 10.8339C7.92446 11.5238 8.48138 12.0791 9.59522 13.1896L9.74492 13.3388L11.4985 11.5591C11.7486 11.3053 12.1571 11.3022 12.4109 11.5523C12.6647 11.8024 12.6678 12.2109 12.4177 12.4647L10.6587 14.2499L10.7766 14.3674C11.8905 15.4779 12.4474 16.0331 13.1394 16.0331C13.2924 16.0331 13.4387 16.006 13.5858 15.9518C14.1048 15.7607 14.6345 15.2325 15.5023 14.3674ZM17.8652 8.47854C17.2127 9.12904 16.1548 9.12904 15.5024 8.47854C14.8499 7.82803 14.8499 6.77335 15.5024 6.12284C16.1548 5.47233 17.2127 5.47233 17.8652 6.12284C18.5177 6.77335 18.5177 7.82803 17.8652 8.47854Z"
      fill="#1C274C"
    />{" "}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.77409 12.4814C3.07033 12.778 3.07004 13.2586 2.77343 13.5548L2.61779 13.7103C2.48483 13.8431 2.48483 14.058 2.61779 14.1908C2.75125 14.3241 2.96801 14.3241 3.10147 14.1908L4.8136 12.4807C5.1102 12.1845 5.59079 12.1848 5.88704 12.4814C6.18328 12.778 6.18298 13.2586 5.88638 13.5548L4.17426 15.2648C3.4481 15.9901 2.27116 15.9901 1.545 15.2648C0.818334 14.5391 0.818333 13.362 1.545 12.6362L1.70065 12.4807C1.99725 12.1845 2.47784 12.1848 2.77409 12.4814ZM7.29719 16.696C7.5903 16.9957 7.58495 17.4762 7.28525 17.7693L5.55508 19.4614C5.25538 19.7545 4.77481 19.7491 4.48171 19.4494C4.1886 19.1497 4.19395 18.6692 4.49365 18.3761L6.22382 16.684C6.52352 16.3909 7.00409 16.3963 7.29719 16.696ZM11.4811 18.118C11.7774 18.4146 11.7771 18.8952 11.4805 19.1915L9.76834 20.9015C9.63539 21.0343 9.63539 21.2492 9.76834 21.382C9.9018 21.5153 10.1186 21.5153 10.252 21.382L10.4077 21.2265C10.7043 20.9303 11.1849 20.9306 11.4811 21.2272C11.7774 21.5238 11.7771 22.0044 11.4805 22.3006L11.3248 22.4561C10.5987 23.1813 9.42171 23.1813 8.69556 22.4561C7.96889 21.7303 7.96889 20.5532 8.69556 19.8274L10.4077 18.1174C10.7043 17.8211 11.1849 17.8214 11.4811 18.118Z"
      fill="#1C274C"
    />{" "}
    <g opacity="0.5">
      {" "}
      <path
        d="M10.8461 5.40925L8.65837 7.59037C8.25624 7.99126 7.88737 8.35901 7.59606 8.69145C7.40899 8.90494 7.22204 9.13861 7.06368 9.39679L7.04237 9.37554C7.00191 9.3352 6.98165 9.31501 6.96133 9.29529C6.58108 8.92635 6.1338 8.63301 5.64342 8.43097C5.61722 8.42018 5.59062 8.40964 5.53743 8.38856L5.2117 8.25949C4.77043 8.08464 4.65283 7.51659 4.9886 7.18184C5.95224 6.22112 7.10923 5.06765 7.6676 4.83597C8.16004 4.63166 8.692 4.56368 9.20505 4.6395C9.67514 4.70897 10.1198 4.95043 10.8461 5.40925Z"
        fill="#1C274C"
      />{" "}
      <path
        d="M14.5816 16.8934C14.7579 17.0723 14.8749 17.1987 14.9808 17.3337C15.1204 17.5119 15.2453 17.7012 15.3542 17.8996C15.4767 18.123 15.5718 18.3616 15.7621 18.8389C15.9169 19.2274 16.4315 19.3301 16.7303 19.0322L16.8026 18.9601C17.7662 17.9993 18.9232 16.8458 19.1556 16.2891C19.3605 15.7982 19.4287 15.2678 19.3526 14.7563C19.283 14.2877 19.0408 13.8444 18.5807 13.1205L16.3857 15.3089C15.9745 15.7189 15.5974 16.0949 15.2564 16.3894C15.052 16.5659 14.8284 16.7423 14.5816 16.8934Z"
        fill="#1C274C"
      />{" "}
    </g>{" "}
    <g opacity="0.5">
      {" "}
      <path
        d="M7.68621 14.5633C7.98263 14.2669 7.98263 13.7863 7.68621 13.4899C7.38979 13.1935 6.90919 13.1935 6.61277 13.4899L4.47036 15.6323C4.17394 15.9287 4.17394 16.4093 4.47036 16.7057C4.76679 17.0021 5.24738 17.0021 5.5438 16.7057L7.68621 14.5633Z"
        fill="#1C274C"
      />{" "}
      <path
        d="M10.4954 17.369C10.7918 17.0726 10.7918 16.592 10.4954 16.2956C10.1989 15.9992 9.71835 15.9992 9.42193 16.2956L7.29417 18.4233C6.99774 18.7198 6.99774 19.2003 7.29417 19.4968C7.59059 19.7932 8.07118 19.7932 8.36761 19.4968L10.4954 17.369Z"
        fill="#1C274C"
      />{" "}
    </g>{" "}
  </g>
</svg>

               
              </span>
              <span className="mx-4 text-sm font-normal">Log Out</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div className="flex flex-col w-full md:space-y-4">
      <header className="z-40 flex items-center justify-between w-full h-16">
        <div className="block ml-6 lg:hidden">
          <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
            <svg
              width={20}
              height={20}
              className="text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
        <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
          <div className="relative flex items-center justify-end w-full p-1 space-x-4">
            <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md">
              <svg
                width={20}
                height={20}
                className="text-gray-400"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
              </svg>
            </button>
            <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
            <a href="#" className="relative block">
            </a>
            <button className="flex items-center text-gray-500 dark:text-white text-md">
              Charlie R
              <svg
                width={20}
                height={20}
                className="ml-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Good afternoom, Charlie
        </h1>
        <h2 className="text-gray-400 text-md">
          Heres whats happening with your acedamic progress today.
        </h2>
        <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
          <div className="w-full md:w-6/12">
            <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
              <a href="#" className="block w-full h-full">
                <div className="flex items-center justify-between px-4 py-6 space-x-4">
                  <div className="flex items-center">
                    <span className="relative p-4 bg-yellow-100 rounded-full">
                    <svg
                        width={10}
                        height={10}
                        fill="#000000"
                        viewBox="0 0 24 24"
                        id="up-trend"
                        data-name="Flat Line"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon flat-line"
                        >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <polyline
                            id="primary"
                            points="21 6 14 13 11 10 3 18"
                            style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2
                            }}
                            />
                            <polyline
                            id="primary-2"
                            data-name="primary"
                            points="21 10 21 6 17 6"
                            style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2
                            }}
                            />
                        </g>
                        </svg>

                    </span>
                    <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                      Level 2 Teacher
                    </p>
                  </div>
                  <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                    20
                    <span className="text-xs text-gray-400">1</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-100">
                  <div className="w-2/5 h-full text-xs text-center text-white bg-green-400"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 md:w-1/2">
            <div className="w-1/2">
              <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-2xl font-bold text-black dark:text-white">
                  67
                </p>
                <p className="text-sm text-gray-400">Active Score</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-2xl font-bold text-black dark:text-white">
                  230
                </p>
                <p className="text-sm text-gray-400">Forms Analysized</p>
                <span className="absolute p-2 bg-purple-500 rounded-full top-2 right-4">
                <svg
                    height={20}
                    width={20}
                    viewBox="0 0 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                    >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>analyze</title>{" "}
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        {" "}
                        <g id="add" fill="#000000" transform="translate(42.666667, 64.000000)">
                            {" "}
                            <path
                            d="M266.666667,128 C331.468077,128 384,180.531923 384,245.333333 C384,270.026519 376.372036,292.938098 363.343919,311.840261 L423.228475,371.725253 L393.058586,401.895142 L333.173594,342.010585 C314.271431,355.038703 291.359852,362.666667 266.666667,362.666667 C201.865256,362.666667 149.333333,310.134744 149.333333,245.333333 C149.333333,180.531923 201.865256,128 266.666667,128 Z M266.666667,170.666667 C225.429405,170.666667 192,204.096072 192,245.333333 C192,286.570595 225.429405,320 266.666667,320 C307.903928,320 341.333333,286.570595 341.333333,245.333333 C341.333333,204.096072 307.903928,170.666667 266.666667,170.666667 Z M128.404239,234.665576 C128.136379,238.186376 128,241.743928 128,245.333333 C128,256.34762 129.284152,267.061976 131.710904,277.334851 L7.10542736e-15,277.333333 L7.10542736e-15,234.666667 L128.404239,234.665576 Z M85.3333333,1.42108547e-14 L85.3333333,213.333333 L21.3333333,213.333333 L21.3333333,1.42108547e-14 L85.3333333,1.42108547e-14 Z M170.666667,85.3333333 L170.663947,145.273483 C151.733734,163.440814 137.948238,186.928074 131.710904,213.331815 L106.666667,213.333333 L106.666667,85.3333333 L170.666667,85.3333333 Z M256,42.6666667 L255.999596,107.070854 C232.554315,108.854436 210.738728,116.46829 191.999452,128.465799 L192,42.6666667 L256,42.6666667 Z M341.333333,64 L341.333983,128.465865 C322.594868,116.468435 300.779487,108.854588 277.334424,107.070906 L277.333333,64 L341.333333,64 Z"
                            id="Combined-Shape"
                            >
                            {" "}
                            </path>{" "}
                        </g>{" "}
                        </g>{" "}
                    </g>
                    </svg>

                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-gray-400 border border-gray-300 rounded-r-full rounded-tl-sm rounded-bl-full text-md">
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="mr-2 text-gray-400"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
            </svg>
            Last month
            <svg
              width={20}
              height={20}
              className="ml-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
          <span className="text-sm text-gray-400">
            Compared to oct 1- otc 30, 2020
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Teacher Name
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-5xl font-bold text-black dark:text-white">
                  Rank: 1
                </p>
                <span className="flex items-center text-xl font-bold text-green-500">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  22%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                  <p>Subject Knowledge</p>
                  <div className="flex items-end text-xs">
                    34
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      22%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Effective Communication</p>
                  <div className="flex items-end text-xs">
                    13
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>Creative</p>
                  <div className="flex items-end text-xs">
                    45
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      41%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Teacher 2
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-5xl font-bold text-black dark:text-white">
                  Rank: 2
                </p>
                <span className="flex items-center text-xl font-bold text-green-500">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  12%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Subject Knowledge</p>
                  <div className="flex items-end text-xs">
                    Rank: 3
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      20%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Effective Communication</p>
                  <div className="flex items-end text-xs">
                    10
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      2%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>Creativity</p>
                  <div className="flex items-end text-xs">
                    434
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Teacher 3
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-5xl font-bold text-black dark:text-white">
                  Rank: 3
                </p>
                <span className="flex items-center text-xl font-bold text-red-500">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3 transform rotate-180"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  2%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Subject Knowledge</p>
                  <div className="flex items-end text-xs">
                    34
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      22%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Effective Communication</p>
                  <div className="flex items-end text-xs">
                    13
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>Creativity</p>
                  <div className="flex items-end text-xs">
                    45
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      41%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Teacher 4
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-5xl font-bold text-black dark:text-white">
                  Rank: 4
                </p>
                <span className="flex items-center text-xl font-bold text-red-500">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3 transform rotate-180"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  14%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Subject Knowledge</p>
                  <div className="flex items-end text-xs">
                    43
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Effective Communication</p>
                  <div className="flex items-end text-xs">
                    133
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      19%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>Creativity</p>
                  <div className="flex items-end text-xs">
                    23
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Teacher 5
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-5xl font-bold text-black dark:text-white">
                  Rank: 5
                </p>
                <span className="flex items-center text-xl font-bold text-green-500">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  34%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Subject Knowledge</p>
                  <div className="flex items-end text-xs">
                    345
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      12%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Effective Communication</p>
                  <div className="flex items-end text-xs">
                    139
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      10%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>Creative</p>
                  <div className="flex items-end text-xs">
                    421
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Teacher 6
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-5xl font-bold text-black dark:text-white">
                  Rank: 6
                </p>
                <span className="flex items-center text-xl font-bold text-green-500">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  34%
                </span>
              </div>
              <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Subject Knowledge</p>
                  <div className="flex items-end text-xs">
                    123
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-red-500 transform rotate-180"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      22%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Effective Communication</p>
                  <div className="flex items-end text-xs">
                    134
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      9%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>Creative</p>
                  <div className="flex items-end text-xs">
                    23
                    <span className="flex items-center">
                      <svg
                        width={20}
                        fill="currentColor"
                        height={20}
                        className="h-3 text-green-500"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                      </svg>
                      41%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default page
