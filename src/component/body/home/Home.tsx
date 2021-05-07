import {
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
  interface homeOption {
    option: string;
    path: string;
  }
  const homeOptions: Array<homeOption> = [
    { option: "もっと頑張る", path: "./exam" },
    { option: "単語帳で確認", path: "./exam" },
    { option: "もっと頑張る", path: "./exam" },
    { option: "テストする", path: "./exam" },
  ];

  return (
    <Box padding="60px 0 0" backgroundColor="gray.100">
      <Image
        src="https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="top-image"
        margin="0 auto"
      />
      <Flex
        justifyContent="space-around"
        color="gray.600"
        minH="120px"
        maxW="700px"
        alignItems="center"
        margin="30px auto"
        flexWrap="wrap-reverse"
        align-content="space-around"
      >
        {homeOptions.map((homeOption, index) => {
          return (
            <Button
              key={index}
              width={100 / 3 - 5 + "%"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"teal.400"}
              href={"#"}
              _hover={{
                bg: "teal.300",
              }}
            >
              <Link to={homeOption.path}>{homeOption.option}</Link>
            </Button>
          );
        })}
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Text fontSize="3xl">＊＊＊＊＊＊</Text>
        <Text fontSize="2xl">~~~~~~~~~~~~~~~</Text>
        <Text fontSize="2xl">~~~~~~~~~~~~~~~</Text>
        <Text fontSize="2xl">~~~~~~~~~~~~~~~</Text>
        <Text fontSize="2xl">~~~~~~~~~~~~~~~</Text>
      </Flex>
    </Box>
  );
};
