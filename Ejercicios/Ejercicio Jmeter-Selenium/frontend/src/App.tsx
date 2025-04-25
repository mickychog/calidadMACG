import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { PersonaForm } from "./components/PersonaForm";
import PersonaTable from "./components/PersonaTable";

function App() {
  const [refreshTable, setRefreshTable] = useState(false);

  const handleSuccess = () => {
    setRefreshTable((prev) => !prev);
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ mt: 3, mb: 2 }}
      >
        Sistema de Registro de Personas
      </Typography>

      <PersonaForm onSuccess={handleSuccess} />

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Personas Registradas
      </Typography>
      <PersonaTable key={refreshTable.toString()} />
    </Container>
  );
}

export default App;
