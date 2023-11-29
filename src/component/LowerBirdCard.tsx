import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
import { card } from "../utils/cardData";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LowerBirdCard = () => {
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.light",
          m: 2,
          borderRadius: 10,
          width: { xs: "80%", lg: "60%" },
          p: 1,
        }}
      >
        {card.map((c) => {
          return (
            <Box
              key={c.id}
              sx={{
                boxShadow: 3,
                bgcolor: "primary.light",
                "&:hover": { bgcolor: "primary.dark" },

                width: { xs: "100%", sm: "10%", md: "15%", lg: "15%" },
                m: 2,
                p: 2,
                borderRadius: 5,
                color: "info.light",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ mb: 3, fontSize: { xs: "1rem", lg: "2.5rem" } }}
              >
                {c.count}
              </Typography>
              <Typography> {c.name}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          width: { xs: "80%", md: "20%", lg: "30%" },
          bgcolor: "primary.light",
          "&:hover": { bgcolor: "primary.dark" },
          borderRadius: 10,
          mx: 3,
          p: 2,
        }}
      >
        <Link to="/birds" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              p: 1,
            }}
          >
            <Typography
              sx={{
                color: "info.light",
                fontSize: { xs: "2.3rem", lg: "3rem" },
              }}
            >
              Let's explore together
            </Typography>
            <ExitToAppIcon sx={{ fontSize: "2rem", color: "info.main" }} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default LowerBirdCard;
