import { Typography } from "@/materialExports";
import Link from "next/link";
import { Flex } from "@/chakraExports";
import ThemeCC from "./ThemeCC";
import SearchCC from "./SearchCC";

const NavList = () => {
  return (
    <Flex direction="column" gap="3" w="100%">
      <SearchCC />
      <ul className="mt-2 mb-4 flex flex-col gap-x-2 justify-evenly flex-wrap lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {/* {categList.map((item, key) => (
          <Typography
            key={key}
            as={Link}
            href={`/category/${item}`}
            variant="paragraph"
            color="gray"
            className="font-medium hover:text-secClr text--white "
          >
            <span className=""> {item}</span>
          </Typography>
        ))} */}

        <ThemeCC />
      </ul>
    </Flex>
  );
};

export default NavList;
