import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function LogoIcon() {
  return (
    <>
      <NavBarLink to={ROUTES.HOME}>
        <IconButton>
          <Avatar
            src="https://www.crunch.com.au/wp-content/uploads/goals_icon_q1.png"
            alt="ManaGym icon"
          ></Avatar>
        </IconButton>
      </NavBarLink>
    </>
  );
}
