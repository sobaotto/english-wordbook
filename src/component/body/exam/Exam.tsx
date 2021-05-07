import { Flex, Box } from "@chakra-ui/react";
import { Choices } from "./Choices";
import { HeaderBlank } from "../../blankbox/HeaderBlank";
import { FooterBlank } from "../../blankbox/FooterBlank";
import { ProgressBar } from "./ProgressBar";
import { PhotosOfWord } from "./PhotosOfWord";

export const Exam = (): JSX.Element => {
  return (
    <Flex flexDirection="column" margin="0 auto">
      <HeaderBlank />
      <Flex
        flexDirection="column"
        width={{ base: "100%", md: "80%" }}
        margin="0 auto"
      >
        <ProgressBar />
        <PhotosOfWord />
        <Choices />
      </Flex>
      <FooterBlank />
    </Flex>
  );
};
