import { Box } from "@chakra-ui/react";

export const FooterBlank = (): JSX.Element => {
  return (
    <Box
      width={"100%"}
      position={"fixed"}
      bottom={"0"}
      minH={{ base: "55px", md: "166px" }}
    ></Box>
  );
};
