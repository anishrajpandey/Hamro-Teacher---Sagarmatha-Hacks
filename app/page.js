import Link from "next/link";

import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import OurTeam from "./components/OurTeam";

export default async function App() {
  // console.log(data);
  return (
    <div>

      <Home/>
      <Features/>
      {/* <Pricing/> */}
      <OurTeam/>


    </div>
  );
}
