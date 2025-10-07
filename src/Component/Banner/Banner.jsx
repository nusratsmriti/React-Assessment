import React from 'react'

export default function Banner() {
  return (
    <div>
      <div className="card rounded-none bg-[url('https://i.ibb.co.com/vCr0QyMN/image-7.png')] bg-cover bg-center   h-screen bg-no-repeat">
        <div className=" pl-5 pt-10 lg:pl-[140px] lg:pt-[240px] lg:w-[742px] md:[400px] text-white gap-7 ">
          <h2 className="  sora lg:text-[48px] font-semibold sm:text-3xl md:text-4xl  leading-snug">
            Bid on Unique Items from Around the World
          </h2>
          <p className="sora opacity-70   ">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <button className="btn sora px-[32px] py-[16px] rounded-[36px] mt-[32px] bg-white text-black font-medium">
            Explore Actions{" "}
          </button>
          
        </div>
      </div>
    </div>
  );
}


