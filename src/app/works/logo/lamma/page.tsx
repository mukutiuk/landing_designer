import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] mt-[100px] w-full lg:mb-[113px] mb-[37px]"
        src="/lamma/lamma.png"
        alt="Головна ілюстрація LLAMA English"
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto lg:mb-[140px] mb-[50px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            LLAMA ENGLISH
          </h2>
          <Image
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
            LLAMA english -
          </span>
          <span className="font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify lg:mb-[169px] mb-[50px]">
            це бренд, який робить вивчення англійської мови простим, дружнім і
            зрозумілим. В основі бренду - ідея комфортного навчання без страху
            помилок і зайвого тиску. Символ лами у логотипі передає характер
            LLAMA english: спокій, доброзичливість і впевненість у поступовому
            результаті. Тут англійська сприймається не як складний обов’язок, а
            як природний процес і частина щоденного життя.
          </span>
        </div>
      </div>

      <Image
        className="w-full mb-[81px]"
        src="/lamma/lam1.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="max-w-[1193px] m-auto lg:mb-[140px] mb-[50px] px-[27px]">
        <span className="font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          Ідея:
        </span>
        <span className="font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          {" "}
          у верхній частині розміщене коло теплого жовто-золотого кольору з
          білим силуетом лами в профіль. Лама асоціюється з доброзичливістю,
          спокоєм і легкістю навчання.
        </span>
      </div>

      <Image
        className="w-full lg:my-0 my-[130px]"
        src="/lamma/lam2.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full"
        src="/lamma/lam3.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex justify-center mt-[144px] mb-[80px]">
        <Image
          className="lg:w-full lg:max-w-[725px] w-[232px]"
          src="/lamma/lam4.png"
          alt=""
          width={725}
          height={500} // ≈ реальна пропорція — підкорегуй за потреби
        />
      </div>

      <Image
        className="w-full"
        src="/lamma/lam5.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex justify-center mt-[135px] mb-[100px]">
        <Image
          className="lg:w-full max-w-[905px] w-[232px]"
          src="/lamma/lam6.png"
          alt=""
          width={905}
          height={600} // ≈ — підстав реальну
        />
      </div>

      <Image
        className="w-full"
        src="/lamma/lam7.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex justify-center mt-[161px] mb-[135px]">
        <Image
          className="lg:w-full max-w-[1037px] w-[285px]"
          src="/lamma/lam8.png"
          alt=""
          width={1037}
          height={650} // ≈ — підстав реальну
        />
      </div>

      <Image
        className="w-full"
        src="/lamma/lam9.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full"
        src="/lamma/lam10.png"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
