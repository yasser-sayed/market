"use client";

import { Badge, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { getProducts } from "@/redux-system/slices/productSlice";

const MainProductsCC = () => {
  const { products, productsLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      flexWrap={"wrap"}
      className="min-h-screen"
    >
      {productsLoading ? (
        <Loading />
      ) : (
        products.map((prod, i) => (
          <Card
            className="max-w-[24rem] overflow-hidden shadow-lg text-black"
            key={i}
          >
            <CardHeader
              floated={false}
              shadow
              color="transparent"
              className="m-0 rounded-none relative"
            >
              <Badge
                p={2}
                className="!bg-mainclr dark:!bg-secClr absolute left-0 top-4 !text-white"
              >
                {prod.category}
              </Badge>

              <Link href={`/product/${prod.id}`}>
                <Image
                  src={prod.thumbnail}
                  height={500}
                  width={500}
                  alt="product img"
                  className="w-full h-[350px]"
                />
              </Link>
            </CardHeader>
            <CardBody>
              <Flex
                direction={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
              >
                <Typography variant="h4" color="blue-gray">
                  Brand : {prod.brand}
                </Typography>

                <hr />

                <Typography
                  variant="paragraph"
                  color="gray"
                  className=" font-normal"
                >
                  {prod.title}
                </Typography>

                <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                  <span className="line-through text-gray-500">
                    EGP {prod.price}
                  </span>{" "}
                  <Typography
                    variant="h6"
                    className="text-gray-700  underline underline-offset-8 border-mainclr dark:border-secClr"
                  >
                    EGP{" "}
                    {(
                      prod.price -
                      (prod.discountPercentage * prod.price) / 100
                    ).toFixed(2)}
                  </Typography>
                  <span className="text-green-300">{`(${prod.discountPercentage}%off)`}</span>
                </Flex>
              </Flex>
            </CardBody>
            <CardFooter>
              <Link href={`/product/${prod.id}`}>
                <Button
                  fullWidth
                  className="bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg"
                >
                  show details{" "}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      )}
    </Flex>
  );
};

export default MainProductsCC;
