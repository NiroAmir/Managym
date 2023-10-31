import { Box, Button } from "@mui/material";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function CreateWorkoutButton() {
  const { user } = useUser();
  return (
    (user?.isAdmin || user?.isTrainee) && (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2vh" }}>
        <Link to={ROUTES.CREATE_WORKOUT}>
          <Button variant="contained" color="success">
            <AddIcon sx={{ marginRight: "7px" }} /> Create New Workout
          </Button>
        </Link>
      </Box>
    )
  );
}
