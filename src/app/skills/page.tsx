import Image from "next/image";

export default function Page() {
  return (
    <section className="w-full bg-white  lg:max-w-[1232px] lg:mx-auto mt-24 lg:mt-[124px] py-12">
      {/* Text section */}
      <div className="flex-1  w-full  ">
        <div className="flex lg:gap-[35px] gap-[68px] items-center mb-[26px] justify-center lg:justify-start">
          <h2 className="inline-block  px-6 py-2 mb-8 lg:text-[65px] text-[25px]  font-normal kharkiv">
            SOFT SKILLS
          </h2>
          <div className="relative lg:h-[46px] lg:w-[46px] h-[24px] w-[24px]">
            <Image src="/Group16.svg" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="flex w-full mb-[100px]  justify-center lg:justify-start">
          <div className="flex gap-4 lg:gap-0 lg:flex-row flex-col lg:flex-2 ">
            <div className="flex-1 relative p-6 text-center lg:text-[20px] text-[10px] min-w-[150px]">
              <div className="absolute left-4 right-4 top-0 h-[1px] bg-black" />
              <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-black" />
              <div className="absolute right-0 top-4 bottom-4 w-[1px] lg:w-0 bg-black" />
              багатозадачність
            </div>

            <div className="flex-1 relative p-6 text-center lg:text-[20px] text-[10px] min-w-[150px]">
              <div className="absolute left-4 right-4 top-0 h-[1px] bg-black" />
              <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-black" />
              <div className="absolute right-0 top-4 bottom-4 w-[1px] xl:bg-black" />
              стресостійкість
            </div>
          </div>

          <div className="flex gap-4 lg:flex-row flex-col lg:flex-1">
            <div className="flex-1 relative p-6 lg:text-[20px] text-[10px] text-center min-w-[150px]">
              <div className="absolute left-4 right-4 top-0 h-[1px] bg-black" />
              <div className="absolute left-0 top-4 bottom-4  xl:bg-black" />
              <div className="absolute right-0 top-4 bottom-4 w-[1px] bg-black text-[10px]" />
              увага до деталей
            </div>

            <div className="flex-1 relative p-6 lg:text-[20px] text-[10px] text-center lg:hidden min-w-[140px]">
              <div className="absolute left-4 right-4 top-0 h-[1px] bg-black" />
              <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-black" />
              <div className="absolute right-0 top-4 bottom-4 w-[1px] bg-black" />
              наполегливість
            </div>
          </div>
        </div>

        <section>
          <div className="lg:mb-8 mb-[26px] lg:justify-start flex items-center lg:gap-[35px] gap-[68px] justify-center">
            <h2 className="lg:text-[65px] text-[25px]  font-normal kharkiv">
              HARD SKILLS
            </h2>
            <div className="relative lg:h-[46px] lg:w-[46px] h-[24px] w-[24px]">
              <Image
                src="/Group16.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col  items-center justify-between lg:items-start lg:gap-[61] gap-[22] w-full ">
            <div className="flex items-center  gap-3">
              <div className="rounded-xl border lg:w-[79px] lg:h-[79px] w-[46px] h-[46px] flex justify-center items-center border-gray-300 px-4 py-2">
                <span className="text-[17px] lg:text-[35px] font-medium">
                  Ps
                </span>
              </div>
              <div className="rounded-xl border border-gray-300 px-4 py-2 lg:w-[79px] lg:h-[79px] w-[46px] h-[46px] flex justify-center items-center">
                <span className="text-[17px] lg:text-[35px] font-medium">
                  Ai
                </span>
              </div>
              <div className="rounded-xl border border-gray-300 px-4 py-2 lg:w-[79px] lg:h-[79px] w-[46px] h-[46px] flex justify-center items-center">
                <span className="text-[17px] lg:text-[35px]  font-medium">
                  Id
                </span>
              </div>
              <div className="rounded-xl lg:border lg:border-gray-300 px-4 lg:py-2 lg:w-[226px] lg:h-[79px] flex justify-center items-center">
                <p className="lg:w-[226px] w-[100px]  text-[15px] lg:text-[25px] font-medium text-right">
                  + Figma
                  <br className="lg:hidden" />
                  /Canva
                </p>
              </div>
            </div>
            <div className="xl:ml-4  w-[301px]  lg:text-[20px] text-[15px] text-[#838383] lg:text-right lg:w-[526px]">
              В роботі активно використовую різні сервіси Ai та на базовому
              рівні володію Ae.
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
