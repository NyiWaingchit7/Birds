import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UpperBirdCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "column", lg: "row" },
      }}
    >
      {/* bird main card */}
      <Link to={"/birds"} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            bgcolor: "secondary.light",
            "&:hover": { bgcolor: "secondary.dark" },
            m: 2,
            borderRadius: 10,
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column", lg: "row" },
              m: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: { xs: "200px", md: "250px" }, borderRadius: 10 }}
              component="img"
              src="bird2.jpg"
              alt="green iguana"
            />
            <Box sx={{ p: 3 }}>
              <Typography
                sx={{ color: "info.main", mb: 3, fontSize: "2rem" }}
                component="div"
              >
                ငှက်
              </Typography>
              <Typography sx={{ color: "info.main" }}>
                ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ နှစ်ဖက်ရှိသော
                သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။
              </Typography>
            </Box>
          </Box>
        </Card>
      </Link>
      {/* bird social card  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "secondary.light",
            "&:hover": { bgcolor: "secondary.dark" },
            width: { xs: "90%", sm: "80%", lg: "70%" },
            mx: "auto",
            height: "90%",
            borderRadius: 10,
            mt: 2,
          }}
        >
          <Link
            to="https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA"
            target="_blink"
            style={{ textDecoration: "none", marginRight: "2rem" }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box sx={{ width: "80%" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      src="wiki.png"
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "info.main", m: 1 }} variant="h5">
                      wikipedia
                    </Typography>
                    <InsertLinkIcon
                      sx={{ color: "info.main", fontSize: "2rem" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            bgcolor: "secondary.light",
            "&:hover": { bgcolor: "secondary.dark" },
            m: 2,
            p: 2,
            borderRadius: 10,
            width: { xs: "85%", sm: "100%", lg: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                minWidthwidth: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="https://web.facebook.com/profile.php?id=100064810986327&_rdc=1&_rdr"
                target="_blink"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    boxShadow: 3,
                    borderRadius: "50%",
                    mr: 5,
                    bgcolor: "secondary.dark",
                    p: 1,
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      color: "info.dark",
                      fontSize: "4rem",

                      "&:hover": {
                        color: "info.main",
                      },
                    }}
                  />
                </Box>
              </Link>
              <Link
                to="https://web.facebook.com/bin.birdsinnature?_rdc=1&_rdr"
                target="_blink"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    boxShadow: 3,
                    borderRadius: "50%",
                    bgcolor: "secondary.dark",
                    p: 1,
                  }}
                >
                  <FacebookOutlinedIcon
                    sx={{
                      color: "info.dark",
                      fontSize: "4rem",
                      "&:hover": {
                        color: "info.main",
                      },
                    }}
                  />
                </Box>
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ color: "info.main", fontSize: "1.5rem" }}>
                We can also research on this two social facebook pages.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpperBirdCard;
