export default function Page() {
  return (
    <div className="h-[calc(100vh-60px)]  p-4 sm:p-8 ">
      <div className=" mx-auto min-h-[90vh] p-8 sm:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-full lg:w-3/5">
            <div className="flex justify-between items-center mb-12 pb-2">
              <h1 className="text-[65px] font-normal">LOGO</h1>
              <img className="h-[46px] w-[46px]" src="/Group16.svg" alt="" />
            </div>
            <ul className=" text-lg text-gray-800">
              <li className="py-2 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Розробка логотипу{" "}
                  <span className="text-[20px] font-normal">
                    (2-3 варіанти на вибір);
                  </span>
                </p>
              </li>

              <li className="py-2 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Підбір кольорової палітри та шрифтів;
                </p>
              </li>

              <li className="py-2 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Презентація/візуалізація{" "}
                  <span className="text-[20px] font-normal">
                    (як виглядатиме ваш логотип вживу);
                  </span>
                </p>
              </li>

              <li className="py-2 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Передача векторних форматів{" "}
                  <span className="text-[20px] font-normal">
                    (Ai, Svg, Webp, Eps);
                  </span>
                </p>
              </li>

              <li className="py-4 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Передача растрових форматів{" "}
                  <span className="text-[20px] font-normal">(Pdf, Png);</span>
                </p>
              </li>

              <li className="py-2 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Аватарка для соц. мереж;
                </p>
              </li>

              <li className="pt-2 pb-1 border-b border-black-200">
                <p className="font-bold text-[20px]">
                  Повний пакет файлів + логобук
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-between items-center pt-4 lg:pt-0">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="#"
                className="text-[18px] pt-10 font-normal pb-4 border-b border-black-200 text-center   hover:text-black transition duration-200"
              >
                Переглянути приклади робіт
              </a>
            </div>
            <div className="max-w-[274px] flex flex-col justify-center ">
              <p className=" text-[14px] font-normal mb-12 text-black/50">
                *Повний пакет файлів включає всі розроблені версії логотипу
                (горизонтальна та вертикальна версії, фавікон) в обраних
                фірмових кольорах + ч/б версіях.
              </p>

              <p className="text-[14px] font-normal text-black/50">
                *Логобук — це pdf посібник, що містить детальний опис логотипу
                та правила його використання для забезпечення єдиного стилю
                бренду. Він включає базові характеристики (кольори, шрифти,
                пропорції) та рекомендації щодо коректного розміщення на різних
                носіях.
              </p>
            </div>
          </div>
        </div>
        <div className="text-right mr-[130px] mt-[100px]">
          <h2 className="text-[24px] font-normal  text-black/50">
            ЦІНА: ВІД 5 000 ГРН
          </h2>
        </div>
      </div>
    </div>
  );
}
