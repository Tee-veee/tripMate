import { Autocomplete } from "@react-google-maps/api";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="flex px-4 md:px-12 items-center justify-between w-full bg-green-400 h-[5vh] shadow-lg">
      <div className="text-2xl">tripMate</div>
      <div className="flex items-center justify-center">
        <h1 className="text-xl mr-4">Explore new places</h1>
        {/* <Autocomplete> */}
        <div>
          <div className="relative">
            <input
              type="text"
              name="search"
              id="search"
              className="text-lg pl-8 outline-none bg-green-300 rounded-lg"
              placeholder="Search "
            />
            <FaSearch className="absolute top-1 left-1 text-xl" />
          </div>
        </div>
        {/* </Autocomplete> */}
      </div>
    </div>
  );
}

export default Header;
