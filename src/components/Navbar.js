import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  titleText: {
    fontSize: "1.25rem",
    fontWeight: 900,
    textTransform: "none",
    left: "10px",
  },
  titleContainer: {
    flex: 1,
    textAlign: "left",
    paddingLeft: "16px",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [navTheme, setNavTheme] = React.useState("light");
  const { theme } = props;

  React.useEffect(() => {
    setNavTheme(window.localStorage.getItem("theme"));
    theme(window.localStorage.getItem("theme"));
  }, [theme]);

  const handleDrawerOpen = () => {
    props.toggleSidebar(true);
  };

  const handleDrawerClose = () => {
    props.toggleSidebar(false);
  };

  const handleDarkMode = () => {
    window.localStorage.setItem("theme", "dark");
    setNavTheme("dark");
    theme("dark");
  };

  const handleLightMode = () => {
    window.localStorage.setItem("theme", "light");
    setNavTheme("light");
    theme("light");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters={true}>
        <div className={classes.titleContainer}>
          <IconButton
            aria-label="open drawer"
            onClick={
              props.openSidebar === false ? handleDrawerOpen : handleDrawerClose
            }
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Tooltip title="That's me!">
            <Button
              onClick={handleDrawerClose}
              {...{
                to: "/",
                component: Link,
                className: classes.titleText,
              }}
            >
              Colin
            </Button>
          </Tooltip>
        </div>
        <Tooltip title={navTheme === "light" ? "Dark Mode" : "Light Mode"}>
          <IconButton
            className={classes.themeButton}
            aria-label="theme mode"
            onClick={navTheme === "light" ? handleDarkMode : handleLightMode}
          >
            {navTheme === "light" ? (
              <Brightness4Icon />
            ) : (
              <BrightnessHighIcon />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
