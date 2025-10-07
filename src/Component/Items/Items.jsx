import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table bg-white w-full ">
          <thead>
            <tr className="border-b border-gray-200 ">
              <th className="text-sm md:text-base">Items</th>
              <th className="text-sm md:text-base">Current Bid</th>
              <th className="text-sm md:text-base">Time Left</th>
              <th className="text-sm md:text-base">Bid Now</th>
            </tr>
          </thead>
          <tbody className="text-[#0E2954] text-[18px] ">
            {items.map((item) => (
              <tr
                key={item.id}
                className="text-center border-b border-gray-200"
              >
                <td className="flex flex-col sm:flex-row gap-3 items-center text-sm md:text-base p-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h1 className="text-center sm:text-start">{item.title}</h1>
                </td>
                <td className="text-sm md:text-base">
                  $ {item.currentBidPrice}
                </td>
                <td className="text-sm md:text-base">{item.timeLeft}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <FaRegHeart className="text-xl" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
