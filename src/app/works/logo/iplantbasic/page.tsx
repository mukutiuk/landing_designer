import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="h-[830px] w-full mb-[113px] hidden lg:block"
        src="/iplantbasic/ip.png"
        alt="Головна ілюстрація iPlantBasic"
        width={1920}
        height={830}
        priority
      />

      <Image
        className="h-[250px] mt-[101px] w-full mb-[37px] lg:hidden"
        src="/iplantbasic/i1.jpg"
        alt="Головна ілюстрація iPlantBasic"
        width={400}
        height={250}
        priority
      />

      <div className="max-w-[1193px] m-auto lg:mb-[173px] mb-[43px] px-[22px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-6 lg:text-[65px] text-[25px] font-normal">
            IPLANTBASIC
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
          <span className="font-montserrat font-semibold text-[25px] leading-[100%] tracking-[0] text-justify hidden lg:block">
            IPLANTBASIC -
          </span>

          <span className="mt-[20px] lg:mb-[144px] mb-[8px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
            це інтернет-магазин у Об’єднаних Арабських Еміратах, який пропонує
            100% рослинні (plant-based) продукти харчування для веганів,
            вегетаріанців, флекситаріанців і всіх, хто хоче харчуватися
            здоровіше та стійкіше.
          </span>

          <span className="mt-[20px] lg:mb-[144px] mb-[38px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
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

      <div className="flex justify-center my-[150px]">
        <Image
          className="max-w-[791px] lg:block hidden"
          src="/iplantbasic/ip1.png"
          alt=""
          width={791}
          height={500}
        />

        <Image
          className="w-[287px] lg:hidden"
          src="/iplantbasic/i2.jpg"
          alt=""
          width={287}
          height={127}
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
        className="w-full hidden lg:block"
        src="/iplantbasic/ip4.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full  lg:hidden"
        src="/iplantbasic/i3.jpg"
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
          className="max-w-[575px] mb-[258px] mt-[230px] hidden lg:block"
          src="/iplantbasic/ip6.png"
          alt=""
          width={575}
          height={400}
        />
        <Image
          className="max-w-[221px] mb-[110px] mt-[110px] lg:hidden"
          src="/iplantbasic/i4.jpg"
          alt=""
          width={221}
          height={48}
        />
      </div>

      <Image
        className="w-full  hidden lg:block"
        src="/iplantbasic/ip7.png"
        alt=""
        width={1920}
        height={1080}
      />

      <Image
        className="w-full lg:hidden"
        src="/iplantbasic/i5.jpg"
        alt=""
        width={403}
        height={422}
      />

      <div className="flex justify-center">
        <Image
          className="max-w-[909px] mb-[217px] mt-[218px] hidden lg:block"
          src="/iplantbasic/ip8.png"
          alt=""
          width={909}
          height={600}
        />

        <Image
          className="max-w-[263px] mb-[117px] mt-[118px] lg:hidden"
          src="/iplantbasic/i6.jpg"
          alt=""
          width={263}
          height={133}
        />
      </div>

      <Image
        className="w-full hidden lg:block"
        src="/iplantbasic/ip9.png"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full  lg:hidden"
        src="/iplantbasic/i7.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <Image
        className="w-full  lg:hidden"
        src="/iplantbasic/i8.jpg"
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
}
