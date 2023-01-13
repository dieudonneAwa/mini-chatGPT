/* eslint-disable react/no-unescaped-entities */
import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import ThreeDotsLoader from "../src/icons/ThreeDotsLoader";
import { colors } from "../src/theme";
import { AnimatePresence } from "framer-motion";
import Chat from "../src/components/Chat";
import InputField from "../src/components/InputField";

type Chat = {
  user: "me" | "gpt";
  message: string;
  originalIndex: number;
};

const Home: NextPage = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setValue("");
      setChats((prev) => [
        { user: "me", message: value, originalIndex: prev.length },
        ...prev,
      ]);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: [{ user: "me", message: value }, ...chats]
            .reverse()
            .map((d) => d.message)
            .join(""),
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setChats((prev) => [
        { user: "gpt", message: data.result, originalIndex: prev.length },
        ...prev,
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex bg="main-bg" h="100vh" color="main-color">
      <Flex
        maxW="1000px"
        flexDir="column"
        justify="space-between"
        bg={colors["button-color"]}
        maxH="100vh"
        rounded="xl"
        w="full"
        mx="auto"
        pb="1rem"
        pt="2rem"
        px="1rem"
      >
        <Flex
          flexDir="column-reverse"
          justify="flex-start"
          align="flex-start"
          maxW="800px"
          h="full"
          w="full"
          mx="auto"
          gap="2rem"
          overflowY="auto"
          px={[0, 0, "1rem"]}
          py="2rem"
        >
          {isSubmitting && (
            <Flex alignSelf="flex-start" justify="center" px="2rem" py="0.5rem">
              <ThreeDotsLoader />
            </Flex>
          )}
          <AnimatePresence>
            {chats.map((chat, index) => {
              return (
                <Chat
                  key={chat.originalIndex}
                  message={chat.message}
                  user={chat.user}
                />
              );
            })}
          </AnimatePresence>
        </Flex>
        <InputField
          inputProps={{
            onChange: (e) => setValue(e.target.value),
            autoFocus: true,
            value,
          }}
          onSubmit={handleSubmit!}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
