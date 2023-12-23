"use client";
import GetSchoolData from "../_server/GetSchoolData";

const page = () => {
  return (
    <div>
      <button className="bg-red-600" onClick={GetSchoolData}>
        get school info
      </button>
    </div>
  );
};

export default page;
