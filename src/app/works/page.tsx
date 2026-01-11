import Link from "next/link";

export default function Page() {
  return (
    <main className="h-[calc(100vh)] lg:h-[calc(100vh)]  bg-[#000] py-6 flex justify-center items-center">
      <section className="flex flex-col max-w-[1232px] w-full">
        <div className="flex lg:gap-[80px] gap-[40px] flex-col lg:flex-row lg:mr-8">
          <img
            className="lg:w-[492px] lg:h-[289px] lg:block hidden"
            src="/workImg.svg"
            alt="img"
          />

          <img className="w-full block lg:hidden" src="/woS.png" alt="img" />

          <div className="flex flex-col w-full px-[56px]">
            <div className="flex mb-[34px] items-center w-full justify-between">
              <h2 className="text-[#fff] lg:text-[65px] text-[25px] leading-[49px] font-normal">
                РОБОТИ
              </h2>
              <img
                className="lg:h-[46px] lg:w-[46px] h-[24px] w-[24px]"
                src="/arrowWhite.svg"
                alt=""
              />
            </div>

            <Link
              className="flex items-center justify-between py-3 border-b border-t border-[#3A3A3A] transition-colors duration-300"
              href="works/logo"
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal hover:text-[#cac3c3]">
                ЛОГОТИП
              </h2>
              <img
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt=""
              />
            </Link>

            <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A]"
              href={"works/identity"}
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal  hover:text-[#cac3c3]">
                ФІРМОВИЙ СТИЛЬ (АЙДЕНТИКА)
              </h2>
              <img
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt=""
              />
            </Link>
            <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A]"
              href={"works/printing"}
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal  hover:text-[#cac3c3]">
                ПОЛІГРАФІЯ
              </h2>
              <img
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt=""
              />
            </Link>

            {/* 3 */}
            {/* <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A]"
              href={"works/layouts"}
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal  hover:text-[#cac3c3]">
                МАКЕТИ ДЛЯ СОЦІАЛЬНИХ МЕРЕЖ
              </h2>
              <img
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt=""
              />
            </Link> */}

            <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A]"
              href={"works/packaging"}
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal  hover:text-[#cac3c3]">
                ПАКОВАННЯ
              </h2>
              <img
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
