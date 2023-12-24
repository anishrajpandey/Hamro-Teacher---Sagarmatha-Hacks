import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebase/firebase";
const RegisterSchool = async (Name, Email, password) => {
  const res = await addDoc(collection(db, "schools"), {
    name: "sagarmath",
    address: "School address ",
    email: Email,
    password,
    Teachers: [
      {
        name: "",
        contact: "",
        class: ["", "", ""],
        Subject: "",
        ranking: {
          subjectKnowledge: [],
          effectiveCommunication: [],
          studentFriendly: [],
          punctuality: [],
          classManagement: [],
          organizationalSkills: [],
          respectForStudents: [],
          creativity: [], //should be initiated as empty array
        },
      },
    ],
    students: [],
  });
  console.log("Added document with ID: ", res.id);
};

export default RegisterSchool;
