import React, { useRef } from "react";

import {
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Button,
  ButtonGroup,
  Card,
} from "@material-tailwind/react";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearCart, dec, delItem, inc } from "@/redux-system/slices/cartSlice";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { IoRefresh } from "react-icons/io5";

const TABLE_HEAD = [
  "product",
  "Unit Price",
  "Quantity",
  "Total Price",
  "Actions",
];

const CartItemsCC = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.config);
  const router = useRouter();
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <div className="p-12 flex flex-col items-center justify-center gap-12">
      <div className="overflow-y-scroll w-full rounded-lg">
        <Card className="h-full w-full  bg-white dark:bg-forthClr">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y    border-b border-blue-gray-100 dark:border-gray-500 bg-thirdClr dark:bg-[#2B2D39] dark:text-thirdClr p-4"
                  >
                    <Typography
                      variant="small"
                      color={theme ? "blue-gray" : "white"}
                      className="font-normal leading-none opacity-70 "
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="dark:text-thirdClr min-w-fit">
              {cartItems.map((item, index) => {
                const {
                  thumbnail,
                  title,
                  price,
                  discountPercentage,
                  quantity,
                  id,
                } = item;
                const isLast = index === cartItems.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50 dark:border-gray-500";

                return (
                  <tr key={title}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          onClick={() => router.push(`/product/${id}`)}
                          src={thumbnail}
                          alt={title}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 cursor-pointer"
                        />

                        <Typography
                          as={Link}
                          variant="small"
                          color={theme ? "blue-gray" : "white"}
                          className="font-bold "
                          href={`/product/${id}`}
                        >
                          {title}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color={theme ? "blue-gray" : "white"}
                        className="font-normal "
                      >
                        EGP{" "}
                        {(price - (discountPercentage * price) / 100).toFixed(
                          2
                        )}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <ButtonGroup size="sm">
                        <Button
                          onClick={() => dispatch(dec({ item }))}
                          disabled={quantity < 2}
                          className=" bg-thirdClr text-black dark:text-thirdClr dark:bg-[#2B2D39] hover:bg-red-600 dark:hover:bg-red-600 hover:shadow-red-600 hover:shadow-lg  "
                        >
                          -
                        </Button>
                        <Button
                          className=" bg-thirdClr text-black dark:text-thirdClr dark:bg-[#2B2D39]  dark:shadow-forthClr cursor-default	"
                          color="white"
                        >
                          {quantity}
                        </Button>
                        <Button
                          onClick={() => dispatch(inc({ item }))}
                          className=" bg-thirdClr text-black dark:text-thirdClr dark:bg-[#2B2D39] hover:bg-green-600 dark:hover:bg-green-600 hover:shadow-green-600 hover:shadow-lg  "
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color={theme ? "blue-gray" : "white"}
                        className="font-normal "
                      >
                        EGP{" "}
                        {(
                          (price - (discountPercentage * price) / 100).toFixed(
                            2
                          ) * quantity
                        ).toFixed(2)}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Tooltip content="delete item">
                        <IconButton
                          variant="text"
                          size="sm"
                          onClick={() => dispatch(delItem({ item }))}
                        >
                          <TbTrash className="text-lg text-black dark:text-thirdClr" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>

      <Flex
        alignItems={"center"}
        direction={"column"}
        gap={6}
        justifyContent={"space-around"}
        className="bg-white dark:bg-forthClr rounded-lg px-8 py-4 "
      >
        <Typography variant="h5" color={theme ? "blue-gray" : "white"}>
          total items :{" "}
          <span className="text-mainclr dark:text-secClr text-xl">
            {cartItems.length}
          </span>
        </Typography>
        <Typography variant="h5" color={theme ? "blue-gray" : "white"}>
          total price :{" "}
          <span className="text-mainclr dark:text-secClr text-xl">
            {cartItems
              .map(
                (item) =>
                  item.quantity *
                  (
                    item.price -
                    (item.discountPercentage * item.price) / 100
                  ).toFixed(2)
              )
              .reduce((num1, num2) => num1 + num2)
              .toFixed(2)}
          </span>
        </Typography>

        <Flex
          p={2}
          gap={3}
          className="justify-center md:justify-start items-center"
        >
          <Button
            size="md"
            className="bg-mainclr capitalize dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg"
            onClick={onOpen}
          >
            <IoRefresh className="inline-block mr-1 text-lg" /> clear cart
          </Button>

          <Button
            size="md"
            className="bg-mainclr capitalize dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg"
          >
            check out
          </Button>
        </Flex>
      </Flex>

      {/* dialog div */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay className="bg-thirdClr dark:bg-[#2B2D39] text-forthClr dark:text-thirdClr">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              clear your cart
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                color="red"
                onClick={() => {
                  dispatch(clearCart());
                  onClose();
                }}
                ml={3}
              >
                clear
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default CartItemsCC;
