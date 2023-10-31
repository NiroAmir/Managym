import { Box, CardActions, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import WorkoutDeleteDialog from "./WorkoutDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useWorkouts from "../../hooks/useWorkouts";

export default function WorkoutActionBar({
  handleDelete,
  handleLike,
  id,
  user_id,
  workoutLikes,
}) {
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setLiked] = useState(() => workoutLikes?.includes(user?.id));
  const navigate = useNavigate();

  const handleDeleteWorkout = () => {
    handleDelete(id);
    setDialog(false);
  };

  const onLike = async () => {
    setLiked((prev) => !prev);

    await handleLike(id);
  };

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin ? (
            <>
              <IconButton
                aria-label="Delete Workout"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Workout"
                onClick={() => navigate(`${ROUTES.EDIT_WORKOUT}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          {user && (
            <IconButton aria-label="Add to favorite" onClick={() => onLike()}>
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <WorkoutDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteWorkout}
      />
    </>
  );
}

WorkoutActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
};
