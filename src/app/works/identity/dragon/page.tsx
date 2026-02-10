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

      <div className="max-w-[1193px] mx-auto lg:mb-[173px] mb-[50px] px-[27px]">
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

        <p className="font-montserrat lg:text-[25px] text-[12px] leading-[1.2] text-justify">
          <span className="font-semibold">«SMART DRAGON» — </span>
          це сучасна школа англійської мови, яка пропонує навчання як дітям, так
          і дорослим. Школа відома своїм інноваційним підходом до викладання
          англійської мови та широким вибором програм для всіх рівнів володіння
          мовою.
        </p>

        <p className="font-montserrat lg:text-[25px] text-[12px] leading-[1.2] text-justify mt-[20px]">
          <span className="font-semibold">Рішення — </span>
          головною ідеєю було створити абстрактний логотип із графічним
          зображенням дракона.
        </p>
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

      <div className="lg:max-w-[1193px] mx-auto mt-[91px] mb-[91px] px-[27px]">
        <p className="font-montserrat lg:text-[25px] text-[12px] leading-[1.2] text-justify">
          <span className="font-semibold">Ідея:</span> логотип — це містичний та
          потужний символ, що втілює силу, інтелект та мудрість. Крила дракона
          відображають віру у власні здібності. Такий логотип лаконічний,
          простий та впізнаваний. Композиція символізує силу, проникливість та
          доступність навчання.
        </p>
      </div>

      <div className="block lg:hidden">
        <Image
          className="w-full"
          src="/smr.jpg"
          alt=""
          width={1080}
          height={600}
        />

        <Image
          className="w-full"
          src="/smr1.jpg"
          alt=""
          width={1080}
          height={600}
        />

        <Image
          className="w-full"
          src="/q.jpg"
          alt=""
          width={1080}
          height={600}
        />

        <Image
          className="w-full"
          src="/s7.jpg"
          alt=""
          width={1080}
          height={600}
        />
        <Image
          className="w-full"
          src="/s8.jpg"
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
          src="/s9.jpg"
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
        <div className="flex justify-center my-[130px]">
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
