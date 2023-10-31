import React, { useState } from "react";
import { func, object, string } from "prop-types";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Box, Button, TextareaAutosize, Typography } from "@mui/material";

const WorkoutForm = ({
  onSubmit,
  onReset,
  errors,
  users,
  onFormChange,
  selectedUser,
  updateSelect,
  onInputChange,
  data,
  title,
  setData,
  prevExercise,
}) => {
  const [show, setShow] = useState(false);
  const [addExercise, setAddExercise] = useState("");
  const addTextFiled = () => {
    setShow((prev) => !prev);
    setAddExercise("");
  };
  const saveExercise = () => {
    if (addExercise !== "") {
      setData((prev) => {
        return {
          ...prev,
          ["exercise"]: [...prev?.exercise, "- " + addExercise],
        };
      });
    }
  };
  const deleteExercise = (ex) => {
    const updatedExercise = data?.exercise?.filter(
      (exercise) => exercise !== ex
    );
    setData((prev) => {
      return {
        ...prev,
        ["exercise"]: [...updatedExercise],
      };
    });
  };
  console.log(data);
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      onChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
    >
      <select value={selectedUser} onChange={updateSelect} sm={6}>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="bodyWeight"
        label="body Weight"
        error={errors.bodyWeight}
        onChange={onInputChange}
        data={data}
        sm={6}
      />

      <Button variant="outlined" color="primary" onClick={addTextFiled}>
        Add exercise
      </Button>
      <Box sx={{ width: "100%" }}>
        {data?.exercise?.map((ex) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" color="initial">
              {ex}
            </Typography>
            <Button
              color="error"
              onClick={() => {
                deleteExercise(ex);
              }}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Box>
      <Box style={{ display: show ? "flex" : "none" }}>
        <TextareaAutosize
          style={{ height: "36px", width: "70%", fontSize: "1.5rem" }}
          value={addExercise}
          onChange={(e) => setAddExercise(e.target.value)}
        ></TextareaAutosize>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            saveExercise();
            addTextFiled();
          }}
        >
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={addTextFiled}>
          Close
        </Button>
      </Box>
    </Form>
  );
};

WorkoutForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  onInputChange: func.isRequired,
  data: object.isRequired,
  title: string.isRequired,
};

export default React.memo(WorkoutForm);
