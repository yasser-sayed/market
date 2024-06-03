import { ThemeProvider, Provider, store } from "@/materialExports";
import { ChakraProvider } from "@/chakraExports";
import React from "react";
import NavBar from "./NavBar";
import ArrowBtn from "./ArrowBtn";
import SecSideBtn from "./SecSideBtn";
import FooterSC from "./FooterSC";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider>
        <ChakraProvider>
          <Provider store={store}>
            <NavBar />

            {children}

            <ArrowBtn />
            <SecSideBtn />

            <FooterSC />
          </Provider>
        </ChakraProvider>
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
