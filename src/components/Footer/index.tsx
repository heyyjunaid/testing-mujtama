"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link as MuiLink,
} from "@mui/material";

const Footer = () => {
  const pathname = usePathname();

  const LINKS = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#faf6ff",
        borderTop: "1px solid #e5e5e5",
        py: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          textAlign={{ sm: "left" }}
        >
          {/* Left Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#5a3d8b", mb: 1 }}
            >
              Mujtama
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay connected to your faith
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              {LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MuiLink
                    key={link.href}
                    component={Link}
                    href={link.href}
                    underline="none"
                    sx={{
                      fontSize: "0.95rem",
                      color: isActive ? "#5a3d8b" : "text.primary",
                      fontWeight: isActive ? 600 : 400,
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#5a3d8b",
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                );
              })}
            </Box>
          </Grid>

          {/* Right Section - Copy */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: { xs: "center", sm: "right" },
                mt: { xs: 2, sm: 0 },
              }}
            >
              &copy; {new Date().getFullYear()} Mujtama. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
