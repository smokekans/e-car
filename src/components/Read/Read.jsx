import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { deleteCar, getCar, getCars } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Read() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const fetchCars = async (page, rowsPerPage) => {
    try {
      const response = await getCars(page + 1, rowsPerPage);
      setData(response.data);
      setTotalCount(response.totalCars);
    } catch (error) {
      toast(`Error: ${error.message}`);
    }
  };

  const handleUpdate = async (carId) => {
    try {
      navigate(`/create`, { state: { data: await getCar(carId) } });
    } catch (error) {
      toast(`Error: ${error.message}`);
    }
  };

  const handleDelete = async (carId) => {
    try {
      await deleteCar(carId);
      toast(`Авто видалена`);
      await fetchCars(page, rowsPerPage);
    } catch (error) {
      toast(`Error: ${error.message}`);
    }
  };

  const onPageChange = useCallback((e, value) => {
    setPage(value);
  }, []);

  const onRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  }, []);

  useEffect(() => {
    fetchCars(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const paginatedData = data?.slice(
    (page - totalCount) * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Ваші авто</Typography>
            </Stack>
          </Stack>

          <Card>
            <Box sx={{ minWidth: 800 }}>
              <Table>
                <TableHead sx={{ bgcolor: "whitesmoke" }}>
                  <TableRow>
                    <TableCell>Бренд</TableCell>
                    <TableCell>Модель</TableCell>
                    <TableCell>Колір</TableCell>
                    <TableCell>Рік</TableCell>
                    <TableCell>Змінити/Видалити</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData?.map((item) => {
                    return (
                      <TableRow hover key={item.id}>
                        <TableCell>
                          <Stack aligndata="center" direction="row" spacing={2}>
                            <Typography variant="subtitle2">
                              {item.brand}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>{item.model}</TableCell>
                        <TableCell>{item.color}</TableCell>
                        <TableCell>{item.year}</TableCell>
                        <TableCell width={150}>
                          <Button onClick={() => handleUpdate(item.id)}>
                            Змінити
                          </Button>
                          <Button
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            Видалити
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
            <TablePagination
              component="div"
              count={totalCount}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
              labelRowsPerPage="Рядків на сторінці"
              labelDisplayedRows={({ from, to, count }) =>
                `Показано з ${from} до ${to} із ${count}`
              }
              nextIconButtonText="Наступна сторінка"
              backIconButtonText="Попередня сторінка"
            />
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
