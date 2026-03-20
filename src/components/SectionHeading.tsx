export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-balance text-xl font-semibold tracking-tight text-text sm:text-2xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 text-sm text-muted sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

