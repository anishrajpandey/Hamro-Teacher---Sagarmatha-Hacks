import { db } from "@/firebase/firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
// import { setDoc } from "firebase/firestore";

export default function SendRatings(
  id = "ZS64EDWTqE5zhhoVrEA6",
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
  let newUpdatedData;
  const q = query(collection(db, "schools"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   querySnapshot.docChanges().forEach((change) => {
  //     if (change.type === "modified") {
  //       // Your update logic here
  //        itemsArr.push({ ...doc.data(), id: doc.id });
  //       const id = change.doc.id;
  //       const newData = /* your logic to update data */;
  //       handleUpdate(id, newData);
  //     }
  //   });
  // });
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let itemsArr = [];
    QuerySnapshot.forEach((doc) => {
      itemsArr.push({ ...doc.data(), id: doc.id });
    });
    let originalData = itemsArr.filter((doc) => doc.id === id)[0];
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
    console.log(TeachersData);
    let currentData = TeachersData[0] || TeachersData;
    if (currentData.ranking) {
      currentData.ranking.subjectKnowledge.push(ranking.subjectKnowledge);
      currentData.ranking.effectiveCommunication.push(
        ranking.effectiveCommunication
      );
      currentData.ranking.studentFriendly.push(ranking.studentFriendly);
      currentData.ranking.punctuality.push(ranking.punctuality);
      currentData.ranking.organizationalSkills.push(
        ranking.organizationalSkills
      );
      //todo add more characteristics if possible
      currentData.ranking.creativity.push(ranking.creativity);
    } else {
      currentData = { ...currentData, ranking };
    }
    // console.log(currentData);
    // console.log(originalData[0]);
    // console.log(originalData);
    newUpdatedData = { ...originalData, Teachers: currentData };
    console.log(newUpdatedData);
    // const docRef = doc(db, "schools", id);
    // updateDoc(docRef, newUpdatedData);

    // console.log("Document updated!");

    // let newData = { ...currentData, ...ranking };
    // console.log(newData);

    //   let

    // let newData = { ...prevData, Teachers };
    // console.log(newData);
  });
  handleUpdate(id, newUpdatedData);
  const ref = doc(db, "schools", id);
  setDoc(ref, newUpdatedData, { merge: true })
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
}

const handleUpdate = async (id, newData) => {
  const docRef = doc(db, "schools", id);
  try {
    await updateDoc(docRef, newData);
    console.log("Document updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
