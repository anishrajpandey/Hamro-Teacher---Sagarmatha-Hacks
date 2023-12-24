import { db } from "@/firebase/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const Auth = async (email, password) => {
  const q = query(
    collection(db, "schools"),
    where("email", "==", email) && ("password", "==", password)
  );

  try {
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export default Auth;
