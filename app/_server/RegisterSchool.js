import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebase/firebase";
const RegisterSchool = async () => {
  const res = await addDoc(collection(db, "schools"), {
    name: "School name",
    address: "School address ",
    email: "dfsdf@gmail.com",
    phone: "difjdfdsf",
    teachers: [
      {
        name: "Teacher's name",
        contact: "98322118",
        class: ["1A", "6B", "10C"],
        Subject: "science",
        ranking: {
          quality1: 2,
          quality2: 2,
          quality2: 2,
          quality2: 2,
          quality2: 2,
        },
      },
    ],
    students: [
      {
        Name: "student1",
        class: "10c",
      },
    ],
  });
  console.log("Added document with ID: ", res.id);
};

export default RegisterSchool;
