"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { type FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Не налаштовані EmailJS змінні: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
        );
      }

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              name,
              phone,
              email,
              service,
              contactMethod,
              message: [
                "Нова заявка з сайту",
                `Ім'я: ${name}`,
                `Телефон: ${phone}`,
                `Email: ${email}`,
                `Послуга: ${service}`,
                `Зручний спосіб зв'язку: ${contactMethod}`,
              ].join("\n"),
            },
          }),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Не вдалося відправити форму.");
      }

      setSubmitStatus({
        type: "success",
        message: "Дякую! Заявка успішно відправлена.",
      });
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setContactMethod("");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Сталася помилка.";
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" bg-[#fff] flex flex-col max-w-[1232px] mx-auto mb-10">
      <section className="lg:mt-[118px] mt-[70px]  w-full bg-[#fff]/90 flex flex-col justify-center lg:min-h-[60vh] relative overflow-hidden mb-[100px] lg:mb-0">
        <h1
          className="  text-[40px] sm:text-[80px] lg:text-[144px]
  font-normal
  kharkiv
  text-center lg:text-left
  relative
  -left-[6px] sm:-left-[8px] lg:-left-[12px] "
        >
          PORTFOLIO
        </h1>
        <div className="lg:flex-row flex-col flex lg:gap-[68px] gap-[50px] lg:mt-[33px] mt-[10px]">
          <Image
            src="/Rectangle1.svg"
            alt=""
            width={365}
            height={495}
            className="hidden lg:block object-cover"
          />

          <Image
            src="/sm1.jpg"
            alt=""
            width={768}
            height={300}
            className="block lg:hidden w-full  object-contain"
          />
          <div className="lg:w-[597px] px-[55px] lg:px-0">
            <div className="flex justify-between items-center lg:mb-8">
              <h3 className="font-normal lg:text-[45px] text-[25px] kharkiv">
                ABOUT ME
              </h3>
              <Image
                width={17}
                height={17}
                className="h-[17px] w-[17px] lg:h-[34px] lg:w-[34px]"
                src="/Group16.svg"
                alt=""
              />
            </div>
            <p className="text-[15px]  lg:text-[20px]  font-normal mb-[25px] lg:mb-[100px] lg:hidden">
              Привіт!  Мене звати Аліна і я графічна дизайнерка. Кожен день я
              дізнаюся щось нове і вдосконалюю свої навички. 
            </p>
            <p className="text-[15px]  lg:text-[20px]  font-normal mb-[25px] lg:mb-[100px] hidden lg:block leading-[100%] tracking-[0] text-justify">
              Привіт! 
              <br /> Мене звати Аліна і я графічна дизайнерка зі Львова. Кожен
              день я дізнаюся щось нове і вдосконалюю свої навички. Обожнюю
              каву, Львів та свою роботу. Відкрита завжди до нових пропозицій чи
              викликів.{" "}
            </p>
            <div className="  flex lg:gap-[67px] gap-[10px] justify-between items-center centers">
              <div className="lg:w-[180px] flex lg:flex-col gap-2 items-left">
                <p className="text-[25px] lg:text-[45px]  font-normal kharkiv">
                  {" "}
                  2,5+
                </p>
                <p className="lg:text-[20px] text-[10px]">
                  років досвіду{" "}
                  <p className="hidden lg:block">( комерційного )</p>
                </p>
              </div>
              <div className="min-w-[1px] bg-[#000] self-stretch"></div>
              <div className="lg:w-[250px] flex lg:flex-col gap-2 items-left">
                <p className="text-[25px]  lg:text-[45px]   font-normal kharkiv">
                  20+
                </p>
                <p className="text-[20px] hidden lg:block">
                  реалізованих проектів для клієнтів
                </p>
                <p className="text-[10px] lg:hidden">реалізованих проектів </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex lg:flex-row flex-col lg:gap-[114px] gap-[57px] px-[56px] lg:px-0">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-end lg:mb-[70px] mb-[25px]">
                <h3 className="font-normal lg:text-[45px] text-[25px]  kharkiv leading-8 lg:leading-13 !mr-10">
                  ЗАМОВИТИ <br /> ДИЗАЙН
                </h3>
                <Image
                  width={17}
                  height={17}
                  className="h-[24px] w-[24px] lg:h-[34px] lg:w-[34px] mb-2"
                  src="/Group16.svg"
                  alt=""
                />
              </div>

              <p className="font-montserrat font-normal lg:text-[20px] text-[15px] leading-[100%] tracking-[0.04em] text-justify lg:mb-[57px] mb-0">
                Залиште заявку для зворотнього зв’язку і в найближчий час я
                зв’яжусь з вами.
              </p>
            </div>

            <div className="hidden lg:block">
              <p className="mb-[23px] font-montserrat font-normal text-[20px] leading-[100%] tracking-[0.04em] text-justify">
                АБО ЗВ’ЯЖІТЬСЯ ЗІ МНОЮ ТУТ
              </p>

              <div className="flex gap-[38px]">
                <a
                  target="_blank"
                  href="https://www.instagram.com/balachuk_dsgn"
                >
                  <Image
                    width={17}
                    height={17}
                    className="h-[17px] w-[17px] lg:h-[34px] lg:w-[34px] mb-2"
                    src="/ins.svg"
                    alt=""
                  />
                </a>

                <a target="_blank" href="https://t.me/Alina_Balachuk">
                  <Image
                    width={17}
                    height={17}
                    className="h-[17px] w-[17px] lg:h-[34px] lg:w-[34px] mb-2"
                    src="/t.svg"
                    alt=""
                  />
                </a>

                <a target="_blank" href="mailto:alinabalachuk@gmail.com">
                  <Image
                    width={17}
                    height={17}
                    className="h-[17px] w-[17px] lg:h-[34px] lg:w-[34px] mb-2"
                    src="/em.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-[100px] lg:mb-0">
            <form
              className="flex-1 text-[20px] flex flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <h3 className="font-montserrat font-normal lg:text-[20px] text-[15px] leading-[100%] tracking-[0.04em] text-justify">
                ФОРМА ДЛЯ ЗВОРОТНЬОГО ЗВ’ЯЗКУ:
              </h3>
              <TextField
                InputLabelProps={{
                  sx: {
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  },
                }}
                id="standard-basic"
                label="ім’я"
                variant="standard"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <TextField
                InputLabelProps={{
                  sx: {
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  },
                }}
                id="standard-basic"
                label="номер телефону"
                variant="standard"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <TextField
                InputLabelProps={{
                  sx: {
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  },
                }}
                id="standard-basic"
                label="email"
                variant="standard"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  }}
                  id="demo-simple-select-standard-label"
                >
                  виберіть послугу, яку потрібно розробити
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  label="виберіть послугу, яку потрібно розробити"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                          fontSize: {
                            xs: "12px",
                            sm: "20px",
                          },
                          lineHeight: "100%",
                          letterSpacing: "0.04em",
                        },
                      },
                    },
                  }}
                  required
                >
                  <MenuItem value={"ЛОГОТИП"}>ЛОГОТИП</MenuItem>
                  <MenuItem value={"АЙДЕНТИКА ( ФІРМОВИЙ СТИЛЬ)"}>
                    АЙДЕНТИКА ( ФІРМОВИЙ СТИЛЬ)
                  </MenuItem>
                  <MenuItem value={"ПОЛІГРАФІЯ"}>ПОЛІГРАФІЯ</MenuItem>
                  <MenuItem value={"ПАКУВАННЯ"}>ПАКУВАННЯ</MenuItem>
                  <MenuItem value={"МАКЕТ(ТИ) ДЛЯ СОЦ. МЕРЕЖ"}>
                    МАКЕТ(ТИ) ДЛЯ СОЦ. МЕРЕЖ
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  }}
                  id="demo-simple-select-standard-label"
                >
                  виберіть, де буде зручно з вами зв’язатись
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={contactMethod}
                  onChange={(event) => setContactMethod(event.target.value)}
                  label="виберіть, де буде зручно з вами зв’язатись"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "20px",
                    },
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textAlign: "justify",
                    color: "#000",
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                          fontSize: {
                            xs: "12px",
                            sm: "20px",
                          },
                          lineHeight: "100%",
                          letterSpacing: "0.04em",
                        },
                      },
                    },
                  }}
                  required
                >
                  <MenuItem value={"ТЕЛЕГРАМ"}>ТЕЛЕГРАМ</MenuItem>
                  <MenuItem value={"ЕЛЕКТРОННА ПОШТА"}>
                    ЕЛЕКТРОННА ПОШТА
                  </MenuItem>
                  <MenuItem value={"ВАЙБЕР"}>ВАЙБЕР</MenuItem>
                </Select>
              </FormControl>

              {submitStatus.type !== "idle" && (
                <p
                  className={`mt-2 text-[16px] ${
                    submitStatus.type === "success"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-black lg:mt-[43px] mt-[26px] font-montserrat font-normal lg:text-[20px] text-[15px] leading-[100%] cursor-pointer tracking-[0.04em] text-justify disabled:opacity-60"
              >
                {isSubmitting ? "ВІДПРАВЛЯЮ..." : "ВІДПРАВИТИ"}
              </button>
            </form>
            <div className=" lg:hidden mt-[79px]">
              <p className="mb-[23px] font-montserrat font-normal text-center text-[15px] leading-[100%] tracking-[0.04em] ">
                АБО ЗВ’ЯЖІТЬСЯ ЗІ МНОЮ ТУТ:
              </p>

              <div className="flex gap-[38px] justify-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/balachuk_dsgn"
                >
                  <Image
                    width={17}
                    height={17}
                    className="h-[25px] w-[25px] lg:h-[34px] lg:w-[34px] mb-2"
                    src="/ins.svg"
                    alt=""
                  />
                </a>

                <a target="_blank" href="https://t.me/Alina_Balachuk">
                  <Image
                    width={17}
                    height={17}
                    className="h-[25px] w-[25px] lg:h-[34px] lg:w-[34px] mb-2"
                    src="/t.svg"
                    alt=""
                  />
                </a>

                <a target="_blank" href="mailto:alinabalachuk@gmail.com">
                  <Image
                    width={17}
                    height={17}
                    className="h-[25px] w-[25px] lg:h-[34px] lg:w-[34px] mb-2"
                    src="/em.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
