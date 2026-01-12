import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="h-[830px] w-full mb-[113px]"
        src="/iplantbasic/ip.png"
        alt="Головна ілюстрація iPlantBasic"
        width={1920}
        height={830}
        priority
      />

      <div className="max-w-[1193px] m-auto mb-[173px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 text-[65px] font-normal font-heading">
            IPLANTBASIC
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
            IPLANTBASIC -
          </span>

          <span className="font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify mb-[169px]">
            це інтернет-магазин у Об’єднаних Арабських Еміратах, який пропонує
            100% рослинні (plant-based) продукти харчування для веганів,
            вегетаріанців, флекситаріанців і всіх, хто хоче харчуватися
            здоровіше та стійкіше.
          </span>

          <span className="block mt-[30px] mb-[169px] font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify">
            iPlantBased - це про сучасне рослинне життя: чисті інгредієнти,
            продуманий вибір і стиль, який легко інтегрується у щоденний ритм
            великого міста.
          </span>
        </div>
      </div>

      <Image
        className="w-full"
        src="/iplantbasic/ip2.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex justify-center">
        <Image
          className="max-w-[791px]"
          src="/iplantbasic/ip1.png"
          alt=""
          width={791}
          height={500} // ≈ реальна пропорція — бажано уточнити
        />
      </div>

      <Image
        className="w-full"
        src="/iplantbasic/ip3.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full"
        src="/iplantbasic/ip4.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full"
        src="/iplantbasic/ip5.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex justify-center">
        <Image
          className="max-w-[575px] mb-[258px] mt-[230px]"
          src="/iplantbasic/ip6.png"
          alt=""
          width={575}
          height={400} // ≈ — підстав реальну висоту
        />
      </div>

      <Image
        className="w-full"
        src="/iplantbasic/ip7.png"
        alt=""
        width={1920}
        height={1080}
      />

      <div className="flex justify-center">
        <Image
          className="max-w-[909px] mb-[217px] mt-[218px]"
          src="/iplantbasic/ip8.png"
          alt=""
          width={909}
          height={600} // ≈ — підстав реальну висоту
        />
      </div>

      <Image
        className="w-full"
        src="/iplantbasic/ip9.png"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
