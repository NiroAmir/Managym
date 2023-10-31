import { Box } from "@mui/material";
import { node } from "prop-types";
import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          backgroundColor: isDark ? "#333333" : "Skyblue",
          backgroundImage:
            "url('https://www.gentechnutrition.com/cdn/shop/files/workout_program_image_1400x.jpg?v=1629763158')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </Box>
    </>
  );
}

Main.propTypes = {
  children: node.isRequired,
};
