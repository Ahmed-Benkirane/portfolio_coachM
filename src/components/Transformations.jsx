import SectionTitle from "./SectionTitle";
import { coachData } from "../data/siteData";

function TransformationCard({
    client,
    duration,
    objective,
    result,
    before,
    after,
}) {
    return (
        <article className="card overflow-hidden">
            <div className="grid grid-cols-2">
                <div className="relative">
                    <img src={before} alt={`Avant ${client}`} className="h-72 w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Avant
                    </span>
                </div>

                <div className="relative">
                    <img src={after} alt={`Après ${client}`} className="h-72 w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                        Après
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{client}</h3>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-neutral-300">
                        {duration}
                    </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-neutral-400">Objectif</p>
                        <p className="mt-1 font-medium">{objective}</p>
                    </div>
                    <div className="rounded-xl border border-lime-500/20 bg-lime-500/10 p-4">
                        <p className="text-sm text-lime-300">Résultat</p>
                        <p className="mt-1 font-semibold text-lime-400">{result}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Transformations() {
    return (
        <section id="results" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Résultats"
                    title="Transformations avant / après"
                    subtitle="Des résultats réels obtenus grâce à un accompagnement personnalisé. Assure-toi d’avoir l’autorisation des clients avant de publier leurs photos."
                />

                <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    {coachData.transformations.map((item, index) => (
                        <TransformationCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}