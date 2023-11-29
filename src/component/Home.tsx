import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  CardHeader,
  CardActions,
} from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import UpperBirdCard from "./UpperBirdCard";
import LowerBirdCard from "./LowerBirdCard";

const Home = () => {
  return (
    <Box>
      <UpperBirdCard />
      <LowerBirdCard />
    </Box>
  );
};

export default Home;
