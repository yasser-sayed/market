import { ThemeProvider, Provider, store } from "@/materialExports";
import { ChakraProvider } from "@/chakraExports";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider>
        <ChakraProvider>
          <Provider store={store}>{children}</Provider>
        </ChakraProvider>
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
