import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { Flex, Text } from "theme-ui";

export default function Footer(): ReactElement {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "15rem",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        fontFamily: "Kanit",
        fontSize: "1.8rem",
        color: "white",
      }}
    >
      <Flex sx={{ flexDirection: "column" }}>
        <Text>jbodera@uwaterloo.ca</Text>

        <Text></Text>
      </Flex>
    </Flex>
  );
}
