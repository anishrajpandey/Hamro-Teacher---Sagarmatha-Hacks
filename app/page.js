import Link from "next/link";

export default function Home() {
  return (
    <div>
      hamro teacher
      <Link href={"/register"}>Register Page</Link>
    </div>
  );
}
