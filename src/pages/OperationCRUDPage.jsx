import { useLocation } from "react-router-dom";
import { items } from "../components/Dashboard/config";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OperationCRUDPage() {
  const location = useLocation();
  const currentItem = items.find((item) => item.path === location.pathname);

  return (
    <Box>
      {currentItem.content}
      <ToastContainer />
    </Box>
  );
}
