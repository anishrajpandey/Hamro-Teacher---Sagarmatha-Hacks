import Link from "next/link";
import RegisterSchool from "./_server/RegisterSchool";
import { NavbarSimple } from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
export default async function App() {
  // console.log(data);
  return (
    <div>
      <NavbarSimple />
      <Home/>
      <Features/>
    </div>
  );
}
