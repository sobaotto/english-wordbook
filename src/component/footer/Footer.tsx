import { Box, Stack } from "@chakra-ui/react";
import { Copyright } from "./Copyright";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { FooterNav } from "./FooterNav";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    w="100%"
    py={{ base: "0", md: "12" }}
    px={{ base: "4", md: "8" }}
    position={{ base: "fixed", md: "static" }}
    bottom={{ base: "0", md: "auto" }}
    backgroundColor={"white"}
    borderTop={1}
    borderStyle={"solid"}
    borderColor={"gray.200"}
    padding="0"
  >
    <Stack display={{ base: "none", md: "inline" }}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
    <Box display={{ base: "inline", md: "none" }}>
      <FooterNav />
    </Box>
  </Box>
);
