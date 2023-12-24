import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebase/firebase";
const RegisterSchool = async () => {
  const res = await addDoc(collection(db, "schools"), {
    name: "sagarmath",
    address: "School address ",
    email: "dfsdf@gmail.com",
    phone: "difjdfdsf",
    Teachers: [
      {
        name: "Teacher's nasdfsdkfd d jdassd,k fdas,ds me",
        contact: "888",
        class: ["1A", "6B", "8233c"],
        Subject: "science",
        ranking: {
          subjectKnowledge: [9],
          effectiveCommunication: [9],
          studentFriendly: [8],
          punctuality: [7],
          classManagement: [9],
          organizationalSkills: [8],
          respectForStudents: [9],
          creativity: [9], //should be initiated as empty array
        },
      },
    ],
    students: [
      {
        Name: "student1",
        class: "8c",
        stdID: "2S33",
      },
      {
        Name: "student1",
        class: "10qqqc",
        stdID: "1",
      },
      {
        Name: "student1",
        class: "10cqqqqqq",
        stdID: "111",
      },
    ],
  });
  console.log("Added document with ID: ", res.id);
};

export default RegisterSchool;
