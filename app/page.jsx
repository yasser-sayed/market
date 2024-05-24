import React from "react";
import { Button } from "@/materialExports";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@/chakraExports";

const home = () => {
  return (
    <div>
      <Button>haha</Button>

      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default home;
