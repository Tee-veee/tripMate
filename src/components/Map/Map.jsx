import { useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
const MAPS_API = process.env.REACT_APP_MAPS_API;

function Map({ coords, setCoords, setCoordBounds, places, setChildClicked }) {
  const [isMobile, setIsMobile] = useState("");
  const [windowWidth, setWindowWidth] = useState("");

  const MobileMarkerComp = ({ icon }) => {
    return <div>{icon}</div>;
  };

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
    <div className="h-[85vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setCoordBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, index) => {
          return (
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              {isMobile ? (
                <MobileMarkerComp
                  icon={<FaMapMarkerAlt className="text-2xl cursor-pointer" />}
                />
              ) : (
                <MobileMarkerComp
                  icon={<FaMapMarkerAlt className="text-5xl cursor-pointer" />}
                />
              )}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
