import React from "react";
import { GoogleMap, Heading } from "../index";
import { Typography } from "@material-tailwind/react";

function Contactus() {
  return (
    <div>
      <ul className=" border-gray-400 mx-8 px-6">
        <Typography
          variant="small"
          color="black"
          className="mb-3 font-medium font-bold underline "
        >
          <Heading value="Contact Details" />
        </Typography>
        <li>
          <Typography
            color="gray"
            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
          >
            MR. UMESH PRAKASH MISHRA (PROP.) MOB:-9758028516 /8392910942
          </Typography>
        </li>

        <li>
          <Typography
            color="gray"
            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
          >
            MR. BRIJESH KUMAR MANAGER (PROD.+DEVP.) MOB:-9027606886
          </Typography>
        </li>
        <li>
          <Typography
            color="gray"
            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
          >
            MR. VIPIN KUMAR (QA.Head & CO-ORDINATOR) MOB:-9599351560
          </Typography>
        </li>
        <li>
          <Typography
            color="gray"
            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
          >
            MR. VIRENDRA SINGH(ACCOUNTS ) MOB: 8077536202
          </Typography>
        </li>
      </ul>

      {/* Google map */}
      <div className="w-full sm:w-[50%] mx-auto">
        <GoogleMap />
      </div>
    </div>
  );
}

export default Contactus;
