import React from "react";
import Banner from "../Banner/Banner";
import Patti from "../Patti";
import GroupProductIMage from "../../assets/CarouselImages/GroupProductIMage.png";
import { Heading, ImageCard } from "../index";

function Home() {
  return (
    <div>
      <Banner />


{/* All kinds MANUFACTURER OF ALL TYPES OF RUBBER PARTS  */}
      <div className=" flex flex-col sm:flex-row items-center sm:justify-around mt-11 ">
        <ImageCard
          cardImg={GroupProductIMage}
          width={"w-full md:w-[40%]"}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
        <div className="w-full md:w-[40%] m-6">
          <Heading
            transit={true}
            value="MANUFACTURER OF ALL TYPES OF RUBBER PARTS"
            classes={"font-semibold my-6 m-auto !text-6xl text-green-800"}
          />
        </div>
        <h1 className=" text-[100px]"></h1>
      </div>

{/* All Products */}
      <div className="">

      </div>

    </div>
  );
}

export default Home;
