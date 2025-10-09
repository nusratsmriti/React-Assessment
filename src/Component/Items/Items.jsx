import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function Items() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const total = favorites.reduce((sum, fav) => sum + fav.currentBidPrice, 0);
  const handlefavorits = (item) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((id) => id !== item));
    } else {
      setFavorites([...favorites, item]);
    }
    
    const favoriteContainer = document.getElementById("favorite-div");
    favoriteContainer.classList.add('hidden');
  
  }
 
 
  
  return (
    <div className="flex gap-5">
      {/* all items is here  */}
      <div className="overflow-x-auto w-[70%]">
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
                    <FaRegHeart
                      onClick={() => handlefavorits(item)}
                      className="text-xl"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* favorite section */}
      <div className="favorite-items w-[30%] ">
        <div className="card bg-base-100 shadow-sm ml-[24px] w-full">
          <div className="flex border-b-2 border-blue-200 text-[#0E2954] gap-2 text-[32px] font-medium p-3 justify-center items-center">
            <FaRegHeart className="text-3xl" />
            <h2 className="pb-2">Favorite Items</h2>
          </div>
          <div className="grid gap-4 ">
            {favorites.map((fav) => (
              <div
                key={fav.id}
                className="bg-base-100  p-3 flex items-center gap-3 min-h-[110px]"
              >
                <img
                  src={fav.image}
                  alt={fav.title}
                  className="w-[90px] h-[90px] object-cover rounded-md"
                />

                <div className="flex-1 text-[#0E2954] text-[14px]">
                  <div className="flex justify-between items-start pb-1">
                    <h1 className="font-medium  w-[130px]">{fav.title}</h1>
                    <IoCloseSharp
                      size="18px"
                      className="cursor-pointer"
                      onClick={() =>
                        setFavorites(favorites.filter((f) => f.id !== fav.id))
                      }
                    />
                  </div>

                  <div className="flex gap-8">
                    <h1>$ {fav.currentBidPrice}</h1>
                    <h1>Bids: {fav.bidsCount}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Favorite section */}
          <div
            id="favorite-div"
            className="text-center p-8 border-b-2 border-blue-200"
          >
            <p className="text-[26px]">No favorites yet</p>
            <p className="opacity-70 text-[18px]">
              Click the heart icon on any item to add it to your favorites
            </p>
          </div>

          <div className="flex justify-between p-3">
            <h1 className="text-[20px] font-light">Total bids Amount</h1>
            <h1 className="text-[20px] font-medium">
              $ <span>{total}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
