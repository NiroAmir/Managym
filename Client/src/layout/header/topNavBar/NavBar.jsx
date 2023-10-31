import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";

export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar sx={{ bgcolor: "chocolate" }} position="sticky" elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
