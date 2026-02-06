import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="lg:h-[830px] h-[250px] mt-[122px] w-full lg:mb-[113px] mb-[37px]"
        src="/medline/medline.png"
        alt=""
        width={1920}
        height={830}
      />

      <div className="max-w-[1193px] mx-auto mb-[37px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal">
            MEDLINE NAILS
          </h2>
          <Image
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        {/* Опис студії */}
        <p className="mt-[20px] font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
          <span>MEDLINE — </span>
          це офлайн студія та школа манікюру та педикюру, що знаходиться у
          Львові.
        </p>

        {/* Розробка логотипу */}
        <p className="mt-[20px] lg:mb-[144px] mb-[38px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[1.25] text-justify hyphens-auto">
          Розроблено редизайн логотипу. Акцент зроблено на слові "MEDLINE"
          завдяки великому розміру та контрасту з нижнім рядком. Добре
          читається, підкреслює як студійну, так і освітню функцію бізнесу,
          гарно масштабується.
        </p>
      </div>

      <div className="block lg:hidden">
        <Image
          className=" mx-auto "
          src="/medline_2.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_4.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_3.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_5.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_8.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_9.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_6.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline_7.jpg"
          alt=""
          width={1080}
          height={600}
        />
        {/* <Image
          className="w-full"
          src="/medline/m11.png"
          alt=""
          width={1080}
          height={600}
        /> */}
      </div>

      <div className="hidden lg:block">
        <Image
          className="w-full"
          src="/medline/medline1.png"
          alt=""
          width={1920}
          height={600}
        />
        <div className="flex w-full justify-center my-[180px]">
          <Image
            className="max-w-[945px] max-h-[437px]"
            src="/medline/medline3.png"
            alt=""
            width={945}
            height={437}
          />
        </div>
        <Image
          className="w-full"
          src="/medline/medline4.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/medline5.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/medline6.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/medline7.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/medline8.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/medline8.png"
          alt=""
          width={1920}
          height={600}
        />
      </div>
    </div>
  );
}
