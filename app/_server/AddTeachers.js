import { db } from "@/firebase/firebase";
import {
  collection,
  getDoc,
  query,
  QuerySnapshot,
  onSnapshot,
} from "firebase/firestore";

export default function AddTeachers(id = "DsNiMtIgQatYLajZV6Ct") {
  {
    const q = query(collection(db, "schools"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemsArr = [];
      QuerySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      console.log(itemsArr.filter((doc) => doc.id === id));
    });
  }
}
