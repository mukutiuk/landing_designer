import Link from "next/link";

export default function Header() {
  return (
    <header
      className="h-[60px] bg-[#212121bf]
 fixed top-0 left-0 right-0 border-b  z-3 justify-center flex items-center px-4"
    >
      <nav>
        <ul className="flex gap-4 text-white">
          <li className="mr-[40px] ">
            <Link
              className="font-normal  text-white text-[18px] uppercase tracking-[2px]"
              href={"/"}
            >
              Головна
            </Link>
          </li>
          <li className="mr-[40px]">
            <Link
              className="font-normal text-[18px] uppercase tracking-[2px]"
              href="/portfolio"
            >
              Портфоліо
            </Link>
          </li>
          <li className="mr-[40px]">
            <Link
              className="font-normal text-[18px] uppercase tracking-[2px]"
              href="/record"
            >
              Запис
            </Link>
          </li>
          <li className="mr-[40px]">
            <Link
              className="font-normal text-[18px] uppercase tracking-[2px]"
              href="/conditions"
            >
              Умови
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
