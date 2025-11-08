"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#000" }}>
        MUJTAMA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.path}
                sx={{
                  textAlign: "center",
                  color: isActive ? "#5a3d8b" : "#000",
                  fontWeight: isActive ? 600 : 400,
                  backgroundColor: isActive ? "#f2eaff" : "transparent",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: "#faf6ff",
          boxShadow: "none",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000",
              fontWeight: 600,
              letterSpacing: 0.5,
              display: { xs: "none", sm: "block" },
            }}
          >
            MUJTAMA
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: isActive ? "#5a3d8b" : "#000",
                    fontWeight: isActive ? 600 : 400,
                    textTransform: "none",
                    borderBottom: isActive
                      ? "2px solid #5a3d8b"
                      : "2px solid transparent",
                    borderRadius: 0,
                    mx: 1,
                    "&:hover": {
                      borderBottom: "2px solid #5a3d8b",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#faf6ff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
