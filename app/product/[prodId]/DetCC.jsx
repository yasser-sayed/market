"use client";

import { getProdDet } from "@/redux-system/slices/productSlice";
import { Flex } from "@chakra-ui/react";
import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa6";

const DetCC = () => {
  const [quantity, setQuantity] = useState(1);

  const { prodDet, prodLoading } = useSelector((state) => state.product);
  const { theme } = useSelector((state) => state.config);

  const { prodId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdDet(prodId));
  }, []);

  return (
    <>
      <Flex></Flex>
      <Flex
        flexDirection={"column"}
        gap={4}
        className="text-center md:text-start p-4"
      >
        <Typography
          variant="h5"
          color={theme ? "black" : "white"}
          className="text-center md:text-start"
        >
          {" "}
          {prodDet?.title}
        </Typography>

        <hr />

        <Typography variant="paragraph" color="gray">
          {" "}
          {prodDet?.description}{" "}
        </Typography>

        <p>
          {`rating - ${prodDet?.rating}`}{" "}
          <span className="text-mainClr dark:text-secClr">|</span>{" "}
          {`brand - ${prodDet?.brand}`}{" "}
          <span className="text-mainClr dark:text-secClr">|</span>{" "}
          {`category - ${prodDet?.category}`}{" "}
        </p>

        <Flex
          flexDirection={"column"}
          p={3}
          gap={2}
          className="rounded-lg shadow shadow-thirdClr dark:shadow-forthClr bg-thirdClr dark:bg-forthClr dark:bg-opacity-95"
        >
          <p className=" text-gray-500 dark:text-gray-700">
            {" "}
            <span className="line-through pe-2">EGP {prodDet?.price}</span>{" "}
            Inclusive of taxes{" "}
          </p>

          <section className="flex flex-col  gap-4 justify-center items-center md:items-start">
            <Typography
              variant="h5"
              className="text-mainclr dark:text-secClr font-bold"
            >
              EGP{" "}
              {(
                prodDet?.price -
                (prodDet?.discountPercentage * prodDet?.price) / 100
              ).toFixed(2)}
            </Typography>

            <p className="px-2 py-1 bg-mainclr dark:bg-secClr rounded">{`${prodDet?.discountPercentage} %off`}</p>
          </section>

          <Flex gap={3}>
            <p>Quantity</p>

            <ButtonGroup>
              <Button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity < 2}
                className=" bg-white hover:bg-red-600 hover:shadow-red-600 hover:shadow-lg dark:bg-forthClr "
              >
                -
              </Button>
              <Button
                className="cursor-text dark:bg-forthClr dark:shadow-forthClr"
                color="white"
              >
                {quantity}
              </Button>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                className=" bg-white hover:bg-green-600 hover:shadow-green-600 hover:shadow-lg dark:bg-forthClr "
              >
                +
              </Button>
            </ButtonGroup>
          </Flex>

          <Flex>
            <Button className="bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg">
              <FaOpencart /> add to cart
            </Button>

            <Button className="bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg">
              buy now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DetCC;
