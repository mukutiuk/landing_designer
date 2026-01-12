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

      <div className="max-w-[1193px] m-auto mb-[37px] px-[27px]">
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

        <p className="mt-[20px] lg:mb-[169px] mb-3 font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          MEDLINE - це офлайн студія та школа манікюру та педикюру, що
          знаходиться у Львові.
        </p>

        <p className="mt-[20px] lg:mb-[169px] mb-[144px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          Розроблено редизайн логотипу. Акцент зроблено на слові
          &quot;MEDLINE&quot; завдяки великому розміру та контрасту з нижнім
          рядком. Добре читається, підкреслює як студійну, так і освітню функцію
          бізнесу, гарно масштабується.
        </p>
      </div>

      <div className="block lg:hidden">
        <Image
          className="w-[343px] mx-auto mb-[144px]"
          src="/medline/m2.png"
          alt=""
          width={343}
          height={400}
        />
        <Image
          className="w-full"
          src="/medline/m3.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m4.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m5.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m6.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m7.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m9.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m10.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/medline/m11.png"
          alt=""
          width={1080}
          height={600}
        />
      </div>

      <div className="hidden lg:block">
        <Image
          className="w-full"
          src="/medline/medline1.png"
          alt=""
          width={1920}
          height={600}
        />
        <div className="flex w-full justify-center mb-[180px]">
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
