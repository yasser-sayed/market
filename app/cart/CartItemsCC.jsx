import React from "react";

import {
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Button,
  ButtonGroup,
} from "@material-tailwind/react";
import { TbTrash } from "react-icons/tb";
import { useSelector } from "react-redux";

const TABLE_HEAD = [
  "S.N",
  "product",
  "Unit Price",
  "Quantity",
  "Total Price",
  "Actions",
];

const CartItemsCC = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y   border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems.map(
            (
              { thumbnail, title, price, discountPercentage, quantity },
              index
            ) => {
              const isLast = index === cartItems.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={title}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={thumbnail}
                        alt={title}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {title}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      EGP{" "}
                      {(price - (discountPercentage * price) / 100).toFixed(2)}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <ButtonGroup size="sm">
                      <Button
                        //   onClick={() => setQuantity(quantity - 1)}
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
                        //   onClick={() => setQuantity(quantity + 1)}
                        className=" bg-thirdClr text-black dark:text-thirdClr dark:bg-[#2B2D39] hover:bg-green-600 dark:hover:bg-green-600 hover:shadow-green-600 hover:shadow-lg  "
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      EGP{" "}
                      {(
                        prodDet?.price -
                        (prodDet?.discountPercentage * prodDet?.price) / 100
                      ).toFixed(2) * quantity}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Tooltip content="delete item">
                      <IconButton variant="text">
                        <TbTrash />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemsCC;
