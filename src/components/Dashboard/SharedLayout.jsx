import { items } from "./config";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function SharedLayout() {
  const location = useLocation();
  const currentItem = items.find((item) => item.path === location.pathname);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - 140px)` },
            ml: { sm: `240px` },
          }}
        >
          <Toolbar>
            {currentItem && (
              <Typography variant="h6" noWrap component="div">
                {currentItem.title}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: "140px",
            "& .MuiDrawer-paper": {
              width: "140px",
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              my: "auto",
            }}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{
                  width: "100%",
                  textDecoration: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box component="main" sx={{ ml: "140px", mt: "70px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
