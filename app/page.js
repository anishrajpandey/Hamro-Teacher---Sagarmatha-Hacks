import Link from "next/link";
import { NavbarSimple } from "./components/Navbar";
export default function Home() {
  return (
    <div>
      <NavbarSimple />
      <Link href='/login'>Login</Link>
    </div>
  );
}
