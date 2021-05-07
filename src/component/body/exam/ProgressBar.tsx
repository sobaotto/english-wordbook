import { Progress, Text, Flex } from "@chakra-ui/react";

export const ProgressBar = (): JSX.Element => {
  const currentQuestion = 1;
  return (
    <Flex
      width="100%"
      minH={"80px"}
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      marginTop="10px"
      marginBottom="10px"
    >
      <Text fontSize="25px" fontFamily={"heading"}>
        {currentQuestion}/10
      </Text>
      <Progress colorScheme="teal" value={60} w={"70%"} />
    </Flex>
  );
};
