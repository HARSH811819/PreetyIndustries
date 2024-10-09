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
        <div className="flex w-[90%] mx-auto  m-auto md:w-[40%] m-6">
          <Heading
            transit={true}
            value="MANUFACTURER OF ALL TYPES OF RUBBER PARTS"
            classes={"font-semibold text-[3vh] md:text-5xl text-green-800"}
          />
        </div>
        
      </div>

{/* All Products */}
      <div className="">

      </div>

    </div>
  );
}

export default Home;
