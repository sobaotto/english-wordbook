import { Button, Flex } from "@chakra-ui/react";

export const Choices = (): JSX.Element => {
  const choices: Array<string> = ["apple", "orange", "grape", "peach"];

  return (
    <Flex
      width="100%"
      minH={"355px"}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {choices.map((choiceItem, index) => {
        return (
          <Button
            key={index}
            w="70%"
            height="2.3em"
            margin="10px 0"
            colorScheme="teal"
            variant="outline"
            borderRadius="100px"
            fontSize="24px"
          >
            {choiceItem}
          </Button>
        );
      })}
    </Flex>
  );
};
