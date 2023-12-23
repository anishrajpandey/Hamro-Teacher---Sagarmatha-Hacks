import { db } from "@/firebase/firebase";
import {
  collection,
  getDoc,
  query,
  QuerySnapshot,
  onSnapshot,
} from "firebase/firestore";
export default function GetTeachers(
  schoolName = "School name",
  studentID = "2S33",
  id = "8nM09ccpWiygnWA0TWE6"
) {
  let verifiedClass = null;
  let isAuthenticStudent = false;

  //id=school docs id
  const q = query(collection(db, "schools"));
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let itemsArr = [];
    QuerySnapshot.forEach((doc) => {
      itemsArr.push({ ...doc.data(), id: doc.id });
    });
    let schoolData = itemsArr.filter((doc) => doc.id === id)[0];
    console.log(schoolData);
    // let isRightSchool =
    //   schoolName.toLowerCase() == schoolData.name.toLowerCase();
    let studentsArray = schoolData.students;
    let elligibleIDs = [];
    console.log(studentsArray);
    studentsArray.forEach(({ stdID }) => {
      elligibleIDs.push(stdID);
    });
    elligibleIDs.forEach((id) => {
      if (id === studentID) {
        isAuthenticStudent = true;
        studentsArray.forEach((student) => {
          if (student.stdID === id) {
            verifiedClass = student.class;
          }
        });
      }
    });
    console.log(isAuthenticStudent, verifiedClass);
    let favourableTeachers = [];
    //after checking if the student is elligible
    if (isAuthenticStudent) {
      const Teachers = itemsArr.filter((doc) => doc.id === id)[0]?.Teachers;
      Teachers.forEach((teacher) => {
        // teacher.class.forEach(class)
        if (teacher.class.includes(verifiedClass)) {
          favourableTeachers.push(teacher);
        }
      });
    }
    //   const students
    console.log(favourableTeachers);
    return favourableTeachers;
    // console.log(Teachers.);
  });
}
