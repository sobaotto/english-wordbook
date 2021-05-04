import { useRadio, Box, VStack, useRadioGroup } from "@chakra-ui/react";

const ChoicesView = (): JSX.Element => {
  // 1. Create a component that consumes the `useRadio` hook
  function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  function Choices() {
    const options = ["react", "vue", "svelte"];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      defaultValue: "react",
      onChange: console.log,
    });

    const group = getRootProps();
    // console.log(group);

    return (
      <VStack
        {...group}
        spacing={1}
        // align="center"
        width="auto"
        height="auto"
        display="flex"
        justify="center"
      >
        {options.map((value) => {
          const radio = getRadioProps({ value });
          console.log(radio);

          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </VStack>
    );
  }

  return <Choices />;
};

export { ChoicesView };
