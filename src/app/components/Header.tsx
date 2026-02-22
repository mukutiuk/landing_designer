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
import Image from "next/image";

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
    { title: "IDENTITY FULL", href: "/services/identity-premium" },
    { title: "ПОЛІГРАФІЯ", href: "/services/polygraphy" },
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
        paddingTop: "15px",
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
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        gap: "30px",
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
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      PaperProps={{
        sx: {
          width: "50vw",
          height: "100vh",
          backgroundColor: isDarkHeader ? "#000" : "#fff",
          color: isDarkHeader ? "#fff" : "#000",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "flex-end",
          transition: "transform 0.4s ease",
        },
      }}
      transitionDuration={{
        enter: 450,
        exit: 350,
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(4px)",
          transition: "all 0.4s ease",
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
          alignItems: "end",
          marginTop: "70px",
          marginBottom: "60px",

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
            <Box component="span" sx={linkStyles(item.href, 15)}>
              {item.title}
            </Box>
          </Link>
        ))}

        {/* SERVICES MOBILE */}
        <Box onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
          <Box
            component="span"
            sx={{
              ...linkStyles("/services", 15),
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
              <Box component="span" sx={{ fontSize: "13px" }}>
                {service.title}
              </Box>
            </Link>
          ))}

        <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
          <Box component="span" sx={linkStyles("/contacts", 15)}>
            КОНТАКТИ
          </Box>
        </Link>
      </Box>
      <div className="flex gap-2 mb-[50px] mr-[32px]">
        <a target="_blank" href="https://www.instagram.com/balachuk_dsgn">
          <Image
            width={8}
            height={28}
            src="/ins.svg"
            className="h-[28px] w-[28px] "
            alt=""
          />
        </a>
        <a target="_blank" href="https://t.me/Alina_Balachuk">
          <Image
            width={18}
            height={18}
            src="/t.svg"
            className="h-[28px] w-[28px]"
            alt=""
          />
        </a>
        <a target="_blank" href="mailto:alinabalachuk@gmail.com">
          <Image
            width={18}
            height={18}
            src="/em.svg"
            className="h-[28px] w-[28px] "
            alt=""
          />
        </a>
      </div>
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
                alignItems: "center",
              }}
            >
              <Link className="font-normal" href="/">
                <Box
                  component="span"
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: isDarkHeader ? "#fff" : "black",
                    fontFamily: "var(--font-kharkiv-tone), sans-serif",
                  }}
                >
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
