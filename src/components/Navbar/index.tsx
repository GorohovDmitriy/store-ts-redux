import React, { FC } from "react";
import {
  AppBar,
  Box,
  Container,
  Fab,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { GlobalSvg } from "../../assets/svg";
import { useStyles } from "../../utils/useStyles";
import './Navbar.scss'

const Navbar: FC = () => {
  const classes = useStyles();
  const pages: Array<string> = ["Mac", "iPhone", "AirPods"];

  return (
    <AppBar sx={{ backgroundColor: "#231f20" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <GlobalSvg id="logo" />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="caption"
              component="div"
              className={classes.textAlign}
            >
              <Link to="/">
                <ArrowBackIcon sx={{ color: "white" }} />
              </Link>
            </Typography>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography variant="caption" textAlign="center">
                  {page}
                </Typography>
              </MenuItem>
            ))}
            <Typography
              variant="h6"
              component="div"
              className={classes.textAlign}
            >
              1200$
            </Typography>
            <Link to="/cart">
              <Fab size="small" sx={{ backgroundColor: "black" }}>
                <AddShoppingCartIcon sx={{ color: "white" }} />
              </Fab>
            </Link>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <GlobalSvg id="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex", mr: 1 } }}>
            <Typography
              variant="h6"
              component="div"
              className={classes.textAlign}
            >
              1200$
            </Typography>
            <Tooltip title="Open settings">
              <Link to="/cart">
                <Fab size="small" sx={{ backgroundColor: "black" }}>
                  <AddShoppingCartIcon sx={{ color: "white" }} />
                </Fab>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Navbar };
