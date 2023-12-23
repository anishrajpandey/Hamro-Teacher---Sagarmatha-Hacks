import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebase/firebase";
const RegisterSchool = async () => {
  await addDoc(collection(db, "schools"), {
    name: "ansih",
    email: "this is m skjdf ",
  });
};

export default RegisterSchool;
