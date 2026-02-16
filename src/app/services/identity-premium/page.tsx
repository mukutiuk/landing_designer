import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-[calc(100vh-60px - 21px)]  lg:mt-[221px] mt-[160px] mb-16">
      <div className="max-w-[1232px] lg:mx-auto min-h-[80vh] mx-[27px] ">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-full lg:w-3/5">
            <div className="flex justify-between items-end mb-10 pb-2">
              <div className="flex flex-col justify-end">
                <h1 className="lg:text-[65px] text-[25px] font-normal kharkiv leading-[0.95] lg:leading-[1]">
                  IDENTITY <br /> FULL
                </h1>
              </div>

              <Image
                width={46}
                height={46}
                src="/Group16.svg"
                className="h-[46px] w-[46px] hidden lg:block"
                alt=""
              />
              <Link
                href="/works/identity"
                className="text-[10px] kharkiv font-normal pb-1 border-b border-black-200 text-right leading-[100%]  hover:text-black transition duration-200 lg:hidden max-w-[123px"
              >
                Переглянути <br /> приклади робіт
              </Link>
            </div>

            <ul className=" text-lg text-gray-800">
              <li className="lg:pt-2 pb-1 border-t border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px]">
                  Всі елементи з розділу «LOGO»;
                </p>
              </li>

              <li className="lg:pt-2 pb-1  border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px]">
                  Розширена стилістика бренду;
                </p>
              </li>

              <li className="lg:pt-2 pb-1  border-b border-black-200   flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px] py-2 lg:flex lg:flex-col block  leading-[15px] lg:leading-[100%] lg:max-w-full">
                  Розробка 8 макетів носіїв;{" "}
                  <span className="lg:text-[15px] block  text-[10px] font-normal leading-[12px] lg:leading-[25px] ">
                    (вибір ключових елементів в залежності від специфіки
                    компанії/бренду)
                  </span>
                </p>
              </li>

              <li className="lg:pt-2 pb-1  border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px]">
                  Повний пакет файлів + технічний опис носіїв;
                </p>
              </li>
              <li className="lg:pt-2 pb-1  border-b border-black-200  h-12 flex items-center">
                <p className="font-bold lg:text-[20px] text-[15px]">
                  Презентація айдентики + гайдбук.
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-between items-end pt-4 lg:pt-0">
            <div className=" items-center justify-center space-x-4 hidden lg:flex">
              <Link
                href="/works/identity"
                className="text-[18px] pt-24 font-normal pb-4 border-b border-black-200 text-center   hover:text-black transition duration-200"
              >
                Переглянути приклади робіт
              </Link>
            </div>
            <div className="lg:max-w-[321px] flex flex-col justify-center ">
              <p className=" text-[14px] font-normal lg:mb-12 mb-2 text-black/50 leading-[100%] tracking-[0] text-justify">
                *Носій - будь який макет поліграфії.
              </p>

              <p className="text-[14px] font-normal text-black/50 leading-[100%] tracking-[0] text-justify">
                *Гайдбук - це pdf посібник, що містить правила та стандарти для
                правильного використання фірмового стилю компанії, який включає
                логотип, шрифти, кольори, графічні елементи та їх застосування
                на різних носіях.
              </p>
            </div>
          </div>
        </div>
        <div className="text-right  mt-[90px] hidden lg:block">
          <p className="text-[15px] block lg:mb-6 font-normal kharkiv">
            ТЕРМІН РОЗРОБКИ: 14-21 РОБОЧИХ ДНІВ.
          </p>
          <h2 className="text-[24px] font-normal  text-black/50 kharkiv">
            ЦІНА: 18 000 грн
          </h2>
        </div>
        <div className="  mt-[58px] lg:hidden">
          <h2 className="text-[14px] font-normal   kharkiv">
            ТЕРМІН РОЗРОБКИ: 10-14 РОБОЧИХ ДНІВ.
          </h2>
          <p className="text-[15px] block mt-2 font-normal kharkiv">
            ЦІНА: 18 000 ГРН
          </p>
        </div>
      </div>
    </div>
  );
}
