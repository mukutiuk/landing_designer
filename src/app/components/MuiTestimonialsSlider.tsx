"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  MobileStepper,
  Button, // <--- Додали Button
  // IconButton, // можна використати IconButton, якщо хочете лише іконки
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"; // <--- Додали іконку "назад"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"; // <--- Додали іконку "вперед"

const testimonials = [
  {
    text: `Раджу всі і кожному!!! Створення логотипу завдання не просте...`,
    img: "/IMG_0922.JPG",
    author: "Олена, власниця бренду",
  },
  {
    text: `Дуже задоволена співпрацею! Все було швидко, якісно...`,
    img: "/IMG_0922.JPG",
    author: "Марія, підприємець",
  },
  {
    text: `Професійний підхід, креативність та увага до деталей...`,
    img: "/IMG_0922.JPG",
    author: "Ірина, дизайнер",
  },
];

export default function MuiTestimonialsSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = testimonials.length;

  // --- Нескінченне гортання ВПЕРЕД ---
  const handleNext = () => {
    // Якщо поточний крок останній, переходимо на перший (0), інакше +1
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  // --- Нескінченне гортання НАЗАД ---
  const handleBack = () => {
    // Якщо поточний крок перший (0), переходимо на останній (maxSteps - 1), інакше -1
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));
  };

  // --- свайп ---
  let touchStartX = 0;
  let touchStartY = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;

    // реагуємо тільки якщо горизонтальний рух більший за вертикальний
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        handleNext(); // swipe left
      } else {
        handleBack(); // swipe right
      }
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: 6,
        px: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 6,
        background: "#f7f0ee",
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "90%",
            height: "90%",
            border: "2px solid #222",
            zIndex: 0,
            transform: "translate(24px, 24px)",
          }}
        />
        <Box
          component="img"
          src={testimonials[activeStep].img}
          alt="testimonial visual"
          sx={{
            objectFit: "cover",
            maxWidth: { xs: 220, md: 320 },
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 1,
            borderRadius: 2,
            background: "#eee",
          }}
        />
      </Box>

      {/* Text */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "cursive",
            fontWeight: 300,
            fontSize: { xs: 36, md: 56 },
            mb: 2,
            color: "#222",
          }}
        >
          Клієнти <br /> говорять:
        </Typography>
        <Card
          sx={{
            background: "#b07d5a",
            color: "#fff",
            px: 4,
            py: 3,
            borderRadius: 2,
            mb: 2,
            maxWidth: 500,
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7 }}>
              {testimonials[activeStep].text}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mt: 2, color: "#fff", fontWeight: 600 }}
            >
              {testimonials[activeStep].author}
            </Typography>
          </CardContent>
        </Card>

        {/* Тепер MobileStepper включає кнопки */}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ background: "transparent", mt: 1 }}
          // --- Кнопка "назад" ---
          backButton={
            <Button size="small" onClick={handleBack} color="inherit">
              <KeyboardArrowLeft />
              Назад
            </Button>
          }
          nextButton={
            <Button size="small" onClick={handleNext} color="inherit">
              Вперед
              <KeyboardArrowRight />
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
