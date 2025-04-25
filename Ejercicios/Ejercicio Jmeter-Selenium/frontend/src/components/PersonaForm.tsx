import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, MenuItem, Typography } from "@mui/material";
import { createPersona } from "../services/api";
import { useEffect } from "react";

interface PersonaFormData {
  carnet: string;
  nombres: string;
  apellidos: string;
  sexo: string;
  fechaNacimiento: string | Date;
  profesion: string;
  celular: string;
  direccion: string;
}

export const PersonaForm: React.FC<{ onSuccess: () => void }> = ({
  onSuccess,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonaFormData>();

  const onSubmit = async (data: PersonaFormData) => {
    console.log("🟢 Submitting datos:", data);
    try {
      await createPersona(data);
      reset();
      onSuccess();
    } catch (error) {
      console.error("Error al registrar persona:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3, mb: 3 }}
    >
      <Typography variant="h6" gutterBottom>
        Registrar Nueva Persona
      </Typography>

      <TextField
        label="Carnet"
        fullWidth
        margin="normal"
        {...register("carnet", { required: "Carnet es requerido" })}
        error={!!errors.carnet}
        helperText={errors.carnet?.message}
      />

      <TextField
        label="Nombres"
        fullWidth
        margin="normal"
        {...register("nombres", { required: "Nombres son requeridos" })}
        error={!!errors.nombres}
        helperText={errors.nombres?.message}
      />

      <TextField
        label="Apellidos"
        fullWidth
        margin="normal"
        {...register("apellidos", { required: "Apellidos son requeridos" })}
        error={!!errors.apellidos}
        helperText={errors.apellidos?.message}
      />

      <TextField
        label="Sexo"
        fullWidth
        margin="normal"
        select
        defaultValue=""
        {...register("sexo", { required: "Sexo es requerido" })}
        error={!!errors.sexo}
        helperText={errors.sexo?.message}
      >
        <MenuItem value="M">Masculino</MenuItem>
        <MenuItem value="F">Femenino</MenuItem>
        <MenuItem value="O">Otro</MenuItem>
      </TextField>

      <TextField
        label="Fecha de Nacimiento"
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
        {...register("fechaNacimiento", {
          required: "Fecha de nacimiento es requerida",
        })}
        error={!!errors.fechaNacimiento}
        helperText={errors.fechaNacimiento?.message}
      />

      <TextField
        label="Profesión"
        fullWidth
        margin="normal"
        {...register("profesion", { required: "Profesión es requerida" })}
        error={!!errors.profesion}
        helperText={errors.profesion?.message}
      />

      <TextField
        label="Celular"
        fullWidth
        margin="normal"
        {...register("celular", { required: "Celular es requerido" })}
        error={!!errors.celular}
        helperText={errors.celular?.message}
      />

      <TextField
        label="Dirección"
        fullWidth
        margin="normal"
        multiline
        rows={2}
        {...register("direccion", { required: "Dirección es requerida" })}
        error={!!errors.direccion}
        helperText={errors.direccion?.message}
      />

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Registrar
      </Button>
    </Box>
  );
  
}
;
