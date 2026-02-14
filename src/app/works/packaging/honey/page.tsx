import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[100px] lg:mt-0 w-full lg:mb-[135px] mb-[37px] lg:block hidden"
        src="/honey/ss.jpg"
        alt="Головна ілюстрація LLAMA English"
        width={1920}
        height={830}
        priority
      />

      <Image
        className="lg:h-[830px] mt-[100px] lg:mt-0 w-full lg:mb-[135px] mb-[37px] lg:hidden"
        src="/honey/sq.jpg"
        alt="Головна ілюстрація LLAMA English"
        width={402}
        height={250}
        priority
      />

      <div className="max-w-[1193px] m-auto  mb-[31px] lg:mb-[131px] px-[27px]">
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
          <span className="font-normal lg:text-[25px] text-[12px] leading-[1.2] hyphens-auto  text-justify">
            Етикетка для соняшникового меду з чітким акцентом на натуральність
            продукту. Поєднання класичних бджолярських мотивів і сучасної,
            акуратної тектсової верстки. Колірна гама: медово-жовтий, чорний,
            білий та теплі бурштинові відтінки, що створюють відчуття
            автентичності, ремісничої якості та довіри.
          </span>
        </div>
      </div>

      <Image
        className="w-full lg:block hidden"
        src="/honey/hx.jpg"
        alt=""
        width={1440}
        height={2320}
        priority
      />
      <Image
        className="w-full lg:hidden"
        src="/honey/s.jpg"
        alt=""
        width={400}
        height={827}
      />
    </div>
  );
}
