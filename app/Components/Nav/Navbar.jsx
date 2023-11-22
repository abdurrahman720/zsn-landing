import { FaBars, FaPlus } from "react-icons/fa";
import { Redressed } from "next/font/google";
import Link from "next/link";
import UserMenu from "./UserMenu";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
      <div className="sticky top-0 w-full z-30 bg-transparent ">
           <div className="flex justify-between items-center ">
      <div className=" flex gap-10 items-center">
        <FaBars className="text-white" size={24} />
        <Link href="/" className={`${redressed.className} text-white`}>
          ZSN Technologies
        </Link>
      </div>
      <div className="  flex gap-10 items-center ">
        <Link href="#">
          <div className="border border-slate-500 p-1 rounded-md flex justify-center items-center gap-2 w-[150px]  shadow-md transition hover:scale-105 cursor-pointer">
            <FaPlus className="text-white" size={24}/>
            <span className="text-sm text-white">Sell your items</span>
          </div>
              </Link>
              <div>
                <UserMenu/>
              </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
