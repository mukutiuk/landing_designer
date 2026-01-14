import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[100px] w-full lg:mb-[135px] mb-[37px]"
        src="/certificate/s1.png"
        alt="Головна ілюстрація LLAMA English"
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv nline-block   px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            СЕРТИФІКАТИ
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
            Листівки формату А6 для святкування дня народження, з декоративною
            булавкою.
          </span>
        </div>
      </div>
      {/* <div className="lg:flex items-center hidden flex-col w-full mb-[148px]">
        <div> */}
      {/* <Image
            className="w-full mb-[25px]"
            src="/postcurd1/p2.png"
            alt=""
            width={701}
            height={500}
          />
        </div>
      </div> */}

      <Image
        className="w-full hidden lg:block"
        src="/certificate/s2.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex flex-col lg:flex-row">
        <Image
          className="w-full "
          src="/certificate/s3.png"
          alt=""
          width={1920}
          height={1080}
        />{" "}
        <Image
          className="w-full "
          src="/certificate/s4.png"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      <Image
        className="w-full  lg:hidden"
        src="/certificate/sS.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full hidden lg:block"
        src="/certificate/s5.png"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
