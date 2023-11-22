import { FaCopy, FaSearch } from "react-icons/fa";
import './Searchbar.css'
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center h-screen blurryBackground">
       <div className="relative flex items-center  text-slate-300  mb-4">
            <FaCopy className="w-5 h-5 ml-3 pointer-events-none absolute" />
            <input
        
              type="text"
              className="bg-transparent  pl-12 border-none  ring-1 ring-slate-300 rounded p-3 w-[310px] 2xl:w-[350px] placeholder-slate-300 placeholder:text-sm text-slate-300 blurEffect "
              placeholder="Search here..."
        />
           <FaSearch className="w-5 h-5 right-2  absolute" />
          </div>
    </div>
  );
};

export default SearchBar;
