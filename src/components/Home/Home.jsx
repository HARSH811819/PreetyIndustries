import React from "react";
import Banner from "../Banner/Banner";
import Patti from "../Patti";
import GroupProductIMage from "../../assets/CarouselImages/GroupProductIMage.png";
import {
  CustomersMovingCards,
  Heading,
  ImageCard,
  ProductModal,
} from "../index";
// products card images
import gaskets from "../../assets/Products/ProductsModalImages/gaskets.jpg";
import O_rings from "../../assets/Products/ProductsModalImages/O_rings.jpg";
import rubber_caps from "../../assets/Products/ProductsModalImages/rubber_caps.jpg";
import grommet from "../../assets/Products/ProductsModalImages/grommet.jpg";
import seals from "../../assets/Products/ProductsModalImages/Bootanddustseal.webp";
import diaphram from "../../assets/Products/ProductsModalImages/diaphram.jpeg";
// customer card images
import ashokLayland from "../../assets/customersImages/ashokLayland.jpg";
import Bajaj from "../../assets/customersImages/bajaj.jpg";
import Eicher from "../../assets/customersImages/Eicher.jpg";
import Hero from "../../assets/customersImages/Hero.jpg";
import mahindra from "../../assets/customersImages/Mahindra.jpg";
import newHoland from "../../assets/customersImages/newHoland.jpg";
import Tata from "../../assets/customersImages/Tata.jpg";
import Yamaha from "../../assets/customersImages/yamaha.jpg";

import Img3 from "../../assets/CarouselImages/Img3.webp";

function Home() {
  // customers card details
  const testimonials = [
    {
      title: "Ashok Layland",
      cardImg: ashokLayland,
    },
    {
      title: "Bajaj",
      cardImg: Bajaj,
    },
    {
      title: "Eicher Motors",
      cardImg: Eicher,
    },
    {
      title: "Hero",
      cardImg: Hero,
    },
    {
      title: "Mahindra",
      cardImg: mahindra,
    },
    {
      title: "New Holand",
      cardImg: newHoland,
    },
    {
      title: "Tata",
      cardImg: Tata,
    },
    {
      title: "Yamaha",
      cardImg: Yamaha,
    },
  ];

  // Product Details
  const Products = [
    {
      heading: "GASKET",
      discription:
        "All Gaskets are also available in Nitrile, Silicon and all other kinds of  Special rubber as per  Customer Requirement.",
      cardImg: gaskets,
    },
    {
      heading: "O-RINGS",
      discription:
        "O-Rings are  also available in other size as mention in  O-Ring size chart",
      cardImg: O_rings,
    },
    {
      heading: "CAP",
      discription:
        "All cap are also available in Nitrile, Silicon and all other kinds of Special rubber as per  Customer Requirement. ",
      cardImg: rubber_caps,
    },
    {
      heading: "GROMMET",
      discription:
        "All Grommet are also available in Nitrile, Silicon , EPDM and all other kinds of  Special rubber as per  Customer Requirement.  ",
      cardImg: grommet,
    },
    {
      heading: "Boot & Dust Seal ",
      discription:
        "All Boots  are also available in Nitrile, Silicon ,EPDM ,Neoprene and all other kinds of  Special rubber as per  Customer Requirement. ",
      cardImg: seals,
    },
    {
      heading: "Diaphragm & Other parts",
      discription:
        "All parts are also available in Nitrile, Silicon and all other kinds of  Special rubber as per  Customer Requirement. ",
      cardImg: diaphram,
    },
  ];

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

      <Heading classes={"font-extrabold my-20"} value="Our Product Range" />
      <div className="mt-[150px] bg-gray-400 h-fit flex flex-col md:flex-row justify-around relative flex-wrap bg-gradient-to-t from-green-500">
        {Products.map((product) => (
          <ProductModal
            cardImg={product.cardImg}
            heading={product.heading}
            dicription={product.discription}
          />
        ))}
      </div>

      {/* Our Valuable Customers */}
      <div className=""></div>

      <div className="h-[650px] flex flex-col items-center justify-center w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <Heading
          classes={"font-semibold !my-0 !mt-20 text-5xl text-green-600 "}
          value="Our Valuable Customers"
          animate={true}
        />

 
        <CustomersMovingCards
          testimonials={testimonials}
          speed={"fast"}
          direction={"left"}
          animate={false}
        />

      </div>
    </div>
  );
}

export default Home;
