import { TbWorld } from "react-icons/tb";

import { FaUserCircle } from "react-icons/fa";
const UserMenu = () => {
    return ( 
        <div className="border border-slate-500 p-1 rounded-md flex justify-center items-center gap-2  shadow-md transition hover:scale-105 cursor-pointer">
        <TbWorld className="text-white" size={24} />
        <FaUserCircle  className="text-white" size={24}/>
      </div>
     );
}
 
export default UserMenu;