import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import OperationCRUDPage from "./pages/OperationCRUDPage";
import SharedLayout from "./components/Dashboard/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="" element={<MainPage />} />
        <Route path=":operationCRUD" element={<OperationCRUDPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
