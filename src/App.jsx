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
        <Items></Items>
        
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
