import { db } from "@/firebase/firebase";
import {
  collection,
  getDoc,
  query,
  QuerySnapshot,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function AddTeachers(
  id = "DsNiMtIgQatYLajZV6Ct",
  Teachers = [
    {
      name: "Teachers name",
      class: ["10", "11", "3t"],
      email: "email@gmail.np",
      password: "thissykdjsf",
    },
    {
      name: "Teachers name",
      class: ["10", "11", "3t"],
      email: "email@gmail.np",
      password: "thissykdjsf",
    },
    {
      name: "Teachers name",
      class: ["10", "11", "3t"],
      email: "email@gmail.np",
      password: "thissykdjsf",
    },
    {
      name: "Teachers name",
      class: ["10", "11", "3t"],
      email: "email@gmail.np",
      password: "thissykdjsf",
    },
  ]
) {
  const q = query(collection(db, "schools"));
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let itemsArr = [];
    QuerySnapshot.forEach((doc) => {
      itemsArr.push({ ...doc.data(), id: doc.id });
    });
    let prevData = itemsArr.filter((doc) => doc.id === id)[0];
    let newData = { ...prevData, Teachers };
    console.log(newData);
    handleUpdate(id, newData);
  });
}

const handleUpdate = async (id, newData) => {
  const docRef = doc(db, "schools", id);
  console.log("herrlkwj");
  try {
    await updateDoc(docRef, newData);
    console.log("Document updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
