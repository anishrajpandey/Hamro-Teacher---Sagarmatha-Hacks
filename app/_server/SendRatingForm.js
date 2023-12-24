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

export default function SendRatingForm(
  id = "4gLZhkRAbm06Oazik8ef",
  teacherPhone = "123",
  ranking = {
    subjectKnowledge: 5,
    effectiveCommunication: 3,
    studentFriendly: 5,
    punctuality: 1,
    classManagement: 9,
    organizationalSkills: 3,
    respectForStudents: 5,
    creativity: 4,
  }
) {
  const q = query(collection(db, "schools"));
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let itemsArr = [];
    QuerySnapshot.forEach((doc) => {
      itemsArr.push({ ...doc.data(), id: doc.id });
    });
    let prevData = itemsArr.filter((doc) => doc.id === id)[0].Teachers;
    console.log(prevData);

    let TeachersData;
    if (prevData[0]) {
      TeachersData = prevData.filter(
        (teacher) => teacher.contact === teacherPhone
      );
    } else {
      TeachersData = prevData;
    }

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
