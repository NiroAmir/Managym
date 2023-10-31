import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { number, string } from "prop-types";

export default function WorkoutBody({
  title,
  phone,
  bodyWeight,
  exercise,
  date,
}) {
  const fixDate = useCallback((date) => {
    const newDate = new Date(date);

    return `${newDate.getDate()} / ${newDate.getMonth()} / ${newDate.getFullYear()}  \u00a0\u00a0   ${newDate.getHours()} : ${
      newDate.getMinutes() < 10
        ? "0" + newDate.getMinutes()
        : newDate.getMinutes()
    } `;
  }, []);
  return (
    <>
      <CardHeader title={title} subheader={fixDate(date)}></CardHeader>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone: </strong>
          {phone}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Body weight: </strong>
          {bodyWeight}
        </Typography>
        <Divider
          sx={{ marginTop: "10px", marginBottom: "10px" }}
          variant="middle"
        />
        {exercise?.map((ex) => (
          <Typography variant="body2" color="text.secondary" key={ex}>
            <strong>{ex}</strong>
          </Typography>
        ))}
      </CardContent>
    </>
  );
}

WorkoutBody.propType = {
  title: string.isRequired,
  phone: string.isRequired,
  workoutNumber: number.isRequired,
};
