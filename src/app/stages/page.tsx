import Image from "next/image";

export default function Page() {
  return (
    <div className="h-[calc(100vh-60px - 21px)]  lg:mt-[121px] mt-[150px]">
      <div className="max-w-[1232px] lg:mx-auto min-h-[80vh] mx-[27px] lg:px-6">
        <div className="flex flex-col lg:space-x-12">
          <div className="w-full ">
            <div className="flex gap-[28px] items-center mb-12 pb-2">
              <h1 className="lg:text-[65px] text-[25px] font-normal kharkiv">
                ПОЛІГРАФІЯ
              </h1>
              <div className="relative lg:h-[46px] lg:w-[46px] h-[24px] w-[24px]">
                <Image
                  src="/Group16.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-0 gap-[32px]">
              <div className="">
                <div className="w-[46px] h-[46px] rounded-full border border-black flex items-center justify-center lg:mb-5 mb-2">
                  1
                </div>
                <p className="lg:text-[20px] text-[15px] font-bold lg:mb-5 mb-1">
                  Знайомство з проектом
                </p>
                <p className="text-[15px] lg:text-[20px]  font-normal max-w-[305px]">
                  Затвердження тз; Затвердження дедлайнів; <br />
                  Внесення передплати 50%.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="">
                  <div className="w-[46px] h-[46px] rounded-full border border-black flex items-center justify-center lg:mb-5 mb-2">
                    2
                  </div>
                  <p className="lg:text-[20px] text-[15px] font-bold lg:mb-5 mb-1">
                    Робота з візуалом
                  </p>
                  <p className="text-[15px] lg:text-[20px]  font-normal max-w-[323px]">
                    Ескізування та затвердження мудборду; <br /> Розробка
                    варіантів проекту та внесення правок (за потреби);
                  </p>
                </div>
              </div>{" "}
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="">
                  <div className="w-[46px] h-[46px] rounded-full border border-black flex items-center justify-center lg:mb-5 mb-2">
                    3
                  </div>
                  <p className="lg:text-[20px] text-[15px] font-bold lg:mb-5 mb-1">
                    Здача проекту
                  </p>
                  <p className="text-[15px] lg:text-[20px]  font-normal max-w-[415px]">
                    Презентація кінцевого варіанту роботи; <br /> Внесення
                    залишку 50% оплати; <br />
                    Передача всіх файлів та презентацій.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
