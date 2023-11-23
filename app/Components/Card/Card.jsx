import { FaCalendar } from "react-icons/fa";
import SearchBar from "../Search/SearchBar";

const Card = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="backdrop-blur-xl bg-white w-[400px] max-h-fit shadow-2xl px-12  py-4 rounded-md">
        <div className="flex flex-col text-start">

            <h2 className="text-slate-700 text-xl font-bold mt-5">
              Products at your edge!
            </h2>
            <span className="text-slate-700  text-sm">
              from anywhere,any time...
            </span>
          
          <div className="flex flex-col items-center pt-2">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
