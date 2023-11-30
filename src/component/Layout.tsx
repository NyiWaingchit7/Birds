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

import { Link, useNavigate, useRoutes } from "react-router-dom";
import TopBar from "./Topbar";

interface Prop {
  children: ReactNode;
}
const Layout = ({ children }: Prop) => {
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto" }}>
      <Box sx={{ mt: 5 }}>
        <TopBar setOpen={setOpen} open={open} />
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
          <Box component="img" src="../bird.png" sx={{ width: "100%" }} />
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
      <Box sx={{ width: "100%" }}>
        <Drawer
          disableScrollLock={true}
          sx={{ width: "100%" }}
          anchor={"top"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          ModalProps={{
            style: {
              backgroundColor: "primary.main",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.main",
              width: "100%",
              height: "150px",
            }}
          >
            <Box
              sx={{
                color: "info.main",
                mt: 5,
              }}
            >
              <TopBar setOpen={setOpen} open={open} />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Layout;
