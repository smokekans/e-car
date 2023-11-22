import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { createCar, updateCar } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Create() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;

  const [brand, setBrand] = useState(data?.brand);
  const [model, setModel] = useState(data?.model);
  const [color, setColor] = useState(data?.color);
  const [year, setYear] = useState(data?.year);

  const handleSubmitCreate = async (e) => {
    e.preventDefault();

    try {
      await createCar({ brand, model, color, year });
      toast("Авто успішно додана!");
      navigate("/catalog");
    } catch (error) {
      toast(`Error: ${error.message}`);
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateCar({
        id: data.id,
        brand,
        model,
        color,
        year,
      });
      toast("Авто успішно оновлена!");
      navigate("/catalog");
    } catch (error) {
      toast(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={data ? handleSubmitUpdate : handleSubmitCreate}
      sx={{
        p: "24px",
        textAlign: "center",
      }}
    >
      <TextField
        margin="normal"
        fullWidth
        size="small"
        id="brand"
        label="Бренд"
        name="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        size="small"
        name="model"
        label="Модель"
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        size="small"
        name="color"
        label="Колір"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        autoComplete="color"
      />
      <TextField
        margin="normal"
        fullWidth
        size="small"
        name="year"
        label="Рік"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        autoComplete="year"
      />
      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Готово
      </Button>
    </Box>
  );
}
