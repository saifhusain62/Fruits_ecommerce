// MenuSection.jsx
import React from "react";

const tabs = [
  { id: "special", label: "Special" },
  { id: "lunch", label: "Lunch" },
  // keeping the screenshot spelling; change to "Breakfast" if you want
  { id: "breakfast", label: "Brakefirst" },
  { id: "dinner", label: "Dinner" },
];

export default function MenuSection({
  subtitle = "Our Offered Menu",
  titleTop = "Some Trendy And Popular",
  titleBottom = "Courses Offerd",
  leftImage = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=640&auto=format&fit=crop",
  rightImage = "https://plus.unsplash.com/premium_photo-1753484802886-079b89a6f3b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073",
  smallLeftImage = "https://plus.unsplash.com/premium_photo-1726797628912-64872f6123b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1191",
}) {
  const [active, setActive] = React.useState("special");

  return (
    <section className="relative isolate bg-gray-100">
      {/* Decorative images (purely visual) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={leftImage}
          alt=""
          className="hidden md:block absolute left-8 top-1/3 w-36 lg:w-52 aspect-square object-cover rounded-full shadow-sm"
        />
        <img
          src={smallLeftImage}
          alt=""
          className="hidden md:block absolute left-14 top-8 w-12 aspect-square object-cover rounded-full shadow-md rotate-[-12deg]"
        />
        <img
          src={rightImage}
          alt=""
          className="hidden md:block absolute right-8 top-10 w-44 lg:w-60 aspect-square object-cover rounded-full shadow-sm"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 text-center">
        <p className="text-orange-600 font-medium tracking-wide">{subtitle}</p>

        <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
          {titleTop}
          <br className="hidden sm:block" />
          {titleBottom}
        </h2>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                aria-pressed={isActive}
                className={
                  "relative rounded-md px-5 py-2 text-base sm:text-lg font-medium transition-colors " +
                  (isActive
                    ? "bg-orange-600 text-white"
                    : "text-gray-700 hover:text-gray-900")
                }
              >
                {t.label}
                {isActive && (
                  <span className="pointer-events-none absolute -bottom-[6px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-orange-600"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}