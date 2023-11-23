import {  FaFilter, FaSearch } from "react-icons/fa";
import './Searchbar.css'
const SearchBar = () => {
  return (
    <div className="bg-transparent">
       <div className="relative  flex items-center  text-slate-700  mb-4">
            <FaFilter className="w-5 h-5 ml-3 pointer-events-none absolute" />
            <input
        
              type="text"
              className=" pl-12 border-none  ring-1 ring-slate-300 rounded p-3 w-[310px] 2xl:w-[350px] placeholder-slate-700 placeholder:text-sm text-slate-700 blurEffect "
              placeholder="Find your products..."
        />
           <FaSearch className="w-5 h-5 right-2  absolute"/>
          </div>
    </div>
  );
};

export default SearchBar;
