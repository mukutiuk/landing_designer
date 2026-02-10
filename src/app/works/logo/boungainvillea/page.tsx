import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="h-[830px] w-full mb-[113px] hidden lg:block"
        src="/boungainvillea/b1.png"
        alt=""
        width={1920}
        height={830}
        priority
      />

      <Image
        className=" w-full mb-[37px]  mt-[113px] lg:hidden"
        src="/boungainvillea/i1.jpg"
        alt=""
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto mb-[37px ] px-[27px]">
        <div className="flex gap-[35px] items-center mb-[20px]">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            BOUGAINVILLEA
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
          <span className="font-normal lg:text-[25px] text-[12px] leading-[1.2] hyphens-auto  text-justify">
            це не просто магазин, а простір, де кожна покупка стає кроком до
            гармонії з собою та навколишнім світом. Основний клієнт
            Bougainvillea – сучасна жінка, яка цінує стиль, якість та комфорт.
            Основний продукт - продаж преміальних брендів білизни, купальників,
            одягу.
          </span>
        </div>

        {/* Порожні блоки, які були в оригіналі */}
        <div className="flex items-center flex-col"></div>
        <div className="flex justify-between"></div>
      </div>

      <Image
        className="w-full mt-[165px] hidden lg:block"
        src="/boungainvillea/b2.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full mt-[165px]  lg:hidden"
        src="/boungainvillea/i2.jpg"
        alt=""
        width={1920}
        height={1080}
      />

      <div className=" w-full justify-center mt-[200px] mb-[200px] hidden lg:flex">
        <Image
          className="w-[666px]"
          src="/boungainvillea/b3.png"
          alt=""
          width={666}
          height={800}
        />
      </div>

      <div className="flex w-full justify-center mt-[152px] mb-[200px] lg:hidden">
        <Image
          className="w-[232px]"
          src="/boungainvillea/i3.jpg"
          alt=""
          width={666}
          height={800}
        />
      </div>

      <Image
        src="/boungainvillea/b4.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full hidden lg:block"
      />
      <Image
        src="/boungainvillea/i4.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <div className="flex items-center justify-center my-[75px]">
        <Image
          src="/boungainvillea/i5.jpg"
          alt=""
          width={1920}
          height={1080}
          className="w-full lg:hidden max-w-[402px]"
        />
      </div>

      <Image
        src="/boungainvillea/i6.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <div className="flex items-center justify-center lg:hidden">
        <Image
          src="/boungainvillea/i7.jpg"
          alt=""
          width={1920}
          height={1080}
          className="w-full lg:hidden max-w-[309px] py-[69px]"
        />
      </div>

      <Image
        src="/boungainvillea/i8.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <Image
        src="/boungainvillea/i9.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <Image
        src="/boungainvillea/i10.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <Image
        src="/boungainvillea/i11.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <Image
        src="/boungainvillea/i12.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <Image
        src="/boungainvillea/i13.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full lg:hidden"
      />
      <Image
        src="/boungainvillea/b5.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full  hidden lg:block"
      />
      <Image
        src="/boungainvillea/b6.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full  hidden lg:block"
      />
      <Image
        src="/boungainvillea/b7.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full  hidden lg:block"
      />
      <Image
        src="/boungainvillea/b8.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full  hidden lg:block"
      />
      <Image
        src="/boungainvillea/b9.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full  hidden lg:block"
      />
      <Image
        src="/boungainvillea/b10.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full  hidden lg:block"
      />
    </div>
  );
}
