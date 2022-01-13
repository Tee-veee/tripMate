import { useState, useEffect } from "react";

import mapStyles from "./mapStyles";

import GoogleMapReact from "google-map-react";
import { BiRestaurant } from "react-icons/bi";
import { MdAttractions, MdLocalHotel } from "react-icons/md";

const MAPS_API = process.env.REACT_APP_MAPS_API;

function Map({
  coords,
  setCoordBounds,
  places,
  setChildClicked,
  childClicked,
  type,
  weather,
}) {
  const [isMobile, setIsMobile] = useState("");
  const [windowWidth, setWindowWidth] = useState("");

  const getTypeIcon = (type, size, childClicked, index) => {
    switch (type) {
      case "restaurants":
        return (
          <div className="flex flex-col items-center justify-center">
            <BiRestaurant
              className={`${size === "small" ? "text-2xl" : "text-5xl"} ${
                Number(childClicked) === index
                  ? "text-blue-600 scale-150 z-10"
                  : ""
              }cursor-pointer`}
            />
            ;
          </div>
        );
      case "attractions":
        return (
          <div className="flex flex-col items-center justify-center">
            <MdAttractions
              className={`${size === "small" ? "text-2xl" : "text-5xl"} ${
                Number(childClicked) === index
                  ? "text-blue-600 scale-150 z-10"
                  : ""
              } cursor-pointer`}
            />
            ;
          </div>
        );
      case "hotels":
        return (
          <div className="flex flex-col items-center justify-center">
            <MdLocalHotel
              className={`${size === "small" ? "text-2xl" : "text-5xl"} ${
                Number(childClicked) === index
                  ? "text-blue-600 scale-150 z-10"
                  : ""
              } cursor-pointer`}
            />
            ;
          </div>
        );
      default:
        return;
    }
  };

  // SET COORD BOUNDS ON CHANGE
  const handleChange = (coords) => {
    const neLat = coords.lat + 0.03;
    const swLat = coords.lat - 0.03;
    const neLng = coords.lng + 0.05;
    const swLng = coords.lng - 0.05;
    setCoordBounds({
      ne: { lat: neLat, lng: neLng },
      sw: { lat: swLat, lng: swLng },
    });
  };

  // TRACKS WIDTH OF SCREEN
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // eslint-disable-next-line
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowWidth >= 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowWidth]);

  return (
    <>
      <div className="h-[85vh] w-full mr-12">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAPS_API, libraries: ["places"] }}
          defaultCenter={coords}
          center={coords}
          margin={[50, 50, 50, 50]}
          defaultZoom={14}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
          // HANDLES MAP CLICK
          onChildClick={(child) => {
            setChildClicked(child);
          }}
          // HANDLES MAP DRAG
          onChange={(e) => {
            handleChange(coords);
          }}
        >
          {places?.map((place, index) => {
            return (
              <div
                className="absolute z-1  -translate-x-2/4 -translate-y-2/4 cursor-pointer"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={index}
              >
                {isMobile
                  ? getTypeIcon(type, "small", childClicked, index)
                  : getTypeIcon(type, "large", childClicked, index)}
              </div>
            );
          })}
          {weather?.list?.map((data, i) => {
            return (
              <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                <img
                  src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  className="w-[60px] h-[60px]"
                  alt="Weather"
                />
              </div>
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
}

export default Map;
