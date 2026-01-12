"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HeaderMUI() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* ================= ROUTE LOGIC ================= */

  const isDarkHeader = pathname === "/works" || pathname === "/contacts";

  /* ================= DATA ================= */

  const navItems = [
    { title: "ABOUT ME", href: "/" },
    { title: "MY SKILLS", href: "/skills" },
    { title: "РОБОТИ", href: "/works" },
    { title: "ЕТАПИ РОБОТИ", href: "/stages" },
  ];

  const servicesMenu = [
    { title: "LOGO", href: "/services/logo" },
    { title: "IDENTITY BASIC", href: "/services/identity-basic" },
    { title: "IDENTITY PREMIUM", href: "/services/identity-premium" },
    { title: "ПОЛІГРАФІЯ", href: "/services/polygraphy" },
    { title: "WEB МАКЕТИ", href: "/services/web-mockups" },
  ];

  /* ================= STYLES ================= */

  const linkStyles = (path: string, size = 20) => {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);

    return {
      fontSize: `${size}px`,
      textTransform: "uppercase",
      letterSpacing: "2px",
      cursor: "pointer",
      color: isDarkHeader ? "#fff" : "#000",
      fontWeight: isActive ? 700 : 400,
      textDecoration: "none",
      "&:hover": { opacity: 0.7 },
    };
  };

  /* ================= DESKTOP ================= */

  const DesktopNav = () => (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1232px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box component="ul" sx={{ display: "flex", gap: "40px", p: 0, m: 0 }}>
        {navItems.map((item) => (
          <Box component="li" key={item.title} sx={{ listStyle: "none" }}>
            <Link href={item.href}>
              <Box component="span" sx={linkStyles(item.href)}>
                {item.title}
              </Box>
            </Link>
          </Box>
        ))}

        {/* SERVICES */}
        <Box
          component="li"
          sx={{ listStyle: "none", position: "relative", pb: "12px" }}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Box component="span" sx={linkStyles("/services")}>
            ПОСЛУГИ
          </Box>

          {servicesOpen && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                padding: "16px 24px",
                minWidth: "200px",
                zIndex: 1000,
              }}
            >
              {servicesMenu.map((service) => (
                <Box key={service.title} sx={{ mb: "6px" }}>
                  <Link href={service.href}>
                    <Box
                      component="span"
                      sx={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#000",
                        cursor: "pointer",
                        "&:hover": { opacity: 0.5 },
                      }}
                    >
                      {service.title}
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      <Link href="/contacts">
        <Box component="span" sx={linkStyles("/contacts")}>
          КОНТАКТИ
        </Box>
      </Link>
    </Box>
  );

  /* ================= MOBILE ================= */

  const MobileMenu = () => (
    <Drawer
      anchor="top"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      PaperProps={{
        sx: {
          width: "100vw",
          height: "100vh",
          backgroundColor: isDarkHeader ? "#000" : "#fff",
          color: isDarkHeader ? "#fff" : "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <IconButton onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon sx={{ color: isDarkHeader ? "#fff" : "#000" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
          pr: "32px",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Box component="span" sx={linkStyles(item.href, 24)}>
              {item.title}
            </Box>
          </Link>
        ))}

        {/* SERVICES MOBILE */}
        <Box onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
          <Box
            component="span"
            sx={{
              ...linkStyles("/services", 24),
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            ПОСЛУГИ
            <ExpandMoreIcon
              sx={{
                color: isDarkHeader ? "#fff" : "#000",
                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </Box>
        </Box>

        {mobileServicesOpen &&
          servicesMenu.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Box component="span" sx={{ fontSize: "16px" }}>
                {service.title}
              </Box>
            </Link>
          ))}

        <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
          <Box component="span" sx={linkStyles("/contacts", 24)}>
            КОНТАКТИ
          </Box>
        </Link>
      </Box>
    </Drawer>
  );

  /* ================= RENDER ================= */

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          height: "60px",
          backgroundColor: isDarkHeader ? "#000" : "#fff",
          transition: "background-color 0.3s ease",
          borderBottom: isMobile ? "1px solid #000" : "none",
          borderColor: isDarkHeader ? "#fff" : "#000",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link href="/">
                <Box component="span" sx={linkStyles("/", 18)}>
                  BALACHUK_DSGN
                </Box>
              </Link>

              <IconButton onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon sx={{ color: isDarkHeader ? "#fff" : "#000" }} />
              </IconButton>
            </Box>
          ) : (
            <DesktopNav />
          )}
        </Toolbar>
      </AppBar>

      {isMobile && <MobileMenu />}
    </>
  );
}
