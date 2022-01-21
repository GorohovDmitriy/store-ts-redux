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
import "./Navbar.scss";

const Navbar: FC = () => {
  const classes = useStyles();
  const pages: Array<string> = ["Mac", "iPhone", "AirPods"];

  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="navbar__logo"
          >
            <Link to="/">
              <GlobalSvg id="logo" />
            </Link>
          </Typography>
          <Box className="navbar__list">
            <Typography
              variant="caption"
              component="div"
              className={classes.textAlign}
            >
              <Link to="/">
                <ArrowBackIcon color="secondary" />
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
              <Fab size="small" color="primary">
                <AddShoppingCartIcon />
              </Fab>
            </Link>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="navbar__list-logo"
          >
            <GlobalSvg id="logo" />
          </Typography>
          <Box className="navbar__list-page">
            {pages.map((page) => (
              <MenuItem key={page} className={classes.menuItem}>
                {page}
              </MenuItem>
            ))}
          </Box>
          <Box className="navbar__cart">
            <Typography
              variant="h6"
              component="div"
              className={classes.textAlign}
            >
              1200$
            </Typography>
            <Tooltip title="Open settings">
              <Link to="/cart">
                <Fab size="small" color="primary">
                  <AddShoppingCartIcon color="secondary" />
                </Fab>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
