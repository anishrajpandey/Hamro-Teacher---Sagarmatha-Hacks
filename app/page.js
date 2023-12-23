import Link from "next/link";
import RegisterSchool from "./_server/RegisterSchool";
import { NavbarSimple } from "./components/Navbar";
export default async function Home() {
  let data = await RegisterSchool();
  console.log(data);
  return (
    <div>
      <NavbarSimple />
      <Link href='/login'>Login</Link>
      {}
    </div>
  );
}
