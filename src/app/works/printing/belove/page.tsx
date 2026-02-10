import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[100px] w-full lg:mb-[135px] mb-[37px]"
        src="/belove/be1.png"
        alt="Головна ілюстрація LLAMA English"
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto  mb-[31px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv nline-block   px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            ЛИСТІВКИ
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
            Листівки вкладиші та листівки допомога по догляду для бренду декору
            Belove.
          </span>
        </div>
      </div>

      <div className=" flex-col lg:flex-row hidden lg:flex">
        <Image
          className="w-full lg:w-1/2 object-cover"
          src="/belove/i1.jpg"
          alt=""
          width={720}
          height={976}
        />
        <Image
          className="w-full lg:w-1/2 object-cover"
          src="/belove/i2.jpg"
          alt=""
          width={720}
          height={976}
        />
      </div>

      <Image
        className="w-fullobject-cover lg:hidden"
        src="/belove/p1.jpg"
        alt=""
        width={720}
        height={976}
      />

      <Image
        className="w-fullobject-cover lg:hidden"
        src="/belove/p2.jpg"
        alt=""
        width={720}
        height={976}
      />
      <Image
        className="w-fullobject-cover lg:hidden"
        src="/belove/p3.jpg"
        alt=""
        width={720}
        height={976}
      />

      <div className=" flex-col lg:flex-row hidden lg:flex">
        <Image
          className="w-full lg:w-1/2 object-cover"
          src="/belove/i3.jpg"
          alt=""
          width={720}
          height={976}
        />
        <Image
          className="w-full lg:w-1/2 object-cover"
          src="/belove/i4.jpg"
          alt=""
          width={720}
          height={976}
        />
      </div>

      <Image
        className="w-full hidden lg:block"
        src="/belove/i5.jpg"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
