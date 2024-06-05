import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center flex-col mx-auto my-0">
        <h2 className="text-5xl m-[6vh] px-[5vw] py-[1vh] rounded-[20px] border-[7px] border-dashed border-[rgb(1,17,160)]">
          No tours left
        </h2>
        <button
          onClick={() => setTours(data)}
          className="border cursor-pointer mt-[18px] px-20 py-2.5 border-solid border-[black]  hover:bg-[white] hover:text-[black] hover:transition-all hover:duration-[0.2s]"
        >
          refresh
        </button>
      </div>
    );
  }
  return (
    <div className="container  ">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
