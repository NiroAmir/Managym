import { CardMedia } from "@mui/material";
import React from "react";

import imageType from "../../models/types/imageType";

export default function WorkoutHead({ image }) {
  return (
    <CardMedia component="img" height="140" image={image.url} alt={image.alt} />
  );
}

WorkoutHead.propType = {
  image: imageType.isRequired,
};
