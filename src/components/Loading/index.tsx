import { LoadingOverlay } from "@mantine/core";
import React from "react";

interface LoadingProps {
  isLoading?: boolean;
}

const Loading = (props: LoadingProps) => {
  return (
    <LoadingOverlay
      visible={props.isLoading}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
};

export default Loading;
