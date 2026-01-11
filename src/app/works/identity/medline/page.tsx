import Link from "next/link";

export default function Page() {
  return (
    <div>
      <img
        className="h-[830px] w-full mb-[113px]"
        src="/medline/medline.png"
        alt=""
      />
      <div className="max-w-[1193px] m-auto mb-[37px]">
        <div className="flex gap-[35px] items-center  ">
          <h2 className="kharkiv inline-block  px-6 py-2 mb-8 text-[65px] font-normal">
            MEDLINE NAILS
          </h2>
          <img className="h-[46px] w-[46px]" src="/Group16.svg" alt="" />
        </div>
        <p
          className="mt-[20px]
  mb-[169px]
  font-montserrat
  font-semibold
  text-[25px]
  leading-[100%]
  tracking-[0]
  text-justify"
        >
          MEDLINE - це офлайн студія та школа манікюру та педикюру, що
          знаходиться у Львові.
        </p>
        <p
          className="mt-[20px]
  mb-[169px]
  font-montserrat
  font-normal
  text-[25px]
  leading-[100%]
  tracking-[0]
  text-justify]
  "
        >
          Розроблено редизайн логотипу. Акцент зроблено на слові "MEDLINE"
          завдяки великому розміру та контрасту з нижнім рядком. Добре
          читається, підкреслює як студійну, так і освітню функцію бізнесу,
          гарно масштабується.
        </p>
        <div className="flex items-center flex-col"></div>
        <div className="flex  justify-between"></div>
      </div>
      <img className="w-full" src="/medline/medline1.png" alt="" />
      <div className="flex w-full justify-center mb-[180px]">
        <img
          className="max-w-[945px] max-h-[437px] "
          src="/medline/medline3.png"
          alt=""
        />
      </div>
      <img className="w-full" src="/medline/medline4.png" alt="" />
      <img className="w-full" src="/medline/medline5.png" alt="" />
      <img className="w-full" src="/medline/medline6.png" alt="" />
      <img className="w-full" src="/medline/medline7.png" alt="" />
      <img className="w-full" src="/medline/medline8.png" alt="" />
      <img className="w-full" src="/medline/medline8.png" alt="" />
    </div>
  );
}
