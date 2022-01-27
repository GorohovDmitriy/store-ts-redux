import React, { FC } from "react";
import {
  AppBar,
  Badge,
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
import { IPages } from "../../models/IProduct";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GlobalSvg } from "../../assets/svg";
import { useStyles } from "../../utils/useStyles";
import { pages } from "../../utils/pages";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import "./Navbar.scss";

const Navbar: FC = React.memo(() => {
  const classes = useStyles();
  const product = useSelector((state: RootState) => state.cart.productInCart);
  const totalPrice = calcTotalPrice(product);

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
            {pages.map((page: IPages) => (
              <MenuItem key={page.name}>
                <Typography variant="caption" textAlign="center">
                  <Link to={`/${page.path}`}>
                    <Typography className={classes.pageName}>
                      {page.name}
                    </Typography>
                  </Link>
                </Typography>
              </MenuItem>
            ))}
            {totalPrice > 0 ? (
              <Typography
                variant="caption"
                component="div"
                className={classes.textAlign}
              >
                {totalPrice} BYN
              </Typography>
            ) : null}
            <Link to="/cart">
              <Fab size="small" color="primary">
                <Badge color="error" badgeContent={product.length}>
                  <AddShoppingCartIcon />
                </Badge>
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
            {pages.map((page: IPages) => (
              <MenuItem key={page.name} className={classes.menuItem}>
                <Link to={`/${page.path}`}>
                  <Typography className={classes.pageName}>
                    {page.name}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Box className="navbar__cart">
            {totalPrice > 0 ? (
              <Typography
                variant="caption"
                component="div"
                className={classes.textAlign}
              >
                {totalPrice} BYN
              </Typography>
            ) : null}
            <Tooltip title="Open settings">
              <Link to="/cart">
                <Fab size="small" color="primary">
                  <Badge color="error" badgeContent={product.length}>
                    <AddShoppingCartIcon />
                  </Badge>
                </Fab>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
