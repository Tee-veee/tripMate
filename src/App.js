// REACT LIB
import { useState, useEffect } from "react";

// AXIOS REQUESTS
import { getPlacesData } from "./axios/axios";
import { getWeatherData } from "./axios/axios";

// COMPONENTS
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

function App() {
  // LOCATION STATE VARIABLES
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [weather, setWeather] = useState([]);
  const [coords, setCoords] = useState({});
  const [coordBounds, setCoordBounds] = useState({
    sw: { lat: 0, lng: 0 },
    ne: { lat: 0, lng: 0 },
  });

  // CONTROL STATE VARIABLES
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);

  // SET MAP TO NEW YORK ON LOAD
  // WORKING
  useEffect(() => {
    setCoords({ lat: 40.7127753, lng: -74.0059728 });
  }, []);

  // FILTERS PLACES BASED ON RATING
  useEffect(() => {
    const filteredPlaces = places.filter(
      (place) => Number(place.rating) >= rating
    );
    setFilteredPlaces(filteredPlaces);
    // eslint-disable-next-line
  }, [rating]);

  useEffect(() => {
    // SHOULD FETCH STOPS THIS BEING CALLED EVERYTIME THE MAP IS DRAGGED
    if (shouldFetch) {
      setIsLoading(true);
      // FETCH AXIOS -- CONTROL STATE
      getPlacesData(type, coordBounds.sw, coordBounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.ranking));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [coordBounds]);

  // EVERY TIME TYPE OF LOCATION i.e 'restaurant' => 'hotel' GET NEW PLACES DATA
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, coordBounds.sw, coordBounds.ne).then((data) => {
      setPlaces(data?.filter((place) => place.name && place.ranking));
      setFilteredPlaces([]);
      setRating("");
      setIsLoading(false);
    });
    // eslint-disable-next-line
  }, [type]);

  // GETS WEATHER DATA WHEN COORDINATES CHANGE
  useEffect(() => {
    getWeatherData(coords.lat, coords.lng)
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, [coords]);

  return (
    <div className="h-screen">
      <Header setCoords={setCoords} setShouldFetch={setShouldFetch} />
      <div className="flex h-[95vh] w-full">
        <div className="flex w-3/12">
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div className="flex w-9/12 items-center justify-center">
          <Map
            setCoords={setCoords}
            setCoordBounds={setCoordBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            childClicked={childClicked}
            type={type}
            weather={weather}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
