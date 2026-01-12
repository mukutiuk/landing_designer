import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="h-[830px] w-full mb-[113px]"
        src="/immortal/imm.png"
        alt=""
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto mb-[37px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 text-[65px] font-normal">
            IMMORTAL SCHOOL
          </h2>
          <Image
            className="h-[46px] w-[46px]"
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
            text-[25px]
            leading-[100%]
            tracking-[0]
            text-justify"
        >
          IMMORTAL SCHOOL - це онлайн школа англійської мови.
        </p>

        <p
          className="
            mb-[169px]
            font-montserrat
            font-normal
            text-[25px]
            leading-[100%]
            tracking-[0]
            text-justify"
        >
          Це не просто місце для вивчення мови, а простір, де не страшно
          помилятися. Тут підтримують на кожному кроці, тому що помилки - це
          частина розвитку. Основна аудиторія - молоді люди (18-35 років), які
          активно прагнуть вивчати англійську мову для реального життя - життя
          закордоном, подорожей, роботи, спілкування з іноземцями. Це студенти,
          молоді професіонали, підприємці та фрілансери.
        </p>
      </div>

      <div className="flex items-center flex-col">
        <Image
          className="mb-[158px]"
          src="/immortal/imm1.png"
          alt="Основний логотип Immortal School"
          width={449}
          height={200} // ≈ реальна пропорція — підкорегуй за потреби
        />

        <div className="w-full bg-black h-[1px] mb-[131px]" />

        <Image
          className="mb-[170px]"
          src="/immortal/imm2.png"
          alt="Додатковий формат логотипу"
          width={449}
          height={180} // ≈ реальна пропорція — підкорегуй за потреби
        />
      </div>

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
          height={700} // ≈ — підстав реальну висоту
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
          height={650} // ≈ — підстав реальну висоту
        />
      </div>
    </div>
  );
}
