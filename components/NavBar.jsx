import React from "react";
import { Badge, Navbar, Typography } from "@/materialExports";
import { Flex } from "@/chakraExports";
import NavList from "./navBar-components/NavListItems";
import CollapseCS from "./navBar-components/CollapseCS";
import IconBtnCs from "./navBar-components/IconBtnCs";
import { IoMdCart } from "react-icons/io";

import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";

const NavBar = () => {
  return (
    <Navbar className="bg-mainclr !min-w-[100vw] border-0 rounded-none px-4 py-2 lg:px-8 lg:py-4  text-white">
      <Flex justifyContent="space-between" alignItems="center" p="3">
        <Flex gap="2" alignItems="center">
          <Typography variant="paragraph">Follow us on </Typography>

          <FaFacebook className="cursor-pointer text-xl hover:text-blue-800" />
          <FaInstagram className="cursor-pointer text-xl hover:text-[#fbad50]" />
          <FaTwitter className="cursor-pointer text-xl hover:text-blue-300" />
          <FaGithub className="cursor-pointer text-xl hover:text-black" />
        </Flex>
        <Flex gap="1" alignItems="center">
          <a className="cursor-pointer">Login</a>|
          <a className="cursor-pointer">register</a>|
          <a className="cursor-pointer">support</a>
          <MdContactSupport />
        </Flex>
      </Flex>
      <hr />
      <div className="relative mx-auto flex items-center justify-between mt-4">
        <Flex alignItems="center" gap="1">
          <Link href="/" className=" hover:text-secClr cursor-pointer ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
          <Typography
            as={Link}
            href="/"
            variant="h3"
            className="mr-4  cursor-pointer py-1.5 font-bold hover:text-secClr "
          >
            RSA-Market
          </Typography>
        </Flex>
        <div className="hidden lg:block grow px-12">
          <NavList />
        </div>

        <Link href="/cart">
          <Badge color="light-blue" content="1">
            <IoMdCart className="text-[2.3rem]" />
          </Badge>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
          className="hover:text-secClr"
        >
          <path d="m466.67-293.33 166.66-240h-122l80.67-280H346.67v346.66h120v173.34ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm66.67-386.67h-120 120Z" />
        </svg>

        <IconBtnCs />
      </div>

      <CollapseCS />
    </Navbar>
  );
};

export default NavBar;

// <ul>
// <li>
//   <Link href={`/`}>home</Link>
// </li>
// <li>
//   <Link href={`/category/1`}>category</Link>
// </li>
// <li>
//   <Link href={`/product/1`}>product</Link>
// </li>
// <li>
//   <Link href={`/search/1`}>search</Link>
// </li>
// <li>
//   <Link href={`/cart`}>cart</Link>
// </li>
// </ul>
