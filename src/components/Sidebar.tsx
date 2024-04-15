import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import logo from "../assets/logo.png";
import menu from "../assets/sidebar-icons/menu.png";
import tv from "../assets/sidebar-icons/tv.png";
import bookmark from "../assets/sidebar-icons/bookmark.png";
import notepad from "../assets/sidebar-icons/notepad.png";
import time from "../assets/sidebar-icons/time.png";
import emptyTruck from "../assets/sidebar-icons/empty-truck.png";
import fullTruck from "../assets/sidebar-icons/filled-truck.png";
import bag from "../assets/sidebar-icons/bag.png";
import wallet from "../assets/sidebar-icons/wallet.png";
import windows from "../assets/sidebar-icons/windows.png";
import settings from "../assets/sidebar-icons/settings.png";
import Dashboard from "./Dashboard/Dashboard";

const sidebarIcons = [
  { id: 1, name: "menu", img: menu },
  { id: 2, name: "tv", img: tv },
  { id: 3, name: "bookmark", img: bookmark },
  { id: 4, name: "notepad", img: notepad },
  { id: 5, name: "time", img: time },
  { id: 6, name: "emptyTruck", img: emptyTruck },
  { id: 7, name: "fullTruck", img: fullTruck },
  { id: 8, name: "bag", img: bag },
  { id: 9, name: "wallet", img: wallet },
  { id: 10, name: "windows", img: windows },
  { id: 11, name: "settings", img: settings },
  // Add more icons here if needed
];

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}></AppBar>
      <Drawer variant="permanent" open={open} sx={{ border: "none" }}>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <img src={logo} alt="" width={30} />
        </Box>

        <List sx={{ marginTop: 2 }}>
          {sidebarIcons.map((icon) => (
            <ListItem key={icon.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <img src={icon.img} alt="" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{}}>
        <Box>
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
}
