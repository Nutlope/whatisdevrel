const pillarsOfDevRel = [
  {
    name: "Community",
    icon: `<svg data-testid="geist-icon" fill="none" height="40" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="40" style="color:var(--geist-foreground)"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
    persona: "The Community Builder",
    responsibilities: [
      "Organizing events",
      "Doing livestreams",
      "Discord/Slack community",
      "Talking to users for feedback",
    ],
  },
  {
    name: "Content",
    icon: `<svg data-testid="geist-icon" fill="none" height="40" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="40" style="color:var(--geist-foreground)"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
    persona: "The Developer Educator",
    responsibilities: [
      "Writing blogs",
      "Making videos",
      "Doing courses",
      "Speaking at conferences",
    ],
  },
  {
    name: "Product",
    icon: `<svg data-testid="geist-icon" fill="none" height="40" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="40" style="color:var(--geist-foreground)"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>`,
    persona: "The Developer Experience Engineer",
    responsibilities: [
      "Iterating on docs",
      "Coding examples & starters",
      "Working on integrations",
      "Improving the overall DX",
    ],
  },
];

export default function ThreePillars() {
  return (
    <div className="grid grid-cols-1 justify-evenly gap-10 pt-6 md:grid-cols-2 lg:grid-cols-3">
      {pillarsOfDevRel.map((pillar, i) => {
        return (
          <div
            className="transform overflow-hidden rounded-lg py-10 shadow-none transition duration-200 ease-in hover:scale-105 hover:shadow-2xl"
            key={i}
          >
            {/* Icon */}
            <div
              className="title mb-3"
              dangerouslySetInnerHTML={{ __html: pillar.icon }}
            />

            {/* Title */}
            <h3 className="title text-3xl">{pillar.name}</h3>

            {/* Persona */}
            <p className="pt-2 text-sm text-gray-500">{pillar.persona}</p>

            {/* Responsibilities */}
            <ul className="mt-5 border-t border-gray-200 pt-5 text-lg leading-8 dark:border-gray-800 ">
              {pillar.responsibilities.map((responsibility, i) => {
                return <li key={i}>{responsibility}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
