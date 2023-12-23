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

export default function AddStudents(
  id = "DsNiMtIgQatYLajZV6Ct",
  Students = [
    {
      name: "Teachers name",
      class: "10",
      stdID: "565",
      schoolID: "DsNiMtIgQatYLajZV6Ct",
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
    let newData = { ...prevData, Students };
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
