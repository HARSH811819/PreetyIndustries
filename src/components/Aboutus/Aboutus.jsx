import React from "react";
// import Heading from '../Heading'
import { Heading, Paragraph, Badge } from "../index";
function Aboutus() {
  return (
    <div className="mx-auto">
      {/* About Us*/}
      <Heading value={"ABOUT US"} classes={"font-semibold my-6   m-auto"} />

      <p className="text-justify"></p>
      <Paragraph
        classes={" w-[50%] text-justify m-auto "}
        childrens={`Preety industries , Rudrapur is an ISO 9001-2015 certified  fast growing and one of the leading rubber part manufacturer in Udham Singh Nagar , Uttrakhand , providing the rubber part and solution to all rubber related queries for both OEMs and  auto mobile ancillaries , in Rudrapur and all over India.
 
          `}
      />
      <Paragraph
        classes={" w-[50%] text-justify m-auto "}
        childrens={`We are Immensely Pleased to Introduce ourselves as one of the Leading Manufacturer of all type of Rubber Molding and Plastic Components and Special Components. We are having well Equipped in house Facilities for Rubber Rolla Mixing, and all Sorts of Secondary Operations. 
          `}
      />
      <Paragraph
        classes={" w-[50%] m-auto "}
        childrens={`We have Established Separate Quality Control Department. The Standard Room and Testing Facilities are Well Equipped. The Instrumentation is Most Modern and up to date.
          `}
      />

      <hr className="my-8" />

      {/* Our Valuable Customer */}
      <Heading
        value={"OUR VALUABLE CUSTOMER"}
        classes={"font-semibold mt-20 mb-8 !text-2xl m-auto"}
      />
      <Paragraph
        classes={" w-[50%] m-auto"}
        childrens={`We are Manufacturing Dust Seal, Boot, Gasket and many type Grommet Rubber and Plastic Molded Component for SUPRAJIT ENGINEERING LTD, LLOYD ELECTRIC & ENGINEERING LTD,THE VENDING COMPANY, AUTOLITE MANUFACTURING LTD, MINDA INDUSTRIES LTD, MASL CONTROL CABLES LTD,TECHNOCRAT CONNECTIVITY SYSTEM LTD and TVS SUNDRAM FASTENERS LTD.    
          `}
      />

      {/* SPECILITY and VISION AND MISSION Section  */}
      <div className=" flex flex-col items-center sm:flex-row sm:items-baseline sm:justify-center h-fit mt-[250px] w-full bg-gray-400 ">
        <Badge
          heading={"SPECILITY"}
          text={
            "We are Manufacturing Dust Seal, Boot, Gasket and many type Grommet Rubber and Plastic STENERS LTD."
          }
          classes={"relative top-[-100px] mx-6 "}
        />

        <Badge
          heading={"QUALITY ASSURANCE"}
          text={
            "We are Certified An ISO 9001-2015 Certificate. Further we are Committed to implemented of IATF 16949:2016 Quality Standards IN 2025."
          }
          classes={"relative top-[-100px] mx-6"}
        />
      </div>

      {/* VISION AND MISSION Section*/}

      <div className="  w-full h-fit py-3 ">
        <Heading
          value={"VISION AND MISSION"}
          classes={"font-semibold mt-20 mb-8 !text-2xl m-auto"}
        />

        <Paragraph
          classes={" w-[50%] text-justify m-auto "}
          childrens={`Preety Industries exists to help B2B customers from every industry with the supply of high performance rubber products and assist with its associated problem solving.We are strong believers in customer service and work hard to build long standing relationships with our clients, distributors and suppliers, worldwide.

      `}
        />

        <h1 className=""></h1>
        <Paragraph
          classes={" w-[50%] m-auto text-pretty "}
          childrens={`In a world of constant change and technical advancement, we strive to maintain our status as the experts in rubber.
      `}
        />

        <Paragraph
          classes={" w-[50%] m-auto text-pretty"}
          childrens={`We do this by continuing to develop as a company in all our product sectors, investing in R&D, staff training and keeping up with industry demands and care for our people like a family .

      `}
        />
      </div>
    </div>
  );
}

export default Aboutus;
