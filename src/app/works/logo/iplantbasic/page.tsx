export default function Page() {
  return (
    <div>
      <img
        className="h-[830px] w-full mb-[113px]"
        src="/iplantbasic/ip.png"
        alt=""
      />
      <div className="max-w-[1193px] m-auto mb-[173px]">
        <div className="flex gap-[35px] items-center  ">
          <h2 className="kharkiv inline-block px-6 py-2 mb-8 text-[65px] font-normal font-heading">
            IPLANTBASIC
          </h2>
          <img className="h-[46px] w-[46px]" src="/Group16.svg" alt="" />
        </div>
        <span className=" font-montserrat font-semibold text-[25px] leading-[100%] tracking-[0] text-justify">
          IPLANTBASIC -
        </span>

        <span className=" mb-[169px] font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify]">
          {" "}
          це інтернет-магазин у Об’єднаних Арабських Еміратах, який пропонує 100
          % рослинні (plant-based) продукти харчування для веганів,
          вегетаріанців, флекситаріанців і всіх, хто хоче харчуватися здоровіше
          та стійкіше. <br />
        </span>
        <br />
        <span className=" mt-[30px] block mb-[169px] font-montserrat font-normal text-[25px] leading-[100%] tracking-[0] text-justify] ">
          iPlantBased - це про сучасне рослинне життя: чисті інгредієнти,
          продуманий вибір і стиль, який легко інтегрується у щоденний ритм
          великого міста.
        </span>
      </div>

      {/* <img className=" w-full " src="/iplantbasic/dragon.png" alt="" />
      <img className="w-full" src="/dragon/dr2.png" alt="" />
      <img className="w-full" src="/dragon/dr3.png" alt="" /> */}

      <img className="w-full" src="/iplantbasic/ip2.png" alt="" />
      <div className="flex justify-center">
        <img className="max-w-[791px]" src="/iplantbasic/ip1.png" alt="" />
      </div>

      <img className="w-full" src="/iplantbasic/ip3.png" alt="" />
      <img className="w-full" src="/iplantbasic/ip4.png" alt="" />
      <img className="w-full" src="/iplantbasic/ip5.png" alt="" />

      <div className="flex justify-center">
        <img
          className="max-w-[575px] mb-[258px] mt-[230px]"
          src="/iplantbasic/ip6.png"
          alt=""
        />
      </div>
      <img className="w-full" src="/iplantbasic/ip7.png" alt="" />
      <div className="flex justify-center">
        <img
          className="max-w-[909px] mb-[217px] mt-[218px]"
          src="/iplantbasic/ip8.png"
          alt=""
        />
      </div>
      <img className="w-full" src="/iplantbasic/ip9.png" alt="" />
    </div>
  );
}
