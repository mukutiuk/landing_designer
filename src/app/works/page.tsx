import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-[calc(100vh)] lg:h-[calc(100vh)] bg-[#000] py-6 flex justify-center items-center">
      <section className="flex flex-col max-w-[1232px] w-full">
        <div className="flex lg:gap-[80px] gap-[40px] flex-col lg:flex-row lg:mr-8">
          {/* Десктопна версія ілюстрації */}
          <Image
            className="lg:w-[492px] lg:h-[289px] lg:block hidden"
            src="/workImg.svg"
            alt="Ілюстрація робіт"
            width={492}
            height={289}
            priority
          />

          {/* Мобільна версія ілюстрації */}
          <Image
            className="w-full block lg:hidden"
            src="/woS.png"
            alt="Ілюстрація робіт (мобільна)"
            width={800}
            height={400} // приблизно — краще замінити на реальні пропорції
          />

          <div className="flex flex-col w-full px-[56px]">
            <div className="flex mb-[34px] items-center w-full justify-between">
              <h2 className="text-[#fff] lg:text-[65px] text-[25px] leading-[49px] font-normal">
                РОБОТИ
              </h2>
              <Image
                className="lg:h-[46px] lg:w-[46px] h-[24px] w-[24px]"
                src="/arrowWhite.svg"
                alt=""
                width={46}
                height={46}
              />
            </div>

            <Link
              className="flex items-center justify-between py-3 border-b border-t border-[#3A3A3A] transition-colors duration-300 hover:text-[#cac3c3]"
              href="/works/logo"
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal">
                ЛОГОТИП
              </h2>
              <Image
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt="Стрілка"
                width={33}
                height={33}
              />
            </Link>

            <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A] hover:text-[#cac3c3]"
              href="/works/identity"
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal">
                ФІРМОВИЙ СТИЛЬ (АЙДЕНТИКА)
              </h2>
              <Image
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt="Стрілка"
                width={33}
                height={33}
              />
            </Link>

            <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A] hover:text-[#cac3c3]"
              href="/works/printing"
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal">
                ПОЛІГРАФІЯ
              </h2>
              <Image
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt="Стрілка"
                width={33}
                height={33}
              />
            </Link>

            <Link
              className="flex items-center justify-between py-3 border-b border-[#3A3A3A] hover:text-[#cac3c3]"
              href="/works/packaging"
            >
              <h2 className="text-[#fff] lg:text-[18px] text-[13px] font-normal">
                ПАКОВАННЯ
              </h2>
              <Image
                className="h-[19px] w-[19px] lg:h-[33px] lg:w-[33px] -rotate-90"
                src="/arrowWhite.svg"
                alt="Стрілка"
                width={33}
                height={33}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
