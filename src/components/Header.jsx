import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
function Header({ setCoords, setShouldFetch }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
    setShouldFetch(true);
    setTimeout(() => {
      setShouldFetch(false);
    }, 3000);
  };

  return (
    <div className="flex px-4 md:px-12 items-center justify-between w-full bg-blue-400 h-[5vh] shadow-lg">
      <div className="text-2xl">tripMate</div>
      <div className="flex items-center justify-center">
        <h1 className="text-xl mr-4">Explore new places</h1>
        {/* GOOGLE API AUTOCOMPLETE */}
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div>
            <div className="relative">
              <input
                type="text"
                name="search"
                id="search"
                className="text-lg pl-8 outline-none bg-blue-200 rounded-lg"
                placeholder="Search "
              />
              <FaSearch className="absolute top-1 left-1 text-xl" />
            </div>
          </div>
        </Autocomplete>
      </div>
    </div>
  );
}

export default Header;
