import { useState } from "react";

export default function Card({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className=" flex justify-center flex-wrap max-w-[1300px] mx-auto  w-[400px] h-max flex-col items-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] m-4 p-4 rounded-[10px]">
      <img className="w-[380px] aspect-[1/1] object-cover" src={image} />
      <div>
        <h2 className="text-[#1faa59] text-[1.3rem]">{price}</h2>
        <h3 className="text-2xl">{name}</h3>

        {description}
        <span
          onClick={readMoreHandler}
          className="text-[#12b0e8] cursor-pointer"
        >
          {readMore ? "show less" : "Read More"}
        </span>
      </div>

      <button
        onClick={() => removeTour(id)}
        className=" border cursor-pointer text-lg font-[bold] bg-[#b4161b21] mt-[18px] px-20 py-2.5 rounded-[10px] border-solid border-[#b4161b]  hover:bg-[red] hover:text-[white] hover:transition-all hover:duration-[0.2s]"
      >
        Not Interested
      </button>
    </div>
  );
}
