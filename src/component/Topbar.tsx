import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const TopBar = ({ setOpen, open }: Props) => {
  const router = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        height: 50,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: { xs: 70, sm: 100 } }}>
          <Box component="img" src="../bird.png" sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            color: "info.main",
            display: { xs: open ? "block" : "none", sm: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", display: "block" }}>
              <Button>
                <Typography sx={{ color: "info.main" }}>Home</Typography>
              </Button>
            </Link>
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>
              |
            </Typography>
            <Link
              to="/birds"
              style={{ textDecoration: "none", display: "block" }}
            >
              <Button>
                <Typography sx={{ color: "info.main" }}>Birds</Typography>
              </Button>
            </Link>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            p: 3,
            display: { xs: "block", sm: "none" },
            alignSelf: "flex-end",
          }}
          onClick={() => {
            const value = open ? false : true;
            setOpen(value);
          }}
        >
          {open ? (
            <ClearIcon sx={{ fontSize: "2rem", color: "info.main" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "2rem", color: "info.main" }} />
          )}
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
      </Box>
    </Box>
  );
};
export default TopBar;
