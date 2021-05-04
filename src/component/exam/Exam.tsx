import {
  Progress,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { ChoicesView } from "./ChoicesView";

export const Exam = (): JSX.Element => {
  return (
    <>
      <Progress value={80} colorScheme="gray" />
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
      <p>exam</p>
      <ChoicesView />
    </>
  );
};
