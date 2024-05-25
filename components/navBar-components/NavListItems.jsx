import React from "react";
import { Input, Typography } from "@/materialExports";
import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";

const navListItems = [
  {
    label: "Account",
  },
  {
    label: "Blocks",
  },
  {
    label: "Docs",
  },
];

const NavList = () => {
  return (
    <Flex direction="column" gap="3" w="100%">
      <Flex w="100%" className="relative ">
        <Input
          type="email"
          label="Email Address"
          // value={email}
          // onChange={onChange}
          className="pr-20 w-full"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button className="!absolute right-0 top-0 rounded">Invite</Button>
      </Flex>
      <ul className="mt-2 mb-4 flex flex-col gap-x-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label }, key) => (
          <Typography
            key={label}
            as={Link}
            href="#"
            variant="paragraph"
            color="gray"
            className="font-medium hover:text-secClr text--white "
          >
            <span className=""> {label}</span>
          </Typography>
        ))}
      </ul>
    </Flex>
  );
};

export default NavList;
