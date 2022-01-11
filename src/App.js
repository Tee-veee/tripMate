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

  const testData = [
    {
      location_id: "9982902",
      name: "Yolo Man Restaurant",
      latitude: "-34.937887",
      longitude: "138.562984",
      num_reviews: "3",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Dien Dien, Khanh Hoa Province",
      photo: {
        images: {
          small: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "144",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "50",
          },
          original: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "318",
          },
          large: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "318",
          },
          medium: {
            width: "438",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "254",
          },
        },
        is_blessed: true,
        uploaded_date: "2016-02-02T08:55:35-0500",
        caption: "getlstd_property_photo",
        id: "171296401",
        helpful_votes: "0",
        published_date: "2016-02-02T08:55:35-0500",
      },
      awards: [],
      doubleclick_zone: "as.vietnam",
      preferred_map_engine: "default",
      raw_ranking: "3.060378074645996",
      ranking_geo: "Dien Dien",
      ranking_geo_id: "15296278",
      ranking_position: "1",
      ranking_denominator: "1",
      ranking_category: "restaurant",
      ranking: "#1 of 1 Restaurants in Dien Dien",
      distance: "8.213921327616687",
      distance_string: "8.2 km",
      bearing: "south",
      rating: "5.0",
      is_closed: false,
      open_now_text: "Open Now",
      is_long_closed: false,
      price_level: "$$ - $$$",
      price: "$20,000 - $500,000",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      ancestors: [],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Dien Dien",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 58 3772 279",
      website: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
      email: "thinn80@gmail.com",
      address_obj: {
        street1: "24 Dong Khoi",
        street2: null,
        city: "Dien Dien",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
      hours: {
        timezone: "Asia/Ho_Chi_Minh",
        week_ranges: [
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
        ],
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "9982902",
      name: "Restaurant Lovely",
      latitude: "-34.933764",
      longitude: "138.559550",
      num_reviews: "3",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Dien Dien, Khanh Hoa Province",
      photo: {
        images: {
          small: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "144",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "50",
          },
          original: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "318",
          },
          large: {
            width: "550",
            url: "https://hips.hearstapps.com/hmg-prod/images/delish-bucatinipasta-028-ls-1607552701.jpg",
            height: "318",
          },
          medium: {
            width: "438",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "254",
          },
        },
        is_blessed: true,
        uploaded_date: "2016-02-02T08:55:35-0500",
        caption: "getlstd_property_photo",
        id: "171296401",
        helpful_votes: "0",
        published_date: "2016-02-02T08:55:35-0500",
      },
      awards: [],
      doubleclick_zone: "as.vietnam",
      preferred_map_engine: "default",
      raw_ranking: "3.060378074645996",
      ranking_geo: "Dien Dien",
      ranking_geo_id: "15296278",
      ranking_position: "12",
      ranking_denominator: "12",
      ranking_category: "restaurant",
      ranking: "#12 of 14 Restaurants in Adelaide",
      distance: "8.213921327616687",
      distance_string: "8.2 km",
      bearing: "south",
      rating: "3.0",
      is_closed: false,
      open_now_text: "Open Now",
      is_long_closed: false,
      price_level: "$ - $$",
      price: "$20,000 - $500,000",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      ancestors: [],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Dien Dien",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 58 3772 279",
      website: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
      email: "thinn80@gmail.com",
      address_obj: {
        street1: "24 Dong Khoi",
        street2: null,
        city: "Dien Dien",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
      hours: {
        timezone: "Asia/Ho_Chi_Minh",
        week_ranges: [
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
        ],
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "9982902",
      name: "Jimbos Greek",
      latitude: "-34.955360",
      longitude: "138.569540",
      num_reviews: "3",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Dien Dien, Khanh Hoa Province",
      photo: {
        images: {
          small: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "144",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "50",
          },
          original: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "318",
          },
          large: {
            width: "550",
            url: "https://cdn.concreteplayground.com/content/uploads/2016/03/Yiros-Shop-image-1-1920x1080.jpg",
            height: "318",
          },
          medium: {
            width: "438",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "254",
          },
        },
        is_blessed: true,
        uploaded_date: "2016-02-02T08:55:35-0500",
        caption: "getlstd_property_photo",
        id: "171296401",
        helpful_votes: "0",
        published_date: "2016-02-02T08:55:35-0500",
      },
      awards: [],
      doubleclick_zone: "as.vietnam",
      preferred_map_engine: "default",
      raw_ranking: "3.060378074645996",
      ranking_geo: "Dien Dien",
      ranking_geo_id: "15296278",
      ranking_position: "12",
      ranking_denominator: "12",
      ranking_category: "restaurant",
      ranking: "#12 of 14 Restaurants in Adelaide",
      distance: "8.213921327616687",
      distance_string: "8.2 km",
      bearing: "south",
      rating: "3.0",
      is_closed: false,
      open_now_text: "Open Now",
      is_long_closed: false,
      price_level: "$ - $$",
      price: "$20,000 - $500,000",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      ancestors: [],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Dien Dien",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 58 3772 279",
      website: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
      email: "thinn80@gmail.com",
      address_obj: {
        street1: "24 Dong Khoi",
        street2: null,
        city: "Dien Dien",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
      hours: {
        timezone: "Asia/Ho_Chi_Minh",
        week_ranges: [
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
        ],
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
  ];

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
