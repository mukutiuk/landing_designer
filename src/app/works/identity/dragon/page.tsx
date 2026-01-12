import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-[100px]">
      <Image
        className="lg:h-[830px] h-[250px] w-full lg:mb-[113px] mb-[37px]"
        src="/dragon/dragon.png"
        alt=""
        width={1920}
        height={830}
      />

      <div className="max-w-[1193px] m-auto lg:mb-[173px] mb-[50px] px-[27px]">
        <div className="flex gap-[35px] items-center">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 lg:text-[65px] text-[25px] font-normal font-heading">
            SMART DRAGON
          </h2>
          <Image
            className="h-[46px] w-[46px] hidden lg:block"
            src="/Group16.svg"
            alt=""
            width={46}
            height={46}
          />
        </div>

        <span className="font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          «SMART DRAGON» -
        </span>

        <span className="lg:mb-[169px] mb-2 font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          це сучасна школа англійської мови, яка пропонує навчання як дітям, так
          і дорослим. Школа відома своїм інноваційним підходом до викладання
          англійської мови та широким вибором програм для всіх рівнів володіння
          мовою.
        </span>

        <div className="lg:mt-[30px] mt-[20px]">
          <span className="font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
            Рішення -
          </span>
          <span className="lg:mb-[169px] mb-[50px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
            головною мовою було створити абстрактний логотип із графічним
            зображенням дракона.
          </span>
        </div>
      </div>

      <Image
        className="w-full"
        src="/dragon/dr1.png"
        alt=""
        width={1080}
        height={600}
      />
      <Image
        className="w-full"
        src="/dragon/dr2.png"
        alt=""
        width={1080}
        height={600}
      />
      <Image
        className="w-full"
        src="/dragon/dr3.png"
        alt=""
        width={1080}
        height={600}
      />

      <div className="lg:max-w-[1193px] m-auto mb-[91px] mt-[91px] px-[27px]">
        <span className="font-montserrat font-semibold lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          Ідея:
        </span>
        <span className="mb-[169px] font-montserrat font-normal lg:text-[25px] text-[12px] leading-[100%] tracking-[0] text-justify">
          логотип - це містичний та потужний символ, що втілює силу, інтелект та
          мудрість. Крила дракона відображають віру у власні здібності. Такий
          логотип лаконічний, простий та впізнаваний. Композиція символізує
          силу, проникливість та доступність навчання.
        </span>
      </div>

      <div className="block lg:hidden">
        <Image
          className="w-full"
          src="/dragon/d1.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-[216px] mx-auto my-[118px]"
          src="/dragon/d2.png"
          alt=""
          width={216}
          height={200}
        />
        <Image
          className="w-full"
          src="/dragon/d3.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/d4.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/d5.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-[345px] my-[36px] mx-auto"
          src="/dragon/d6.png"
          alt=""
          width={345}
          height={250}
        />
        <Image
          className="w-full"
          src="/dragon/d7.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/d8.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/d9.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/d10.png"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/d11.png"
          alt=""
          width={1080}
          height={600}
        />
      </div>

      <div className="hidden lg:block">
        <Image
          className="w-full"
          src="/immortal/imme1.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/dr4.png"
          alt=""
          width={1920}
          height={600}
        />
        <div className="flex justify-center">
          <Image
            className="max-w-[1222px]"
            src="/dragon/dr5.png"
            alt=""
            width={1222}
            height={600}
          />
        </div>
        <Image
          className="w-full"
          src="/dragon/dr6.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/dr7.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/dr8.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/dr9.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/dr10.png"
          alt=""
          width={1920}
          height={600}
        />
        <Image
          className="w-full"
          src="/dragon/dr11.png"
          alt=""
          width={1920}
          height={600}
        />
      </div>
    </div>
  );
}
