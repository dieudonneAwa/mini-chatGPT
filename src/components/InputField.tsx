import { Box, Flex, Input, InputProps } from "@chakra-ui/react";
import React, { MouseEvent } from "react";
import PlaneIcon from "../icons/PlaneIcon";
import { colors } from "../theme";

type Props = {
  onSubmit: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
  inputProps: InputProps;
};

const InputField = (props: Props) => {
  const { onSubmit, inputProps } = props;

  return (
    <Flex
      maxW="800px"
      as="form"
      w="full"
      mx="auto"
      borderWidth={1}
      borderColor="transparent"
      _focusWithin={{ borderColor: "blue.500" }}
      bg="border-color"
      rounded="md"
      align="center"
      pr="8px"
      boxShadow="md"
    >
      <Input
        p="1rem"
        h="60px"
        borderColor="border-color"
        _hover={{ outline: "unset" }}
        _focus={{ outline: "unset" }}
        _focusVisible={{ borderColor: "transparent" }}
        resize="none"
        {...inputProps}
      />
      <Box
        p="8px"
        as="button"
        rounded="md"
        transition="all ease 0.2s"
        _hover={{ bg: "main-bg" }}
        onClick={onSubmit}
      >
        <PlaneIcon fill={colors["main-color"]} />
      </Box>
    </Flex>
  );
};

export default InputField;
