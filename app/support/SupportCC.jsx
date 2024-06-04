"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const SupportCC = () => {
  const [userInfo, setUserInfo] = useState({
    from_name: "",
    message: "",
    user_email: "",
  });

  const [checkInfo, setCheckInfo] = useState("");
  const router = useRouter();

  const sendMsg = () => {
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    !userInfo.from_name.length
      ? setCheckInfo("please enter your name first")
      : !emailValid.test(userInfo.user_email)
      ? setCheckInfo("invalid email")
      : userInfo.message.length < 3
      ? setCheckInfo("please enter atleast one word in your message")
      : emailjs
          .send("service_gxk5z1b", "template_gxkuknq", userInfo, {
            publicKey: "dCvT675f8gKndvgyv",
          })
          .then(
            async () => {
              await setCheckInfo(
                "done, we will reaply to your message At the earliest"
              );

              setTimeout(() => {
                router.push("/");
              }, 2000);
            },
            (error) => {
              setCheckInfo("netWork Error , please try again later");
            }
          );
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-8 text-center ">
      <Typography variant="h3" className="text-mainclr dark:text-secClr">
        Contact with the rsa Market Website developer!
      </Typography>

      <Card className="w-full md:w-96 rounded-none md:rounded-xl bg-white  dark:bg-forthClr py-4">
        <CardBody className="flex flex-col gap-6 ">
          <Input
            color="blue"
            value={userInfo.from_name}
            onChange={(inp) =>
              setUserInfo({ ...userInfo, from_name: inp.target.value })
            }
            label="your name"
            size="lg"
            className="dark:text-white bg-white dark:bg-transparent"
          />
          <Input
            color="blue"
            value={userInfo.user_email}
            onChange={(inp) =>
              setUserInfo({ ...userInfo, user_email: inp.target.value })
            }
            label="email"
            size="lg"
            className="dark:text-white bg-white dark:bg-transparent"
          />
          <Textarea
            color="blue"
            value={userInfo.message}
            onChange={(inp) =>
              setUserInfo({ ...userInfo, message: inp.target.value })
            }
            label="enter your message Message"
            className="dark:text-white bg-white dark:bg-transparent"
          />

          <Alert
            color={checkInfo.startsWith("done") ? "green" : "red"}
            open={checkInfo ? true : false}
          >
            {checkInfo}
          </Alert>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={sendMsg}
            size="md"
            className="bg-mainclr capitalize dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg"
          >
            send message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SupportCC;
