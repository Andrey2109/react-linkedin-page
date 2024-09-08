import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = "20%";

const Menu = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#222",
          color: "#fff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Talents Please
        </Typography>
      </Toolbar>

      <List>
        <ListItem button="true">
          <ListItemIcon>
            <DashboardIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
