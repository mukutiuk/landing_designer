import Image from "next/image";

export default function Page() {
  return (
    <main className="h-[calc(100vh)] bg-[#000] py-6 ">
      <div className="text-white bg-black max-w-[1232px] mx-auto px-6">
        <div className="mb-10 mt-[132px]">
          <div className="flex  items-end w-full lg:gap-[76px] justify-between lg:justify-start">
            <h1 className="text-[25px] lg:text-[65px] leading-[1.1] font-normal uppercase">
              Контакти <br />{" "}
              <span className="hidden lg:inline">для зв’язку</span>
            </h1>
            <Image
              src="/arrowWhite.svg"
              alt=""
              width={46}
              height={46}
              className="lg:h-[46px] lg:w-[46px] h-[24px] w-[24px]"
            />
          </div>

          <div className="lg:mb-[54px] mb-[47px] lg:mt-[60px] mt-[17px] w-full border-t border-white" />

          <div className="mt-6 w-full flex justify-between items-start flex-col lg:flex-row gap-4 lg:gap-0">
            {/* Left */}
            <div className="gap-4 flex flex-col w-full">
              <p className="flex items-center gap-[45px] lg:text-[25px] text-[15px] lg:gap-[45px] justify-between lg:justify-start">
                <span className="font-bold">Telegram:</span>
                <a
                  href="https://t.me/Alina_Balachuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @Alina_Balachuk
                </a>
              </p>

              <p className="flex items-center gap-[45px] lg:text-[25px] text-[15px] lg:gap-[45px] justify-between lg:justify-start">
                <span className="font-bold">Instagram:</span>
                <a
                  href="https://www.instagram.com/balachuk_dsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @balachuk_dsgn
                </a>
              </p>
            </div>

            <div className="w-[1px] border-r border-white hidden lg:block" />

            {/* Right */}
            <div className="gap-4 flex flex-col w-full">
              <p className="flex items-center lg:gap-[45px] justify-between lg:justify-start lg:text-[25px] text-[15px]">
                <span className="font-bold">Email:</span>
                <a
                  href="mailto:alinabalachuk@gmail.com"
                  className="hover:underline"
                >
                  alinabalachuk@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-[45px] lg:text-[25px] text-[15px] lg:gap-[45px] justify-between lg:justify-start">
                <span className="font-bold">Phone:</span>
                <a href="tel:+380968219645" className="hover:underline">
                  +(380) 968 219 645
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Більше робіт */}
        <div className="lg:mt-16 mt-[96px]">
          <div className="flex  items-end w-full lg:gap-[76px] justify-between lg:justify-start">
            <h2 className="lg:text-[45px] text-[15px]  leading-[1.1] font-normal uppercase">
              Більше моїх робіт тут:
            </h2>
            <Image
              width={20}
              height={20}
              className="lg:hidden h-[20px] w-[20px]"
              src="/arrowWhite.svg"
              alt=""
            />
          </div>

          <div className=" mt-[17px]  w-full border-t border-white lg:hidden" />

          <div className="flex lg:items-center lg:gap-[100px] gap-2 mt-4 flex-col lg:flex-row  lg:justify-between">
            {/* Behance */}
            <p className="flex items-center gap-[45px] lg:text-[25px] text-[15px] lg:gap-[45px] justify-between lg:justify-start">
              <span className="font-bold">Behance:</span>
              <a
                href="https://www.behance.net/Alina_Balachuk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @Alina_Balachuk
              </a>
            </p>

            {/* Inst */}
            <p className="flex items-center gap-[45px] lg:text-[25px] text-[15px] lg:gap-[45px] justify-between lg:justify-start">
              <span className="font-bold">Inst:</span>
              <a
                href="https://www.instagram.com/balachuk_dsgn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @balachuk_dsgn
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
