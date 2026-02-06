import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-[110px]">
      <Image
        className="lg:h-[830px] h-[250px] w-full lg:mb-[113px] mb-[37px]"
        src="/immortal/imm.png"
        alt=""
        width={1920} // або будь-яка ширина, яка підходить під твій макет
        height={830} // висота для десктопної версії (або більша)
        priority // можна додати, якщо це головне зображення на сторінці
      />

      <div className="max-w-[1193px] mx-auto mb-[37px] px-[27px]">
        <div className="flex gap-[35px] items-center mb-[22px]">
          <h2 className="kharkiv inline-block px-6 py-2 lg:text-[65px] text-[25px] font-normal">
            IMMORTAL SCHOOL
          </h2>
          <Image
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        {/* Заголовний опис */}
        <p className="font-montserrat lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
          <span className="font-semibold">IMMORTAL SCHOOL — </span>
          це онлайн школа англійської мови.
        </p>

        {/* Основний текст */}
        <p className="mt-2 font-montserrat lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
          Це не просто місце для вивчення мови, а простір, де не страшно
          помилятися. Тут підтримують на кожному кроці, тому що помилки — це
          частина розвитку.
        </p>

        <p className="mt-2 lg:mb-[169px] mb-[63px] font-montserrat lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
          Основна аудиторія — молоді люди (18–35 років), які активно прагнуть
          вивчати англійську мову для реального життя: життя за кордоном,
          подорожей, роботи, спілкування з іноземцями. Це студенти, молоді
          професіонали, підприємці та фрілансери.
        </p>
      </div>

      {/* Мобільна версія */}
      <Image
        className="w-full  lg:hidden"
        src="/immortal/imme1.png"
        alt=""
        width={390}
        height={600} // приблизно, підстав свій розмір
      />

      <div className="flex items-center flex-col">
        <p className="lg:hidden text-[10px] mb-[35px]">Основний логотип</p>
        <Image
          className="lg:mb-[158px] mb-[64px] w-[249px] lg:w-[449px]"
          src="/immortal/imm1.png"
          alt="Основний логотип"
          width={449}
          height={200} // підстав реальну пропорцію
        />

        <div className="w-full bg-black h-[1px] mb-[131px]" />

        <p className="lg:hidden text-[10px] mb-[35px]">
          Додатковий формат логотипу
        </p>

        <Image
          className="lg:mb-[170px] mb-[84px] w-[172px] lg:w-[449px]"
          src="/immortal/imm2.png"
          alt="Додатковий логотип"
          width={449}
          height={180} // підстав реальну пропорцію
        />
      </div>
      <Image
        src="/immoral_3.jpg"
        alt=""
        width={390}
        height={800}
        className="w-full block lg:hidden"
      />
      {/* Мобільні зображення */}
      <div className="block lg:hidden">
        <Image
          src="/immoral2.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immoral_4.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        {/* <div className="flex justify-center">
          <Image
            className="max-w-[340px] my-[25px]"
            src="/immortal/im3.png"
            alt=""
            width={340}
            height={400}
          />
        </div> */}
        <Image
          src="/immoral_5.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immoral_6.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immoral_10.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immoral_7.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immoral_9.jpg"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        {/* <Image
          src="/immortal/im9.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        /> */}
      </div>

      {/* Десктопна версія */}
      <div className="hidden lg:block">
        <Image
          src="/immortal/imme1.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
        <Image
          src="/immortal/imme.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
        <Image
          src="/immortal/imm3.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
        <Image
          src="/immortal/imm4.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
        <Image
          src="/immortal/im.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
        {/* <Image
          src="/immortal/imm5.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        /> */}
        <Image
          src="/immortal/imm6.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />

        <div className="flex justify-center my-[130px]">
          <Image
            className="max-w-[1223px]"
            src="/immortal/imm7.png"
            alt=""
            width={1223}
            height={800} // підстав реальну
          />
        </div>

        <Image
          src="/immortal/imm8.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />

        <div className="flex justify-center my-[130px]">
          <Image
            className="max-w-[1156px]"
            src="/immortal/imm9.png"
            alt=""
            width={1156}
            height={700} // підстав реальну
          />
        </div>
      </div>
    </div>
  );
}
