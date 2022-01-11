// REACT LIBRARY
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

function List({ places, childClicked }) {
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
    console.log(elRefs);
  }, [places]);

  return (
    // HEADER OF LIST -- CONTROLS FILTERS
    <div className="pl-12 pr-4 py-8 max-h-full bg">
      <h1 className="text-3xl mb-2">
        Hotels, Restaurants and Attractions for you!
      </h1>
      <label htmlFor="Type" className="text-sm text-gray-400">
        Type
      </label>
      <div className="flex mt-2 mb-8">
        {/* FILTER - 1 */}
        <form className="mr-8">
          <select
            name="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="text-md outline-none bg-transparent border-b-2 border-black"
          >
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </form>
        {/* FILTER - 2 */}
        <form>
          <select
            name="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="text-md outline-none bg-transparent border-b-2 border-black"
          >
            <option value={0}>All</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Star</option>
            <option value={3}>3 Star</option>
            <option value={4}>4 Star</option>
            <option value={5}>5 Star</option>
          </select>
        </form>
      </div>

      {/* CONTAINS CARD WITH LOCATION DETAILS */}
      <div className="grid grid-cols-1 grid-rows-auto h-full overflow-y-scroll h-[73vh] p-2 ">
        {places?.map((place, i) => (
          <div ref={elRefs[i]} key={i}>
            <PlaceDetails
              refProp={elRefs[i]}
              place={place}
              selected={Number(childClicked) === i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
