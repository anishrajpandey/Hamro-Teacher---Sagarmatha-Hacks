"use client";
import AddStudents from "../_server/AddStudents";
import AddTeachers from "../_server/AddTeachers";
import GetAllSchoolsData from "../_server/GetAllSchoolData";
import GetOneSchoolByID from "../_server/GetOneSchooolByID";
import GetTeachers from "../_server/GetTeachers";
import RegisterSchool from "../_server/RegisterSchool";
import SendRatings from "../_server/SendRating";
import SendRatingForm from "../_server/SendRatingForm";

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
      <button className="bg-gray-600" onClick={() => RegisterSchool()}>
        RegisterSchool
      </button>
      <button className="bg-gray-600" onClick={GetAllSchoolsData}>
        GetAllSchoolsData
      </button>
      <button className="bg-gray-600" onClick={() => AddTeachers()}>
        AddTeachers
      </button>
      <button className="bg-gray-600" onClick={() => AddStudents()}>
        AddStudents
      </button>
      <button className="bg-gray-600" onClick={() => GetTeachers()}>
        GetTeachers
      </button>
      <button className="bg-gray-600" onClick={() => SendRatings()}>
        SendRatings
      </button>
      <button className="bg-gray-600" onClick={() => SendRatingForm()}>
        SendRatingForm
      </button>
    </div>
  );
};

export default page;
