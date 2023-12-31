import React from "react";
import NavBarLogo from "../../Assets/images/NavBarLogo.png";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import HomeRounded from "@mui/icons-material/HomeRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ChatRounded from "@mui/icons-material/ChatRounded";
import MenuIcon from "@mui/icons-material/Menu";

//Styles
const useStyles = makeStyles((theme) => ({
  ToolBar: {
    backgroundColor: "#101331",
    display: "flex",
    justifyContent: "space-between",
  },
  Logo: {
    width: 60,
  },
  Icons: {
    display: "flex",
    alignItems: "center",
  },
  Badge: {
    marginRight: "20px",
    color: "white",
  },
  NavLink: {
    textDecoration: "none",
    color: "white",
  },
  SettingLink: {
    textDecoration: "none",
    color: "black",
  },
  MenuIcons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 60,
    marginLeft: 30,
    marginTop: 2,
    width: "100%",
  },
  MenuMobileIcons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 10,
    marginLeft: 30,
    marginTop: "5px",
    width: "100%",
  },
  ColorMobileicons: {
    color: "white",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.NavBar}>
      <Toolbar className={classes.ToolBar}>
        {/* MOBILE MENU */}
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div className={classes.MenuMobileIcons}>
            <NavLink to="/" className={classes.NavLink}>
              <IconButton color="primary">
                <HomeRounded
                  fontSize="medium"
                  className={classes.ColorMobileicons}
                />
              </IconButton>
            </NavLink>
            <NavLink to="/portfolio" className={classes.NavLink}>
              <IconButton color="primary" sx={{ marginBottom: "4px," }}>
                <BusinessCenterRoundedIcon
                  fontSize="medium"
                  className={classes.ColorMobileicons}
                />
              </IconButton>
            </NavLink>
            <NavLink to="/blog" className={classes.NavLink}>
              <IconButton color="primary">
                <ChatRounded
                  fontSize="medium"
                  className={classes.ColorMobileicons}
                />
              </IconButton>
            </NavLink>
            <NavLink to="/" className={classes.ColorMobileicons}>
              <IconButton color="primary">
                <Badge
                  color="secondary"
                  badgeContent={0}
                  showZero
                  className={classes.Badge}
                >
                  <MailIcon />
                </Badge>
              </IconButton>
            </NavLink>
            <IconButton color="primary">
              <MenuIcon
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={classes.Badge}
              />
            </IconButton>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          ></Menu>
        </Box>
        {/* DESKTOP MENU */}
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <img
            src={NavBarLogo}
            alt="Logo Code Dragi"
            className={classes.Logo}
          />
          <div>
            <Button>
              <NavLink to="/" className={classes.NavLink}>
                Acceuil
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/portfolio" className={classes.NavLink}>
                Portfolio
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/blog" className={classes.NavLink}>
                Blog
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/contact" className={classes.NavLink}>
                Contact
              </NavLink>
            </Button>
          </div>
          <div className={classes.Icons}>
            <IconButton color="primary">
              <Badge
                color="secondary"
                badgeContent={0}
                showZero
                className={classes.Badge}
              >
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="setting">
              <SettingsIcon
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={classes.Badge}
              />
            </IconButton>
            <Avatar
              alt=" test"
              src={NavBarLogo}
              sx={{ width: 40, height: 40, border: "2px solid #EC3BFF" }}
              className="test"
            />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/profil" className={classes.SettingLink}>
                <Avatar
                  sx={{
                    marginRight: 1,
                    width: 40,
                    height: 40,
                    border: "2px solid #EC3BFF",
                  }}
                  alt=" test"
                  src={NavBarLogo}
                ></Avatar>
              </NavLink>
              CODE DRAGI
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <NavLink to="/contact" className={classes.SettingLink}>
                Contact
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/setting" className={classes.SettingLink}>
                Paramètres
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/dashboard" className={classes.SettingLink}>
                Admin Dashboard
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/login" className={classes.SettingLink}>
                Connexion
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/logout" className={classes.SettingLink}>
                Deconnexion
              </NavLink>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
