import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-[100px]">
      <Image
        className="h-[830px] w-full mb-[113px] hidden lg:block"
        src="/cocon/cocon1.png"
        alt=""
        width={1920} // приблизна ширина для оптимізації
        height={830} // відповідна висота
      />

      <Image
        className="h-[250px] w-full mb-[37px] block lg:hidden"
        src="/cocon/coS.png"
        alt=""
        width={1080} // приблизна ширина
        height={250}
      />

      <div className="max-w-[1193px] m-auto mb-[37px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 lg:mb-8 mb-[22px] lg:text-[65px] text-[25px] font-normal">
            COCON LUXE
          </h2>
          <Image
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        <p className="lg:mb-[169px] mb-3 font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          Cocon - це інтернет-магазин преміум-класу, який задовольняє вимоги
          найвибагливіших клієнтів.
        </p>

        <p className="mb-[169px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify hidden lg:block">
          Cпеціалізується на елітному асортименті: купальники, пляжний одяг,
          жіноча та чоловіча білизна, лoungewear, домашній одяг, аксесуари та
          товари для дітей. Cocon працює з провідними люксовими брендами з
          Італії, Франції, США, що підкреслює преміум-напрямок.
        </p>

        <p className="mb-[25px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify block lg:hidden">
          Cпеціалізується на елітному асортименті: купальники, пляжний одяг,
          жіноча та чоловіча білизна, домашній одяг.
        </p>

        <div className="flex items-center flex-col mb-[91px]">
          <span className="lg:text-[25px] text-[10px]">Фавікон</span>
          <Image
            className="lg:h-[449px] lg:max-w[1039px] max-w-[221px]"
            src="/cocon/cocon2.png"
            alt=""
            width={1039} // приблизна ширина
            height={449} // висота для lg
          />
        </div>

        <div className="flex lg:justify-between flex-col">
          <div className="flex items-center flex-col mb-[66px] lg:mb-[0]">
            <p className="font-normal lg:text-[25px] text-[10px] lg:mb-[87px] mb-[11px]">
              Основний логотип
            </p>
            <Image
              className="lg:w-[440px] lg:h-[84px] w-[155px] h-[30px]"
              src="/cocon/cocon3.svg"
              alt=""
              width={440}
              height={84}
            />
          </div>

          <div className="flex items-center flex-col">
            <p className="font-normal lg:text-[25px] text-[10px] lg:mb-[87px] mb-[11px]">
              Логотип з дискрипторем
            </p>
            <Image
              className="lg:w-[440px] lg:h-[133px] w-[155px] h-[47px]"
              src="/cocon/cocon4.svg"
              alt=""
              width={440}
              height={133}
            />
          </div>
        </div>

        <Image
          className="hidden lg:block"
          src="/cocon/cocon5.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="block lg:hidden mx-auto mt-[77px]"
          src="/cocon/co5.png"
          alt=""
          width={1080}
          height={400}
        />
      </div>

      <div className="lg:hidden">
        <Image
          className="w-full"
          src="/cocon/co4.png"
          alt=""
          width={1080}
          height={500}
        />
        <Image
          className="w-[316px] mx-auto"
          src="/cocon/co6.png"
          alt=""
          width={316}
          height={200}
        />
        <Image
          className="w-full"
          src="/cocon/co7.png"
          alt=""
          width={1080}
          height={500}
        />
        <Image
          className="w-[410px] mx-auto"
          src="/cocon/co8.png"
          alt=""
          width={410}
          height={250}
        />
        <Image
          className="w-full"
          src="/cocon/co9.png"
          alt=""
          width={1080}
          height={500}
        />
        <Image
          className="w-full"
          src="/cocon/co10.png"
          alt=""
          width={1080}
          height={500}
        />
        <Image
          className="w-full"
          src="/cocon/co11.png"
          alt=""
          width={1080}
          height={500}
        />
      </div>

      <div className="hidden lg:block">
        <Image
          className="w-full"
          src="/cocon/cocon6.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/cocon/cocon7.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/cocon/cocon8.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/cocon/cocon9.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/cocon/cocon10.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/cocon/cocon11.png"
          alt=""
          width={1920}
          height={600}
        />
      </div>
    </div>
  );
}
