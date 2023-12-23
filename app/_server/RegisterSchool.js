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
      {
        name: "Teacher's nasdfsdkfd d jdassd,k fdas,ds me",
        contact: "98322118",
        class: ["1A", "6B", "8c"],
        Subject: "science",
        ranking: {
          quality1: 2,
          quality2: 2,
          quality2: 2,
          quality2: 2,
          quality2: 2,
        },
      },
      {
        name: "Teacher's name",
        contact: "98322110",
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
      {
        name: "Teacher's name",
        contact: "98322118",
        class: ["1A", "6B", "10C"],
        Subject: "science",
        ranking: {
          quality1: 2,
          quality2: 2,
          quality3: 2,
          quality2: 2,
          quality2: 2,
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
