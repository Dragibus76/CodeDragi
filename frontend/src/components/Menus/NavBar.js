import React from "react";
import NavBarLogo from "../../Assets/images/NavBarLogo.png"
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

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
  },
  NavLink: {
    textDecoration: "none",
    color: "white",
  },
  SettingLink: {
    textDecoration: "none",
    color: "black",
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
      <Toolbar
        className={classes.ToolBar}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <img src={NavBarLogo} alt="Logo Code Dragi" className={classes.Logo} />
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
          <Badge
            color="secondary"
            badgeContent={0}
            showZero
            className={classes.Badge}
          >
            <MailIcon />
          </Badge>
          <Badge>
            <SettingsIcon
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={classes.Badge}
            />
          </Badge>
          <Avatar alt=" test" src={NavBarLogo} sx={{ width: 40, height: 40 , border: "2px solid #EC3BFF"}} />
        </div>
        {/* Settings */}
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
              Profil
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
