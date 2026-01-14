import Image from "next/image";

export default function Page() {
  return (
    <div className="h-[calc(100vh-60px - 21px)]  lg:mt-[121px] mt-[160px] mb-16">
      <div className="max-w-[1232px] lg:mx-auto min-h-[80vh] mx-[27px] lg:px-6">
        <div className="flex flex-col lg:space-x-12">
          <div className="w-full ">
            <div className="flex justify-between items-center mb-12 pb-2">
              <h1 className="lg:text-[65px] text-[25px] font-normal kharkiv">
                ПОЛІГРАФІЯ
              </h1>
              <Image
                width={46}
                height={46}
                className="h-[46px] w-[46px] hidden lg:block"
                src="/Group16.svg"
                alt=""
              />
              <a
                href="#"
                className="text-[10px] kharkiv  font-normal pb-1 border-b border-black-200 text-left   hover:text-black transition duration-200 lg:hidden max-w-[123px"
              >
                Переглянути <br /> приклади робіт
              </a>
            </div>
            <ul className=" text-lg text-gray-800 flex flex-col  ">
              <li className="py-2 border-t border-b border-black-200 flex items-center justify-between">
                <p className="font-bold lg:text-[20px] text-[15px] lg:flex lg:flex-col block max-w-[220px] leading-[15px] lg:leading-[100%] lg:max-w-full">
                  Будь який односторонній макет{" "}
                  <span className="lg:text-[20px] text-[10px] font-normal leading-[12px] lg:leading-[25px] ">
                    ( візитка, листівка, бірка, етикетка, запрошення, флаєр)
                  </span>
                </p>

                <p className=" kharkiv lg:text-[24px] text-[12px]">500 грн</p>
              </li>
              <li className="py-2  border-b border-black-200 flex items-center justify-between">
                <p className="font-semibold lg:text-[20px] text-[15px] lg:flex lg:flex-col block max-w-[220px] leading-[15px] lg:leading-[100%] lg:max-w-full ">
                  Будь який двосторонній макет{" "}
                  <span className="lg:text-[20px] text-[10px] font-normal leading-[12px] lg:leading-[25px] ">
                    ( візитка, листівка, бірка, етикетка, запрошення, флаєр)
                  </span>
                </p>
                <p className=" kharkiv lg:text-[24px] text-[12px]">800 грн</p>
              </li>

              <li className="py-2  border-b border-black-200 flex items-center justify-between">
                <p className="font-bold lg:text-[20px] text-[15px] lg:flex lg:flex-col block max-w-[220px] leading-[15px] lg:leading-[100%] lg:max-w-full">
                  Багатосторінкова продукція{" "}
                  <span className="lg:text-[20px] text-[10px] font-normal leading-[12px] lg:leading-[25px] ">
                    ( верстка здійснюється в Adobe in Design)
                  </span>
                </p>
                <p className=" kharkiv lg:text-[24px] text-[12px]">
                  140 грн/1 ст
                </p>
              </li>
              <li className="py-2 border-b border-black-200 items-center  flex justify-between">
                <p className="font-bold lg:text-[20px] text-[15px] lg:flex lg:flex-col block max-w-[220px] leading-[15px] lg:leading-[100%] lg:max-w-full">
                  Паковання{" "}
                  <span className="lg:text-[20px] text-[10px] font-normal leading-[12px] lg:leading-[25px] ">
                    (кінцева ціна залежить від складності макету/констуктиву
                    паковання)
                  </span>
                </p>
                <p className=" kharkiv lg:text-[24px] text-[12px]">500 грн</p>
              </li>

              <li className="py-2  border-b border-black-200 items-center flex justify-between">
                <p className="font-bold lg:text-[20px] text-[15px] lg:flex lg:flex-col block max-w-[220px] leading-[15px] lg:leading-[100%] lg:max-w-full">
                  Макети для соц мереж{" "}
                  <span className="lg:text-[20px] text-[10px] font-normal leading-[12px] lg:leading-[25px] ">
                    (якщо замовлення має шаблонний характер - розраховується
                    індивідуально)
                  </span>
                </p>
                <p className=" kharkiv lg:text-[24px] text-[12px] max-w-[97px]  lg:max-w-[397px] text-right">
                  300 грн/1 макет
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col justify-between items-end pt-6 lg:pt-0 lg:mt-[67px] mt-[57px]">
            <div className=" flex flex-col lg:flex-row justify-center gap-4">
              <p className=" text-[14px] font-normal  text-black/50">
                *У вартість входить передача всіх робочих файлів, файлів для
                друку згідно загальних вимог ( чи за вимогами вашої поліграфії),
                супровідного листа для поліграфії та презентації 2-3 варіантів
                макету.
              </p>

              <div className="flex flex-col gap-4">
                <p className="text-[14px] font-normal text-black/50">
                  *Якщо не знайшли потрібної позиції - напишіть мені і я уточню
                  чи виконую такі тз.
                </p>

                <p className="text-[14px] font-normal text-black/50">
                  *Я залишаю за собою право публікації проєкту у своєму
                  портфоліо чи соціальних мережах. Якщо ви категорично проти -
                  уточніть це на початку роботи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
