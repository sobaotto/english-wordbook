import { Image, Flex } from "@chakra-ui/react";

export const PhotosOfWord = (): JSX.Element => {
  const currentQuestion = 1;
  const photoSrc: Array<string> = [
    "https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    // "https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ];

  return (
    <Flex
      width="100%"
      minH={"240px"}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="gray.100"
    >
      {photoSrc.map((src, index) => {
        return (
          <Image
            key={index}
            src={src}
            alt="top-image"
            width="60%"
            margin="0 20px"
          ></Image>
        );
      })}
    </Flex>
  );
};
