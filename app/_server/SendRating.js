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

export default function SendRatings(
  id = "IexGRb4zbst6pAOMBGVG",
  teacherPhone = "98322110"
) {
  const q = query(collection(db, "schools"));
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let itemsArr = [];
    QuerySnapshot.forEach((doc) => {
      itemsArr.push({ ...doc.data(), id: doc.id });
    });
    let prevData = itemsArr.filter((doc) => doc.id === id)[0].Teachers;
    console.log(prevData);

    const TeachersData = prevData.filter(
      (teacher) => teacher.contact === teacherPhone
    );
    console.log(TeachersData);
    let currentData = TeachersData[0];
    //   let

    // let newData = { ...prevData, Teachers };
    // console.log(newData);
    // handleUpdate(id, newData);
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
