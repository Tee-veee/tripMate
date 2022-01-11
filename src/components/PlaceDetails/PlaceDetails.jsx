import { FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";

function PlaceDetails({ place, selected, refProp }) {
  if (selected) {
    refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }

  return (
    <div className="w-full h-fit p-2 bg-green-200 mb-4 shadow-lg">
      <img
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        alt="Restaurant Banner"
        className="object-cover w-full"
      />
      <div className="flex flex-col p-2">
        <h1 className=" text-2xl mb-2">{place.name}</h1>
        <div className="flex items-center justify-between">
          <h1 className=" text-lg">Stars</h1>
          <div className="flex">
            <h1 className="text-sm mr-2" value={Number(place.rating)}>
              {place.rating}
            </h1>
            <FaStar className="text-xl" fill="gold" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h1 className=" text-lg">Price</h1>
          <h1 className="text-sm">{place.price_level}</h1>
        </div>
        <div className="flex items-center justify-between mb-2">
          <h1 className=" text-lg">Ranking</h1>
          <h1 className=" text-sm">{place.ranking}</h1>
        </div>
        {place?.cuisine?.map(({ name }, i) => {
          return (
            <div
              className="bg-gray-300 text-black w-fit p-1 rounded-lg text-sm mb-2 shadow-xl"
              key={i}
            >
              {name}
            </div>
          );
        })}
        {place?.address && (
          <div className="flex items-center justify-between mb-2">
            <FaMapMarkerAlt className="text-xl" />
            <h1 className=" text-sm">{place.address}</h1>
          </div>
        )}
        {place?.phone && (
          <div className="flex items-center justify-between mb-2">
            <FaPhone className="text-xl" />
            <h1 className=" text-sm">{place.phone}</h1>
          </div>
        )}
      </div>
      <div className="flex mb-2 w-full">
        <button
          className="flex items-center mr-8 text-sm text-blue-600"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </button>
        <button
          className="flex items-center text-sm text-blue-600"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    </div>
  );
}

export default PlaceDetails;
