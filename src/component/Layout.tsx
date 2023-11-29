import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useRoutes } from "react-router-dom";

interface Prop {
  children: ReactNode;
}
const Layout = ({ children }: Prop) => {
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto" }}>
      <Box sx={{ mt: 5 }}>
        <Box
          sx={{
            bgcolor: "transparent",
            height: 50,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: 100 }}>
              <Box component="img" src="bird.png" sx={{ width: "100%" }} />
            </Box>
            <Box
              sx={{ color: "info.main", display: { xs: "none", sm: "block" } }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button>
                  <Typography sx={{ color: "info.main" }}>Home</Typography>
                </Button>
              </Link>
              |
              <Link to="/birds" style={{ textDecoration: "none" }}>
                <Button>
                  <Typography sx={{ color: "info.main" }}>Birds</Typography>
                </Button>
              </Link>
            </Box>
            <Button
              onClick={() => {
                router("/birds");
              }}
              sx={{
                height: "100%",
                "&:hover": { bgcolor: "info.main", color: "primary.main" },
                display: { xs: "none", sm: "block" },
              }}
              variant="contained"
            >
              Let's fly
            </Button>
            <Box
              sx={{ p: 3, display: { xs: "block", sm: "none" } }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon sx={{ fontSize: "2rem", color: "info.main" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 10 }}>{children}</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: 100 }}>
          <Box component="img" src="bird.png" sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ color: "info.main" }}>
          <Button
            onClick={() => {
              router("/");
            }}
          >
            <Typography sx={{ color: "info.main" }}>Home</Typography>
          </Button>{" "}
          |
          <Button
            onClick={() => {
              router("/birds");
            }}
          >
            <Typography sx={{ color: "info.main" }}>Birds</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{}}>
        <Drawer
          anchor={"top"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.main",
              width: "100%",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                color: "info.main",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
              }}
            >
              <Button
                onClick={() => {
                  router("/");
                }}
              >
                <Typography sx={{ color: "info.main" }}>Home</Typography>
              </Button>
              <Button
                onClick={() => {
                  router("/birds");
                }}
              >
                <Typography sx={{ color: "info.main" }}>Birds</Typography>
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Layout;
