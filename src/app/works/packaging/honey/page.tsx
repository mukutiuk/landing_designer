import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[100px] w-full lg:mb-[135px] mb-[37px]"
        src="/honey/pL.png"
        alt="Головна ілюстрація LLAMA English"
        width={2920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv nline-block   px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            ЕТИКЕТКА
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
            Етикетка для соняшникового меду з чітким акцентом на натуральність
            продукту. Поєднання класичних бджолярських мотивів і сучасної,
            акуратної тектсової верстки. Колірна гама: медово-жовтий, чорний,
            білий та теплі бурштинові відтінки, що створюють відчуття
            автентичності, ремісничої якості та довіри.
          </span>
        </div>
      </div>

      <Image
        className="w-full "
        src="/honey/pl1.png"
        alt=""
        width={1920}
        height={1080}
        priority
      />
      <Image
        className="w-full "
        src="/honey/pl2.png"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
