import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-[calc(100vh-60px - 21px)]  lg:mt-[160px] mt-[160px] mb-16">
      <div className="max-w-[1232px] lg:mx-auto min-h-[80vh] mx-[27px] ">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-full lg:w-3/5">
            <div className="flex justify-between items-center mb-10 pb-2">
              <h1 className="lg:text-[65px] text-[25px] font-normal kharkiv">
                LOGO
              </h1>
              <Image
                width={46}
                height={46}
                className="h-[46px] w-[46px] hidden lg:block"
                src="/Group16.svg"
                alt=""
              />
              <Link
                href="/works/logo"
                className="text-[10px] kharkiv  font-normal pb-1 border-b border-black-200 text-left   hover:text-black transition duration-200 lg:hidden max-w-[123px"
              >
                Переглянути приклади робіт
              </Link>
            </div>
            <ul className=" text-lg text-gray-800 flex flex-col ">
              <li className="lg:py-2 border-t border-b border-black-200 flex items-center h-12">
                <p className="font-bold lg:text-[20px] text-[15px] flex flex-col lg:flex-row leading-[100%]">
                  Розробка логотипу{" "}
                  <span className="lg:text-[20px] text-[15px] font-normal">
                    (2-3 варіанти на вибір);
                  </span>
                </p>
              </li>

              <li className="lg:py-2 border-b border-black-200 h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px] ">
                  Підбір кольорової палітри та шрифтів;
                </p>
              </li>

              <li className="lg:py-2 border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px] flex flex-col lg:flex-row leading-[100%]">
                  Презентація/візуалізація{" "}
                  <span className="lg:text-[20px] text-[15px] font-normal">
                    (як виглядатиме ваш логотип вживу);
                  </span>
                </p>
              </li>

              <li className="lg:py-2 border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px] flex flex-col lg:flex-row leading-[100%] w-full">
                  Передача векторних форматів{" "}
                  <span className="lg:text-[20px] text-[15px] font-normal">
                    (Ai, Svg, Webp, Eps);
                  </span>
                </p>
              </li>

              <li className="lg:py-2 border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px] flex flex-col lg:flex-row leading-[100%]">
                  Передача растрових форматів{" "}
                  <span className="lg:text-[20px] text-[15px] font-normal">
                    (Pdf, Png);
                  </span>
                </p>
              </li>

              <li className="lg:py-2 border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px]">
                  Аватарка для соц. мереж;
                </p>
              </li>

              <li className="lg:pt-2 pb-1 border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px]">
                  Повний пакет файлів + логобук.
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-between items-end pt-6 lg:pt-0">
            <div className=" items-center justify-center space-x-4 hidden lg:flex">
              <Link
                href="/works/logo"
                className="text-[18px] pt-10 font-normal pb-4 border-b border-black-200 text-center   hover:text-black transition duration-200"
              >
                Переглянути приклади робіт
              </Link>
            </div>
            <div className="lg:max-w-[321px] flex flex-col justify-center ">
              <p className=" text-[14px] font-normal lg:mb-12 mb-2 text-black/50 leading-[100%] tracking-[0] text-justify">
                *Повний пакет файлів включає всі розроблені версії логотипу
                (горизонтальна та вертикальна версії, фавікон) в обраних
                фірмових кольорах + ч/б версіях.
              </p>

              <p className="text-[14px] font-normal text-black/50 leading-[100%] tracking-[0] text-justify">
                *Логобук — це pdf посібник, що містить детальний опис логотипу
                та правила його використання для забезпечення єдиного стилю
                бренду. Він включає базові характеристики (кольори, шрифти,
                пропорції) та рекомендації щодо коректного розміщення на різних
                носіях.
              </p>
            </div>
          </div>
        </div>
        <div className="text-right  mt-[98px] hidden lg:block">
          <p className="text-[15px] block lg:mb-6 font-normal kharkiv">
            ТЕРМІН РОЗРОБКИ: 5-7 РОБОЧИХ ДНІВ
          </p>
          <h2 className="text-[24px] font-normal  text-black/50 kharkiv">
            ЦІНА: 7 000 ГРН
          </h2>
        </div>

        <div className="mt-[58px] lg:hidden">
          <h2 className="text-[15px] font-normal   kharkiv">
            ТЕРМІН РОЗРОБКИ: 5-7 РОБОЧИХ ДНІВ
          </h2>

          <p className="text-[15px] block mt-1 font-normal kharkiv">
            ЦІНА: 7 000 ГРН
          </p>
        </div>
      </div>
    </div>
  );
}
