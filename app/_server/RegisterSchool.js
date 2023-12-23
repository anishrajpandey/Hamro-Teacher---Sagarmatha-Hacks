import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import db from "./../../firebase/firebase";
const RegisterSchool = async () => {
  await setDoc(doc(db, "hamro-teacher", "schools"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
};

export default RegisterSchool;
