import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useTrainees from "../hooks/useTrainees.js";
import TraineesFeedback from "../components/TraineesFeedback.jsx";
import CreateTraineeButton from "../components/CreateTraineeButton.jsx";

export default function TraineePage() {
  const {
    isLoading,
    error,
    handleGetTrainees,
    handleDeleteTrainee,
    filteredTrainees,
  } = useTrainees();

  useEffect(() => {
    handleGetTrainees();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteTrainee(id);
    handleGetTrainees();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Trainees"
          subtitle="On this page you can find all your Trainees and add new"
        />
        <TraineesFeedback
          isLoading={isLoading}
          error={error}
          trainees={filteredTrainees}
          handleDelete={handleDelete}
        />
      </Container>
      <CreateTraineeButton />
    </div>
  );
}
