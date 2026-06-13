type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[var(--color-forest-soft)]/80 sm:text-xs sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-black leading-tight [text-wrap:balance] text-[var(--color-forest)] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]/85 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
