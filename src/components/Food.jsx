import { useEffect } from "react";
import { data } from "../data/data";
import { useState } from "react";
const Food = ({ input }) => {
  const [foods, setFoods] = useState(data);
  //filter Type Categorical
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };
  //filter by Price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };
  //filterInput
  const filterInput = (input) => {
    setFoods(
      data.filter((item) =>
        item.name.toUpperCase().includes(input.trim().toUpperCase())
      )
    );
  };
  useEffect(() => {
    filterInput(input);
  }, [input]);

  return (
    <div className="max-w-[1640] mx-auto px-4 ">
      <h1 className="text-orange-600 pb-6 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* FILTER ROW */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* FILTER TYPE */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex space-x-1 flex-wrap mt-2">
            <button
              onClick={() => setFoods(data)}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* FILTER PRICE */}
        <div>
          <p className="font-bold text-gray-700 mt-2">Filter Price</p>
          <div className="flex space-x-1 flex-wrap mt-2">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => {
                filterPrice("$");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => {
                filterPrice("$$");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$$");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* DISPLAY FOODS */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        {foods.map((item, index) => (
          <div
            className="max-w-[400px] border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={`${item.name} Image`}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-500  text-white p-1  rounded-full">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
