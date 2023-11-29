import React from "react";
import { useParams, useRoutes } from "react-router-dom";
import { birds } from "../utils/birdsData";
import { Box, Typography } from "@mui/material";

const BirdDetails = () => {
  const id = useParams().id;
  const data = birds.find((b) => b.Id === Number(id));
  if (!data) return null;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: { xs: "center", lg: "flex-start" },
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", sm: "60%", md: "50%", lg: "30%" },
          p: 3,
          m: 5,
          bgcolor: "primary.light",
          borderRadius: 10,
        }}
      >
        <Box
          component="img"
          sx={{ width: "100%", objectFit: "contain", borderRadius: 10 }}
          src={`../${data.ImagePath}`}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "70%", lg: "50% " },
          p: 5,
          m: 5,
          bgcolor: "primary.light",
          borderRadius: 10,
        }}
      >
        <Typography sx={{ color: "info.main" }} variant="h4">
          {data.BirdMyanmarName} ( {data.BirdEnglishName})
        </Typography>
        <Typography sx={{ color: "info.main", mt: 3 }} variant="h6">
          {" "}
          {data.Description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BirdDetails;
