/*global google*/
import { useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Marker } from "@react-google-maps/api";
const MAPS_API = process.env.REACT_APP_MAPS_API;

function Map({ coords, setCoords, setCoordBounds, places, setChildClicked }) {
  const [isMobile, setIsMobile] = useState("");
  const [windowWidth, setWindowWidth] = useState("");
  console.log(MAPS_API);
  const MobileMarkerComp = ({ icon }) => {
    return <div className="">{icon}</div>;
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowWidth >= 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowWidth]);

  return (
    <div className="px-12 py-8">
      {/* NOTES -- MAP COMPONENT*/}
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        yesIWantToUseGoogleMapApiInternals
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
