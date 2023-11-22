import MainPage from "../../pages/MainPage";
import Create from "../Create/Create";
import Read from "../Read/Read";

export const items = [
  {
    title: "Головна сторінка",
    path: "/main",
    content: <MainPage />,
  },
  {
    title: "Каталог",
    path: "/catalog",
    content: <Read />,
  },
  {
    title: "Додати авто",
    path: "/create",
    content: <Create />,
  },
];
