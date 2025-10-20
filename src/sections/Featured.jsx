import {
  BellRinging,
  CalendarCheck,
  EnvelopeSimple,
  Layout,
} from "@phosphor-icons/react";

const Featured = () => {
  const cards = [
    {
      title: "Smart Reminders",
      subtitle: "Never miss what matters",
      body: "Set one-time or recurring reminders that arrive right when you need them.",
      icon: BellRinging,
    },
    {
      title: "Calendar Sync",
      subtitle: "Stay perfectly in sync.",
      body: "ReMin connects with Google Calendar so your plans are always aligned.",
      icon: CalendarCheck,
    },
    {
      title: "Inbox Delivery",
      subtitle: "Your reminders, where you already are.",
      body: "Get gentle nudges directly through your email — no app clutter.",
      icon: EnvelopeSimple,
    },
    {
      title: "Distraction-Free",
      subtitle: "Focus on tasks, not tabs.",
      body: "A clean, minimal dashboard designed for calm productivity.",
      icon: Layout,
    },
  ];

  return (
    <section className="py-12">
      <h1 className="title mb-8 text-center">Stay on track, effortlessly</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <article
            key={i}
            className="group bg-[#FDFBF9] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200 ring-1 ring-black/5 hover:-translate-y-1 transform"
            aria-labelledby={`featured-${i}-title`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-200 flex items-center justify-center text-purple-800 font-bold text-lg">
                {c.icon && <c.icon size={32} />}
              </div>
              <div>
                <h2
                  id={`featured-${i}-title`}
                  className="text-lg font-semibold"
                >
                  {c.title}
                </h2>
                <p className="text-sm text-neutral-600">{c.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Featured;
