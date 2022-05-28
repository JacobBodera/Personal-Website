import React, { ReactElement, ReactNode } from "react";
import { Flex } from "theme-ui";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const headerLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Work Experience",
    href: "/experience",
  },
  {
    text: "Resume",
    href: "/resume",
  },
];

export default function Navbar(): ReactElement {
  const location = useLocation();
  return (
    <Flex
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        width: "100%",
        height: "10rem",
        justifyContent: "space-between",
        fontFamily: "Kanit",
        alignItems: "center",
        px: "2rem",
      }}
    >
      <Flex sx={{ fontSize: "4.8rem" }}>Jacob Bodera</Flex>
      <Flex sx={{ gap: "2rem" }}>
        {headerLinks.map((headerLink) => {
          return (
            <Flex sx={{ fontSize: "2.4rem" }}>
              <Link
                to={`${headerLink.href}`}
                sx={{
                  textDecoration: "none",
                  color: location.pathname.endsWith(headerLink.href)
                    ? "black"
                    : "rgba(0, 0, 0, 0.5)",
                }}
              >
                {headerLink.text}
              </Link>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
