import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] lg:mt-0 mt-[100px] w-full lg:mb-[135px] mb-[37px] "
        src="/co/i1.jpg"
        alt="Головна ілюстрація LLAMA English"
        width={1420}
        height={830}
        priority
      />
      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv nline-block   px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            КОРОБКА
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
          <span className="font-normal lg:text-[25px] text-[12px] leading-[1.2] hyphens-auto  text-justify lg:mb-[70px] ">
            Коробка виконана з щільного текстурованого картону фірмового кольору
            Dark violet та має тиснення золотою фольгою. Для упапування
            використовують брендовану коробку + папір тіш’ю молочного кольору з
            нанесеним білим лого + кругла наліпка фірмового фіолетового кольору.
          </span>
        </div>
      </div>
      <Image
        className="w-full  lg:block"
        src="/co/i2.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full  lg:block"
        src="/co/i3.jpg"
        alt=""
        width={1920}
        height={1080}
      />{" "}
      <Image
        className="w-full hidden lg:block"
        src="/co/i4.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full  lg:hidden"
        src="/co/s.png"
        alt=""
        width={1920}
        height={1080}
      />{" "}
      <Image
        className="w-full  lg:hidden"
        src="/co/S1.png"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
