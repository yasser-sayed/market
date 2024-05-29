import React from "react";
import { Badge, Flex } from "@chakra-ui/react";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@/materialExports";
import Link from "next/link";

const CardSC = ({ prod, i }) => {
  return (
    <Card
      className="max-w-[24rem] overflow-hidden shadow-lg text-black group dark:bg-forthClr dark:text-thirdClr"
      key={i}
    >
      <CardHeader
        floated={false}
        shadow
        color="transparent"
        className="m-0 rounded-none relative group-hover:opacity-75"
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
            className="w-full h-[350px] "
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
          <Typography
            variant="h4"
            className="text-blue-gray-700 dark:text-thirdClr"
          >
            Brand : {prod.brand}
          </Typography>

          <hr />

          <Typography
            variant="paragraph"
            className=" font-normal text-gray-500"
          >
            {prod.title}
          </Typography>

          <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
            <span className="line-through text-gray-700">EGP {prod.price}</span>{" "}
            <Typography
              variant="h6"
              className="text-gray-300  underline underline-offset-8 border-mainclr dark:border-secClr"
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
  );
};

export default CardSC;
