import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[100px] lg:mt-0 w-full lg:mb-[135px] mb-[37px]"
        src="/pizza/p1.png"
        alt="Головна ілюстрація LLAMA English"
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv lg:inline-block hidden  px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            МЕНЮ
          </h2>
          <h2 className="kharkiv inline-block px-6 lg:hidden py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            МЕНЮ А3 В 1 ЗГИН
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
          <span className="font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] text-left tracking-[0] lg:text-justify mb-[50px]">
            Двостороннє меню для кафе Pizza Park формату А3 в 1 згин для
            комфортнішого користування та зберігання ( тобто згортається
            посередині листа) .
          </span>
        </div>
      </div>
      <div className="lg:flex items-center hidden flex-col w-full mb-[148px]">
        <div>
          <Image
            className="w-full mb-[25px]"
            src="/pizza/p2.png"
            alt=""
            width={1175}
            height={410}
          />
        </div>

        <span className="font-[25px]">макет меню</span>
      </div>

      <div className="flex flex-col lg:flex-row">
        <Image
          className="w-full"
          src="/pizza/p3.png"
          alt=""
          width={1920}
          height={1080}
        />{" "}
        <Image
          className="w-full "
          src="/pizza/p4.png"
          alt=""
          width={1920}
          height={1080}
        />
        <Image
          className="w-full lg:hidden"
          src="/pizza/p5.png"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
