import React, { ReactElement } from "react";
import { Flex, Text } from "theme-ui";
// import "../../global.css";

export default function IndexPage(): ReactElement {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "#E8F9FD",
        width: "100%",
        height: "100%",
        fontFamily: "Roboto",
      }}
    >
      <Flex sx={{ flexDirection: "row" }}>
        <Text>Resume</Text>
        <Text>Projects</Text>
        <Text>Work Experience</Text>
      </Flex>
      <Text>Jacob Bodera</Text>
    </Flex>
  );
}
