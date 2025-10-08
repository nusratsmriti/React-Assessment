import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import Items from "./Component/Items/Items";
import { FaRegHeart } from "react-icons/fa";
import Footer from "./Component/Footer/Footer";
import { IoCloseSharp } from "react-icons/io5";
import FavoriteCard from "./Component/FavoriteCard/FavoriteCard";

function App() {
 
  const [favorites, setFavorites] = useState([]);
  console.log(favorites)
   const handleAddedFavorite = (item) => {
     if (favorites.includes(item.id)) {
       setFavorites(favorites.filter((id) => id !== item.id));
     } else {
       setFavorites([...favorites, item.id]);
     }
   };
  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="items-section pb-[100px] sora bg-[#dfe7ef] px-4 sm:px-6 md:px-10 lg:px-[140px] pt-10 lg:pt-[132px]">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-[32px] font-medium text-[#0E2954]">
          Active Auctions
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-light pb-8 lg:pb-[32px] pt-2">
          Discover and bid on extraordinary items
        </p>
        {/* items container */}
        <div className="items-container flex ">
          <div className="items w-[70%]">
            <Items></Items>
          </div>
          <div className="favorite-items w-[30%]">
            <div className="card  bg-base-100 card-lg shadow-sm ml-[24px] w-[100%] ">
              <div className="">
                <div className="flex border-b-2 border-blue-200 text-[#0E2954]  gap-2 text-[32px] font-medium p-3 justify-center items-center">
                  <h1>
                    <FaRegHeart className="text-3xl" />{" "}
                  </h1>
                  <h2 className=" pb-2 ">Favorite Items</h2>
                </div>

                <div className="show-item">
                  
                </div>
                {/* Favorite section */}
                <div id="favorite-div">
                  <div className="text-center p-8 border-b-2 border-blue-200 ">
                    <p className=" text-[26px]">No favorites yets</p>
                    <p className="opacity-70 text-[18px] ">
                      Click the heart icon on any item to add it to your
                      favorites
                    </p>
                  </div>
                </div>
                <div className="flex justify-between p-3">
                  <h1 className="text-[20px] font-light">Total bids Amount</h1>
                  <h1 className="text-[20px] font-medium">
                    $ <span>0000</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
