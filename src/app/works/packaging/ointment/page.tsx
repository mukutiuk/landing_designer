import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[90px] lg:mt-0 w-full lg:mb-[135px] mb-[37px] "
        src="/ointment/i1.jpg"
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
          <span className="font-normal lg:text-[25px] text-[12px] leading-[1.2] hyphens-auto  text-justify lg:mb-[70px] ">
            Упакування мазі виконана з щільного текстурованого картону білого
            кольору. Етикетка виконана з матового паперу. Дизайн з використання
            графічних ілюстрацій коноплі на бічних сторонах. На лицевій стороні
            назва продукту, логотип, вказана наявність СВD. На звороті - склад
            та рекомендації щодо застосування. Внизу коробки: виробник, адреса
            виробництва, штрихкод.
          </span>
        </div>
      </div>
      <Image
        className="w-full  lg:block"
        src="/ointment/i2.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full  lg:block"
        src="/ointment/i3.jpg"
        alt=""
        width={1920}
        height={1080}
      />{" "}
      <Image
        className="w-full hidden lg:block"
        src="/ointment/i4.jpg"
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
        src="/ointment/i5.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full lg:hidden"
        src="/ointment/w.jpg"
        alt=""
        width={1920}
        height={1080}
      />{" "}
      <Image
        className="w-full lg:hidden"
        src="/ointment/w1.jpg"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
