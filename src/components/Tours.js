import Card from "./Card";

export default function Tours({ tours, removeTour }) {
  return (
    <>
      <div className="container">
        <h2 className="text-5xl m-[6vh] p-4 rounded-[20px] border-[7px] border-dashed border-[rgb(1,17,160)]">
          lets plan our tour
        </h2>
        <div className="flex justify-center flex-wrap max-w-[1300px] mx-auto my-0">
          {tours.map((tours) => {
            return (
              <Card {...tours} removeTour={removeTour}>
                {" "}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
