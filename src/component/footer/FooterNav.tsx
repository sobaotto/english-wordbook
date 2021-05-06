import { ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { MOBILE_BASE_UI } from "../../const";
import { Flex } from "@chakra-ui/react";

export const FooterNav = (props: ButtonGroupProps) => {
  return (
    <Flex
      justifyContent="space-around"
      color="gray.600"
      minH={MOBILE_BASE_UI.FOOTER_MIN_HEIGHT}
      alignItems="center"
    >
      <IconButton
        as="a"
        href="#"
        aria-label="AiOutlineBook"
        icon={<AiOutlineBook fontSize="30px" />}
        backgroundColor="white"
        width={100 / MOBILE_BASE_UI.FOOTER_NAV_ITEM_NUMBER + "%"}
        minH={MOBILE_BASE_UI.FOOTER_MIN_HEIGHT}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="BsPencilSquare"
        icon={<BsPencilSquare fontSize="30px" />}
        backgroundColor="white"
        width={100 / MOBILE_BASE_UI.FOOTER_NAV_ITEM_NUMBER + "%"}
        minH={MOBILE_BASE_UI.FOOTER_MIN_HEIGHT}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="AiOutlineUser"
        icon={<AiOutlineUser fontSize="30px" />}
        backgroundColor="white"
        width={100 / MOBILE_BASE_UI.FOOTER_NAV_ITEM_NUMBER + "%"}
        minH={MOBILE_BASE_UI.FOOTER_MIN_HEIGHT}
      />
    </Flex>
  );
};
