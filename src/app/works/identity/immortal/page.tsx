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

      <div className="max-w-[1193px] m-auto mb-[37px] px-[27px]">
        <div className="flex gap-[35px] items-center mb-[22px]">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
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

        <p
          className="
            font-montserrat
            font-semibold
            lg:text-[25px]
            text-[12px]
            leading-[100%]
            tracking-[0]
            text-justify"
        >
          IMMORTAL SCHOOL -{" "}
          <span className="lg:font-semibold font-normal">
            це онлайн школа англійської мови.
          </span>
        </p>

        <p
          className="
            lg:mb-[169px] mb-[63px]
            font-montserrat
            font-normal
            lg:text-[25px]
            text-[12px]
            leading-[100%]
            tracking-[0]
            text-justify"
        >
          Це не просто місце для вивчення мови, а простір, де не страшно
          помилятися. Тут підтримують на кожному кроці, тому що помилки - це
          частина розвитку.
          <p className="mt-2 lg:mt-0">
            Основна аудиторія - молоді люди (18-35 років), які активно прагнуть
            вивчати англійську мову для реального життя - життя закордоном,
            подорожей, роботи, спілкування з іноземцями. Це студенти, молоді
            професіонали, підприємці та фрілансери, 
          </p>
        </p>
      </div>

      {/* Мобільна версія */}
      <Image
        className="w-full mb-6 lg:hidden"
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

      {/* Мобільні зображення */}
      <div className="block lg:hidden">
        <Image
          src="/immortal/im1.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immortal/im2.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <div className="flex justify-center">
          <Image
            className="max-w-[340px] my-[25px]"
            src="/immortal/im3.png"
            alt=""
            width={340}
            height={400}
          />
        </div>
        <Image
          src="/immortal/im4.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immortal/im5.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immortal/im6.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immortal/im7.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immortal/im8.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
        <Image
          src="/immortal/im9.png"
          alt=""
          width={390}
          height={800}
          className="w-full"
        />
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
        <Image
          src="/immortal/imm5.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
        <Image
          src="/immortal/imm6.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />

        <div className="flex justify-center">
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

        <div className="flex justify-center">
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
