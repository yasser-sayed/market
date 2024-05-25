import { ThemeProvider, Provider, store } from "@/materialExports";
import { ChakraProvider } from "@/chakraExports";
import React from "react";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider>
        <ChakraProvider>
          <Provider store={store}>
            <NavBar />

            {children}
          </Provider>
        </ChakraProvider>
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
