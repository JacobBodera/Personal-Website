import React, { ReactElement } from "react";
import { Flex } from "theme-ui";
import Navbar from "../components/Navbar";

export default function AboutPage(): ReactElement {
  return (
    <Flex sx={{ width: "100%" }}>
      {" "}
      <Navbar />
    </Flex>
  );
}
