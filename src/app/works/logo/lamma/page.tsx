import Link from "next/link";

export default function Page() {
  return (
    <div>
      <img
        className="h-[830px] w-full mb-[113px]"
        src="/lamma/lamma.png"
        alt=""
      />
      <div className="max-w-[1193px] m-auto mb-[140px]">
        <div className="flex gap-[35px] items-center  ">
          <h2 className="kharkiv inline-block  px-6 py-2 mb-8 text-[65px] font-normal">
            LLAMA ENGLISH
          </h2>
          <img className="h-[46px] w-[46px]" src="/Group16.svg" alt="" />
        </div>
        <span className=" font-montserrat font-semibold text-[25px] leading-[100%] tracking-[0] text-justify">
          LLAMA english -
        </span>
        <span className=" mb-[169px] font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify] ">
          {" "}
          це бренд, який робить вивчення англійської мови простим, дружнім і
          зрозумілим. В основі бренду - ідея комфортного навчання без страху
          помилок і зайвого тиску. Символ лами у логотипі передає характер LLAMA
          english: спокій, доброзичливість і впевненість у поступовому
          результаті. Тут англійська сприймається не як складний обов’язок, а як
          природний процес і частина щоденного життя.
        </span>

        {/* <div className="flex  justify-between">
          <div className="flex items-center flex-col">
            <p className="font-normal text-[25px] mb-[87px]">
              Основний логотип
            </p>
            <img
              className="w-[440px] h-[84px] "
              src="/cocon/cocon3.svg"
              alt=""
            />
          </div>
          <div className="flex items-center flex-col">
            <p className="font-normal text-[25px] mb-[87px]">
              Основний логотип
            </p>
            <img
              className="w-[440px] h-[133px]"
              src="/cocon/cocon4.svg"
              alt=""
            />
          </div>
        </div> */}
        {/* <img src="/cocon/cocon5.png" alt="" /> */}
      </div>
      <img className="w-full mb-[81px]" src="/lamma/lam1.png" alt="" />
      <div className="max-w-[1193px] m-auto mb-[140px]">
        <span className=" font-montserrat font-semibold text-[25px] leading-[100%] tracking-[0] text-justify">
          Ідея:
        </span>
        <span className=" mb-[169px] font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify] ">
          {" "}
          у верхній частині розміщене коло теплого жовто-золотого кольору з
          білим силуетом лами в профіль. Лама асоціюється з доброзичливістю,
          спокоєм і легкістю навчання.
        </span>
      </div>
      <img className="w-full " src="/lamma/lam2.png" alt="" />
      <img className="w-full " src="/lamma/lam3.png" alt="" />
      <div className="flex justify-center mt-[144px] mb-[80px]">
        <img className="w-full max-w-[725px]" src="/lamma/lam4.png" alt="" />
      </div>
      <img className="w-full " src="/lamma/lam5.png" alt="" />
      <div className="flex justify-center mt-[135px] mb-[100px]">
        <img className="w-full max-w-[905px]" src="/lamma/lam6.png" alt="" />
      </div>
      <img className="w-full " src="/lamma/lam7.png" alt="" />
      <div className="flex justify-center mt-[161px] mb-[135px]">
        <img className="w-full max-w-[1037px]" src="/lamma/lam8.png" alt="" />
      </div>
      <img className="w-full " src="/lamma/lam9.png" alt="" />
      <img className="w-full " src="/lamma/lam10.png" alt="" />
    </div>
  );
}
