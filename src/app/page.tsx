// import mainImg from "../../public/IMG_1592.jpg";

import Slider from "./components/Slider";
import MuiTestimonialsSlider from "./components/MuiTestimonialsSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f0ee] flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-[#222]/90 flex flex-col items-center justify-center min-h-[60vh] relative overflow-hidden px-4 py-16">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/file.svg"
            alt="background texture"
            className="w-full h-full object-cover opacity-30"
            draggable="false"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-4 tracking-wide drop-shadow-lg">
            ОДЯГАЮ
            <br />
            БРЕНДИ
          </h1>
          <h2 className="text-[#d6cfc7] text-2xl md:text-3xl font-medium text-center mb-2">
            НАДІЯ ПОБУЦЬКА
          </h2>
          <span className="text-[#bdbdbd] text-base md:text-lg tracking-widest uppercase">
            GRAPHIC DESIGNER
          </span>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row justify-center items-start px-8 py-12 gap-12 max-w-6xl mx-auto w-full">
        {/* Text section */}
        <div className="flex-1 max-w-xl">
          <div className="inline-block bg-[#c2a48a] text-white px-6 py-2 mb-8 text-xl font-semibold">
            ПРО МЕНЕ
          </div>
          <div className="text-[#222] text-base leading-7">
            <p className="mb-4">
              Дизайном в мінімалізмі з 2014 року.
              <br />
              Витонченість, делікатність, акуратність, лаконічність, логічність,
              сенс та емоційність – те, на чому базується мій стиль. Рішення які
              передають настрій, підкреслюють характер та цінності бренду
              однозначно закохають у себе потрібну аудиторію.
            </p>
            <p className="mb-4">
              Співпраця з Польщею, Чехією, Канадою, Німеччиною, Англією, США та
              іншими країнами Європи, і понад 1 500 задоволених клієнтів скажуть
              про якість та рівень кожної послуги.
            </p>
            <p className="mb-4">
              Моя основна місія – одягнути ваш бізнес в його унікальну та
              особливу оболонку, яка на 100% буде відображати його середину.
            </p>
            <p className="mb-4">
              Основні переваги – можливість розробити та повністю упакувати
              бренд з нуля: від продумування концепції та стратегії, до розробки
              його візуальної частини.
            </p>
            <p className="mb-4">
              Співпрацюю з художниками, ілюстраторами, смм та сферою IT, тому
              так – я дійсно можу закрити навіть найвибагливіші запити.
            </p>
            <p>
              Постійна підтримка та допомога у вирішенні будь яких питань
              впроваджую та після закінчення роботи над замовленням. Наш
              результат - це дещо більше ніж просто співпраця.
            </p>
          </div>
        </div>
        {/* Image section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/IMG_1592.JPG"
            alt="img"
            className="object-cover rounded-md max-w-full max-h-[600px] shadow-lg"
          />
        </div>
      </section>
      <Slider />

      <MuiTestimonialsSlider />

      {/* Footer/Contacts Section */}
      <footer className="w-full bg-[#222] text-white py-10 px-8 mt-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-2 text-base md:text-lg">
            <span>+380984450485</span>
            <span>@nadia_pobucka</span>
            <span>nadiapobucka@gmail.com</span>
            <span className="mt-4">
              ФОП Побуцька Н.П
              <br />
              3424106583
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-[#aaa] mb-2">by</span>
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24V0H8.57143V24H0ZM12.8571 24V0H21.4286V24H12.8571ZM25.7143 24V0H34.2857V24H25.7143ZM38.5714 24V0H47.1429V24H38.5714Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
