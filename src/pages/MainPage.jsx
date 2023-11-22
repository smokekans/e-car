import { Box, Typography } from "@mui/material";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>Вітаємо Вас на веб сайті "E-CAR"</Typography>
      <Typography>
        Тут ви зможете переглянути, додати, редагувати або видалити ваші авто
      </Typography>
      <Box sx={{ dispay: "flex", m: 5 }}>
        <Link
          to={"/catalog"}
          style={{
            color: "black",
            width: "100%",
            textDecoration: "none",
            cursor: "pointer",
            textTransform: "uppercase",
            marginRight: "55px",
          }}
        >
          Ваш каталог
        </Link>
        <Link
          to={"/create"}
          style={{
            color: "black",

            width: "100%",
            textDecoration: "none",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Додати авто
        </Link>
      </Box>
      <Box
        component="img"
        alt="logo"
        src={logo}
        sx={{ width: 1, height: "auto" }}
      />
    </Box>
  );
}
