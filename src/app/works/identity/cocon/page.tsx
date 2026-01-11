import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-[100px]">
      <img
        className="h-[830px] w-full mb-[113px] hidden lg:block"
        src="/cocon/cocon1.png"
        alt=""
      />

      <img
        className="h-[250px] w-full mb-[37px] block lg:hidden"
        src="/cocon/coS.png"
        alt=""
      />
      {/* <div className="mt-[113px]">COCON LUXE</div> */}
      <div className="max-w-[1193px] m-auto mb-[37px] px-[27px]">
        <div className="flex gap-[35px] items-center  ">
          <h2 className="kharkiv inline-block  px-6 py-2 lg:mb-8 mb-[22px] lg:text-[65px] text-[25px] font-normal">
            COCON LUXE
          </h2>
          <img
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
          />
        </div>
        <p
          className="  lg:mb-[169px] mb-3
  font-montserrat
  font-semibold
  lg:text-[25px]
  text-[12px]
  leading-[100%]
  tracking-[0]
  text-justify"
        >
          Cocon - це інтернет-магазин преміум-класу, який задовольняє вимоги
          найвибагливіших клієнтів.
        </p>
        <p
          className=" mb-[169px]
  font-montserrat
  font-normal
  lg:text-[25px]
  text-[12px]
  leading-[100%]
  tracking-[0]
  text-justify]
  hidden
  lg:block
  "
        >
          Cпеціалізується на елітному асортименті: купальники, пляжний одяг,
          жіноча та чоловіча білизна, лoungewear, домашній одяг, аксесуари та
          товари для дітей. Cocon працює з провідними люксовими брендами з
          Італії, Франції, США, що підкреслює преміум-напрямок.
        </p>

        <p
          className=" mb-[25px]
  font-montserrat
  font-normal
  lg:text-[25px]
  text-[12px]
  leading-[100%]
  tracking-[0]
  text-justify]
  block
  lg:hidden
  "
        >
          Cпеціалізується на елітному асортименті: купальники, пляжний одяг,
          жіноча та чоловіча білизна, домашній одяг.
        </p>
        <div className="flex items-center flex-col mb-[91px]">
          <span className="lg:text-[25px] text-[10px]">Фавікон</span>
          <img
            className="lg:h-[449px] lg:max-w[1039px] max-w-[221px]"
            src="/cocon/cocon2.png"
            alt=""
          />
        </div>
        <div className="flex  lg:justify-between flex-col">
          <div className="flex items-center flex-col mb-[66px] lg:mb-[0]">
            <p className="font-normal lg:text-[25px] text-[10px] lg:mb-[87px] mb-[11px]">
              Основний логотип
            </p>
            <img
              className="lg:w-[440px] lg:h-[84px] w-[155px] h-[30px] "
              src="/cocon/cocon3.svg"
              alt=""
            />
          </div>
          <div className="flex items-center flex-col">
            <p className="font-normal lg:text-[25px] text-[10px] lg:mb-[87px] mb-[11px]">
              Логотип з дискрипторем
            </p>
            <img
              className="lg:w-[440px] lg:h-[133px] w-[155px] h-[47px]"
              src="/cocon/cocon4.svg"
              alt=""
            />
          </div>
        </div>
        <img className="hidden lg:block" src="/cocon/cocon5.png" alt="" />
        <img
          className="block lg:hidden mx-auto mt-[77px]"
          src="/cocon/co5.png"
          alt=""
        />
      </div>
      <img className="w-full" src="/cocon/cocon6.png" alt="" />
      <img className="w-full" src="/cocon/cocon7.png" alt="" />
      <img className="w-full" src="/cocon/cocon8.png" alt="" />
      <img className="w-full" src="/cocon/cocon9.png" alt="" />
      <img className="w-full" src="/cocon/cocon10.png" alt="" />
      <img className="w-full" src="/cocon/cocon11.png" alt="" />
    </div>
  );
}
