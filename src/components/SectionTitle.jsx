export default function SectionTitle({ eyebrow, title, subtitle }) {
    return (
        <div className="mb-12 max-w-3xl">
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            {subtitle && (
                <p className="mt-4 text-base leading-7 text-neutral-300">{subtitle}</p>
            )}
        </div>
    );
}