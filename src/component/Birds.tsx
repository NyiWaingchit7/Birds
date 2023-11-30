import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { birds } from "../utils/birdsData";
import { Link } from "react-router-dom";
const Birds = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StarIcon sx={{ fontSize: "2.5rem", color: "info.dark" }} />
        <Typography
          sx={{ textAlign: "center", mx: 3, color: "info.main" }}
          variant="h3"
        >
          Birds
        </Typography>{" "}
        <StarIcon sx={{ fontSize: "2.5rem", color: "info.dark" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1100px",
          maxHeight: { sm: "700vh", md: "500vh", lg: "300vh", xl: "200vh" },
          mx: "auto",
          mt: 5,
        }}
      >
        {birds.map((b) => {
          return (
            <Box
              key={b.Id}
              sx={{
                width: { xs: "60%", sm: "25% ", md: "25%", lg: "15%" },
                mr: 10,
              }}
            >
              <Link
                to={`/birds/${String(b.Id)}`}
                style={{ textDecoration: "none", margin: "0 auto" }}
              >
                <Card
                  sx={{
                    bgcolor: "secondary.light",
                    "&:hover": { bgcolor: "secondary.dark" },
                    m: 2,
                    borderRadius: 10,
                    p: 3,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ mx: "auto" }}>
                      <Box
                        sx={{
                          maxWidth: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: 10,
                          }}
                          src={b.ImagePath}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ mt: 3 }}>
                          <Typography sx={{ color: "info.dark", m: 1 }}>
                            {b.BirdEnglishName}
                          </Typography>
                          <Typography
                            sx={{ color: "info.light", m: 1 }}
                            variant="h6"
                          >
                            {b.BirdMyanmarName}
                          </Typography>
                        </Box>
                        <StarIcon
                          sx={{ fontSize: "2.5rem", color: "info.main" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Birds;
