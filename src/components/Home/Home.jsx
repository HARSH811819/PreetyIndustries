import React from "react";
import Banner from "../Banner/Banner";
import Patti from "../Patti";
import GroupProductIMage from "../../assets/CarouselImages/GroupProductIMage.png";
import { Heading, ImageCard, ProductModal } from "../index";
import Img1 from '../../assets/CarouselImages/Img1.webp'
import Img2 from '../../assets/CarouselImages/Img2.webp'

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

      <Heading classes={"font-extrabold my-20"} value="Our Product Range"/>
      <div className="mt-[150px] bg-gray-400 h-fit flex flex-col md:flex-row justify-around relative flex-wrap">
        <ProductModal 
        cardImg={Img1} 
        heading={"Ring Products"}
        dicription={"this is a new product by preety industries this is very good product"}
        />
        <ProductModal 
        cardImg={Img2} 
        heading={"Rubber Products"}
        dicription={"Rubber products also build by the preety industries"}
       
        />
        <ProductModal 
        cardImg={Img1} 
        heading={"plastic Rings"}
        dicription={"these are the plastic rings manufactured by us for according to customers need and requirement"}
        
        />
      </div>
    </div>
  );
}

export default Home;
