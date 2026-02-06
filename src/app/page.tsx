import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#fff] flex flex-col max-w-[1232px] mx-auto mb-10">
      <section className="lg:mt-[118px] mt-[70px]  w-full bg-[#fff]/90 flex flex-col justify-center lg:min-h-[60vh] relative overflow-hidden mb-[100px] lg:mb-0">
        <h1
          className="  text-[40px] sm:text-[80px] lg:text-[144px]
  font-normal
  kharkiv
  text-center lg:text-left
  relative
  -left-[6px] sm:-left-[8px] lg:-left-[12px] "
        >
          PORTFOLIO
        </h1>
        <div className="lg:flex-row flex-col flex lg:gap-[68px] gap-[50px] lg:mt-[33px] mt-[10px]">
          <Image
            src="/Rectangle1.svg"
            alt=""
            width={365}
            height={495}
            className="hidden lg:block object-cover"
          />

          <Image
            src="/smP.png"
            alt=""
            width={768}
            height={300}
            className="block lg:hidden w-full  object-contain"
          />
          <div className="lg:w-[597px] px-[55px] lg:px-0">
            <div className="flex justify-between items-center lg:mb-8">
              <h3 className="font-normal lg:text-[45px] text-[25px] kharkiv">
                ABOUT ME
              </h3>
              <Image
                width={17}
                height={17}
                className="h-[17px] w-[17px] lg:h-[34px] lg:w-[34px]"
                src="/Group16.svg"
                alt=""
              />
            </div>
            <p className="text-[15px]  lg:text-[20px]  font-normal mb-[25px] lg:mb-[100px] lg:hidden">
              Привіт!  Мене звати Аліна і я графічна дизайнерка. Кожен день я
              дізнаюся щось нове і вдосконалюю свої навички. 
            </p>
            <p className="text-[15px]  lg:text-[20px]  font-normal mb-[25px] lg:mb-[100px] hidden lg:block leading-[100%] tracking-[0] text-justify">
              Привіт! 
              <br /> Мене звати Аліна і я графічна дизайнерка зі Львова. Кожен
              день я дізнаюся щось нове і вдосконалюю свої навички. Обожнюю
              каву, Львів та свою роботу. Відкрита завжди до нових пропозицій чи
              викликів.{" "}
            </p>
            <div className="  flex lg:gap-[67px] gap-[10px] justify-between items-center centers">
              <div className="lg:w-[180px] flex lg:flex-col gap-2 items-left">
                <p className="text-[25px] lg:text-[45px]  font-normal kharkiv">
                  {" "}
                  2,5+
                </p>
                <p className="lg:text-[20px] text-[10px]">
                  років досвіду{" "}
                  <p className="hidden lg:block">( комерційного )</p>
                </p>
              </div>
              <div className="min-w-[1px] bg-[#000] self-stretch"></div>
              <div className="lg:w-[250px] flex lg:flex-col gap-2 items-left">
                <p className="text-[25px]  lg:text-[45px]   font-normal kharkiv">
                  20+
                </p>
                <p className="text-[20px] hidden lg:block">
                  реалізованих проектів для клієнтів
                </p>
                <p className="text-[10px] lg:hidden">реалізованих проектів </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
