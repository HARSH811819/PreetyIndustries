import React from "react";
import {

  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {ProductCard} from './index';

function ProductModal({ 
  heading,
  dicription, 
  classes ,
  cardImg,
  animate = true

}) {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => {
    setSize(value);
    console.log(value);
  };
  return (
    <div className=" relative top-[-100px] ">
      {/* modal Button */}
      {/* <div className="flex gap-3">
        <Button onClick={() => handleOpen("xxl")} variant="gradient">
          Open Dialog XXL
        </Button>
      </div> */}
      <ProductCard 
        Img={cardImg}
        heading={heading}
        discription={dicription}
        btnHandeler={()=>handleOpen("xxl")}
        animate={animate}
      />
    

      <Dialog open={size === "xxl"} size={size || "xxl"} handler={handleOpen}>
        <div className="py-4 px-2 float-end w-full ">
          <Button className="bg-red-600" onClickCapture={handleOpen}>
            X
          </Button>
        </div>
        <DialogHeader>{heading}</DialogHeader>
        <DialogBody>

          <h4>{dicription}</h4>

        </DialogBody>
      </Dialog>
    </div>
  );
}

export default ProductModal;
