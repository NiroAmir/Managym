import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import MoreButton from "./MoreButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();
  const [searchParams, setSearch] = useSearchParams();
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            width: "20vw",
            bgcolor: "rgba(150, 150, 150, 0.3)",
            borderRadius: "5px",
          }}
          id="input-with-icon-textfield"
          label={<SearchIcon />}
          variant="outlined"
          color="warning"
          value={searchParams.get("q") ?? ""}
          onChange={({ target }) => {
            setSearch({ q: target.value });
          }}
          onClick={() => navigate(ROUTES.WORKOUTS)}
        />
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton />
    </>
  );
}
