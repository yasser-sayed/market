import { Navbar, Typography } from "@/materialExports";
import { Flex } from "@/chakraExports";
import NavList from "./navBar-components/NavListItems";
import CollapseCS from "./navBar-components/CollapseCS";
import IconBtnCs from "./navBar-components/IconBtnCs";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";
import SideBarCC from "./navBar-components/SideBarCC";
import CartHoverCC from "./navBar-components/CartHoverCC";

const NavBar = () => {
  return (
    <Navbar className="shadow-lg shadow-mainclr dark:shadow-secClr bg-mainclr dark:bg-secClr !min-w-[100%] border-0 rounded-none px-4 py-2 lg:px-8 lg:py-4  text-white dark:text-gray-300">
      <Flex justifyContent="space-between" alignItems="center" p="2">
        <Flex columnGap="2" alignItems="center">
          <Typography variant="paragraph">Follow us on </Typography>
          <Typography
            className="cursor-pointer text-lg !hover:text-blue-800"
            as="a"
            href="https://www.facebook.com/profile.php?id=100027507352759"
            target="_blank"
          >
            <FaFacebook />
          </Typography>{" "}
          <Typography
            className="cursor-pointer text-lg !hover:text-[#FD03BD]"
            as="a"
            href="https://www.instagram.com/yaasser_sayed/"
            target="_blank"
          >
            <FaInstagram />
          </Typography>{" "}
          <Typography
            className="cursor-pointer text-lg !hover:text-blue-300"
            as="a"
            href="https://x.com/Yasser_Sayed952"
            target="_blank"
          >
            <FaTwitter />
          </Typography>{" "}
          <Typography
            className="cursor-pointer text-lg !hover:text-black"
            as="a"
            href="https://github.com/yasser-sayed"
            target="_blank"
          >
            <FaGithub />
          </Typography>{" "}
        </Flex>
        <Flex gap="1" alignItems="center">
          <a className="cursor-pointer text-sm">Login</a>|
          <a className="cursor-pointer text-sm">register</a>|
          <Link href="/support" className="cursor-pointer text-sm">
            support
          </Link>
          <MdContactSupport />
        </Flex>
      </Flex>
      <hr />
      <div className="relative mx-auto flex items-center justify-between mt-4">
        <Flex alignItems="center" gap="1">
          <SideBarCC />

          <Link href="/" className=" hover:text-secClr cursor-pointer ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
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
            variant="h4"
            className="mr-4  cursor-pointer py-1.5 font-bold hover:text-secClr "
          >
            RSA-Market
          </Typography>
        </Flex>
        <div className="hidden lg:block grow px-12">
          <NavList />
        </div>

        <CartHoverCC />

        <IconBtnCs />
      </div>

      <CollapseCS />
    </Navbar>
  );
};

export default NavBar;
