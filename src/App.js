// REACT LIB
import { useState, useEffect } from "react";

// REQUEST
import { getPlacesData } from "./axios/axios";

// COMP
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [coordBounds, setCoordBounds] = useState({
    sw: { lat: 0, lng: 0 },
    ne: { lat: 0, lng: 0 },
  });

  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(coordBounds.sw, coordBounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coords, coordBounds]);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[95vh] w-full">
        <div className="flex w-3/12">
          <List places={places} childClicked={childClicked} />
        </div>
        <div className="flex w-9/12 items-center justify-center">
          <Map
            setCoords={setCoords}
            setCoordBounds={setCoordBounds}
            coords={coords}
            places={places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
