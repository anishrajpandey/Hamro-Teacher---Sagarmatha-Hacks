import Link from "next/link";
import RegisterSchool from "./_server/RegisterSchool";

export default async function Home() {
  let data = await RegisterSchool();
  console.log(data);
  return (
    <div>
      hamro teacher
      <Link href={"/register"}>Register Page</Link>
      {}
    </div>
  );
}
