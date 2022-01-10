import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MAPS_API = process.env.REACT_APP_MAPS_API;

function Map() {
  const coords = { lat: 0, lng: 0 };

  return (
    <div className="px-12 py-8">
      {/* NOTES -- MAP COMPONENT*/}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
