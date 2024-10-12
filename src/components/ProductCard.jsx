import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

function ProductCard({
  Img,
  heading,
  discription,
  btnHandeler,
  animate = true,
}) {
  return animate?(
    <motion.div
      initial={{ opacity: 0.0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      }}
      className="relative flex flex-col  items-center justify-center "
    >
      <Card className="mt-6 w-[80%] sm:w-96 mx-2 my-8 hover:shadow-green-700" onClickCapture={btnHandeler}>
        <CardHeader
          color="blue-gray h-fit flex justify-center items-center"
          className="relative h-56 border border-blue-gray-100 "
          style={{
            backgroundImage: `url(${Img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img
            // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            src={Img}
            alt="preety industries"
          /> */}
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {heading}
          </Typography>
          <Typography>{discription}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClickCapture={btnHandeler}>View More...</Button>
        </CardFooter>
      </Card>
    </motion.div>
  ):(
      <Card className="mt-6 w-[80%] sm:w-96 mx-2 my-8">
        <CardHeader
          color="blue-gray h-fit flex justify-center items-center"
          className="relative h-56"
        >
          <img
            // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            src={Img}
            alt="preety industries"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {heading}
          </Typography>
          <Typography>{discription}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClickCapture={btnHandeler}>Read More</Button>
        </CardFooter>
      </Card>
  );
}

export default ProductCard;
