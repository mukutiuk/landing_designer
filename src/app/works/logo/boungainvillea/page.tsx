import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="h-[830px] w-full mb-[113px]"
        src="/boungainvillea/b1.png"
        alt=""
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto mb-[37px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 text-[65px] font-normal">
            BOUGAINVILLEA
          </h2>
          <Image
            className="h-[46px] w-[46px]"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-montserrat font-semibold text-[25px] leading-[100%] tracking-[0] text-justify">
            BOUGAINVILLEA -
          </span>
          <span className="font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify">
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
        className="w-full mt-[165px]"
        src="/boungainvillea/b2.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex w-full justify-center mt-[200px] mb-[200px]">
        <Image
          className="w-[666px]"
          src="/boungainvillea/b3.png"
          alt=""
          width={666}
          height={800} // приблизно — краще замінити на реальну пропорцію
        />
      </div>

      <Image
        src="/boungainvillea/b4.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <Image
        src="/boungainvillea/b5.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <Image
        src="/boungainvillea/b6.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <Image
        src="/boungainvillea/b7.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <Image
        src="/boungainvillea/b8.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <Image
        src="/boungainvillea/b9.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
      <Image
        src="/boungainvillea/b10.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full"
      />
    </div>
  );
}
