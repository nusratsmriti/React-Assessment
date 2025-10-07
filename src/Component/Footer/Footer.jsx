import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-[100px]">
      <div className="flex-1 flex items-center">
        <a className="btn btn-ghost text-[26px] md:text-3xl text-[#FFD337]">
          <span className="text-[#003EA4] poppins">Auction</span>Gallery
        </a>
      </div>
      <div className="sora text-[22px] flex gap-3">
        <a href="">Bid.</a>
        <a href="">Win.</a>
        <a href="">Won</a>
      </div>
      <div className="sora text-[18px] flex gap-5 pb-4">
        <a href="">Home</a>
        <a href="">Auctions</a>
        <a href="">Categories</a>
        <a href="">How to works</a>
      </div>
      <h1>© 2025 AuctionHub. All rights reserved</h1>
    </div>
  );
}

