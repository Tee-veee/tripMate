import { useState } from "react";

function List() {
  const [type, setType] = useState("Restaurants");

  return (
    <div>
      <h1>Hotels, Restaurants and Attractions for you!</h1>
      <form>
        <label htmlFor="Type">Type</label>
        <select
          name="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </form>
    </div>
  );
}

export default List;
