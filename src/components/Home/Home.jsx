import React from "react";
import Banner from "../Banner/Banner";
import Patti from "../Patti";
import GroupProductIMage from "../../assets/CarouselImages/GroupProductIMage.png";
import { Heading, ImageCard, ProductModal } from "../index";
import Img1 from '../../assets/CarouselImages/Img1.webp'
import Img2 from '../../assets/CarouselImages/Img2.webp'
import Img3 from '../../assets/CarouselImages/Img3.webp'

function Home() {

  const Products = [
    {
      heading:"GASKET",
      discription:"All Gaskets are also available in Nitrile, Silicon and all other kinds of  Special rubber as per  Customer Requirement.",
      cardImg:"../../assets/CarouselImages/Img3.webp"
    },
    {
      heading:"O-RINGS",
      discription:"O-Rings are  also available in other size as mention in  O-Ring size chart",
      cardImg:Img1
    },
    {
      heading:"CAP",
      discription:"O-Rings are  also available in other size as mention in  O-Ring size chart",
      cardImg:Img2
    },
    {
      heading:"GROMMET",
      discription:"All Grommet are also available in Nitrile, Silicon , EPDM and all other kinds of  Special rubber as per  Customer Requirement.  ",
      cardImg:Img2
    },
    {
      heading:"Boot & Dust Seal ",
      discription:"All Boots  are also available in Nitrile, Silicon ,EPDM ,Neoprene and all other kinds of  Special rubber as per  Customer Requirement. ",
      cardImg:Img2
    },
    {
      heading:"Diaphragm & Other parts",
      discription:"All parts are also available in Nitrile, Silicon and all other kinds of  Special rubber as per  Customer Requirement. ",
      cardImg:Img2
    },
  ]

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


        {

          Products.map((product)=>(
            <ProductModal 
            cardImg={product.cardImg} 
            heading={product.heading}
            dicription={product.discription}
            />

          ))
        }

{/* 
        <ProductModal 
        cardImg={Img2} 
        heading={"Rubber Products"}
        dicription={"Rubber products also build by the preety industries"}
       
        />
        <ProductModal 
        cardImg={Img1} 
        heading={"plastic Rings"}
        dicription={"these are the plastic rings manufactured by us for according to customers need and requirement"}
        
        /> */}
      </div>
    </div>
  );
}

export default Home;
