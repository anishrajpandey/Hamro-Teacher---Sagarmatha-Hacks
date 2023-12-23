"use client";
import GetAllSchoolsData from "../_server/GetAllSchoolData";
import GetOneSchoolByID from "../_server/GetOneSchooolByID";
import RegisterSchool from "../_server/RegisterSchool";

const page = () => {
  return (
    <div>
      <button
        className="bg-gray-600"
        onClick={() => {
          GetOneSchoolByID("afjVTFH88rKVNMJB2zRM");
        }}
      >
        GetOneSchoolByID
      </button>
      <button className="bg-gray-600" onClick={RegisterSchool}>
        RegisterSchool
      </button>
      <button className="bg-gray-600" onClick={GetAllSchoolsData}>
        GetAllSchoolsData
      </button>
    </div>
  );
};

export default page;
