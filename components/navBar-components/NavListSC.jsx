import ThemeCC from "./NavList-components/ThemeCC";
import SearchCC from "./NavList-components/SearchCC";
import { Flex } from "@chakra-ui/react";
import NavItemsCC from "./NavList-components/NavItemsCC";

const NavListSC = () => {
  return (
    <Flex direction="column" gap="3" w="100%">
      <SearchCC />
      <ul className="mt-2 mb-4 flex flex-col gap-x-2 justify-evenly flex-wrap lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavItemsCC />

        <ThemeCC />
      </ul>
    </Flex>
  );
};

export default NavListSC;
