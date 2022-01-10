import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className="grid w-full grid-cols-1 grid-rows-2 md:grid-cols-4 md:grid-rows-1 md:auto-cols-auto h-[95vh]">
        <div className="grid w-full">
          <List />
        </div>
        <div className="grid md:col-span-3 w-full md:w-full">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
