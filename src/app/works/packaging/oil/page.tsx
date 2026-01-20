import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[90px] w-full lg:mb-[135px] mb-[37px] "
        src="/oil/oL.png"
        alt="Головна ілюстрація LLAMA English"
        width={1420}
        height={830}
        priority
      />
      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv nline-block   px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            УПАКУВАННЯ
          </h2>

          <Image
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] text-left tracking-[0] lg:text-justify lg:mb-[70px] ">
            Преміальні упаковки для CBD-олій, які позиціонується як натуральний
            продукт для здоров’я та добробуту. Візуальна мова говорить про
            довіру, чистоту, сучасність та професійність.
          </span>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-bold text-[12px] lg:text-[25px]">
            Упаковка для серії Сare Nutrition 30мл
          </span>
          <span className="font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] text-left tracking-[0] lg:text-justify lg:mb-[70px] ">
            Кожна з одиниць має індивідуально розроблений емоцію персонажу Care
            Baву та індивідуальний колір. Графічний герой - капелька, виконана в
            одному кольорі, що дозволяє зосередити увагу на емоціях героя та
            власне самій упаковці. Персонаж промальований графічно, з додаткових
            аксесуарів - окуляри, для візуалізації науковності. Персонаж
            розміщується на передній. Серія представлена на українскій та
            польській мовах у 30мл та вміщає 13 смаків олійок та 2 смаки спрею.
          </span>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col gap-[50px] mb-[160px]">
        <div className="w-[1117px] h-[745px]">
          <Image
            className="w-full  lg:block"
            src="/oil/o2.png"
            alt=""
            width={1117}
            height={745}
          />
        </div>
        <p className="text-[25px] text-black">
          кілька позицій з серії Care Nutrition
        </p>
      </div>
      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-bold text-[12px] lg:text-[25px]">
            Упаковка для серії Flavour
          </span>
          <span className="font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] text-left tracking-[0] lg:text-justify lg:mb-[70px] ">
            Преміальна упаковка CBD-олії, яка позиціонується як преміальний,
            натуральний продукт для здоров’я та добробуту. Кожна з 11 одиниць
            має індивідуально розроблений патерн відповідно до смаку продукту,
            що розміщується на бокові частині коробки. На іншій боковій частині
            розміщене попередження та спосіб застосування. Серія представлена на
            українскій та польській мовах у 30/10 мл з 5 /10% вмісту діючої
            речовини та вміщає 11 смаків.
          </span>
        </div>
      </div>
      <Image
        className="w-full  lg:block"
        src="/oil/o3.png"
        alt=""
        width={1920}
        height={1080}
      />
      <div className=" flex justify-center items-center flex-col gap-[50px] mb-[160px]">
        <div className="w-[1117px] h-[745px]">
          <Image
            className="w-full  lg:block"
            src="/oil/o4.png"
            alt=""
            width={1117}
            height={745}
          />
        </div>
        <p className="text-[25px] text-black">кілька позицій з серії Flavour</p>
      </div>
      <Image
        className="w-full  lg:block"
        src="/oil/o5.png"
        alt=""
        width={1920}
        height={1080}
      />{" "}
      <Image
        className="w-full hidden lg:block"
        src="/ointment/o4.png"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full  lg:hidden"
        src="/ointment/oS.png"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full hidden lg:block "
        src="/ointment/o5.png"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full lg:hidden"
        src="/ointment/os1.png"
        alt=""
        width={1920}
        height={1080}
      />{" "}
      <Image
        className="w-full lg:hidden"
        src="/ointment/os2.png"
        alt=""
        width={1920}
        height={1080}
      />
      {/* <Image
        className="w-full  lg:hidden"
        src="/co/S1.png"
        alt=""
        width={1920}
        height={1080}
      /> */}
    </div>
  );
}
