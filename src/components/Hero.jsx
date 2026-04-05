import { coachData } from "../data/siteData";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={coachData.heroImage}
                    alt={coachData.name}
                    className="h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-neutral-950" />
            </div>

            <div className="container-custom relative section-padding min-h-[85vh] flex items-center">
                <div className="max-w-3xl">
                    <p className="mb-4 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
                        {coachData.location}
                    </p>

                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        {coachData.title}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-neutral-200">
                        {coachData.tagline}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#results" className="btn-primary">
                            Voir les résultats
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Prendre contact
                        </a>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="card p-4 text-center">
                            <p className="text-2xl font-bold text-lime-400">3+</p>
                            <p className="mt-1 text-sm text-neutral-300">Transformations</p>
                        </div>
                        <div className="card p-4 text-center">
                            <p className="text-2xl font-bold text-lime-400">100%</p>
                            <p className="mt-1 text-sm text-neutral-300">Suivi sérieux</p>
                        </div>
                        <div className="card p-4 text-center">
                            <p className="text-2xl font-bold text-lime-400">1:1</p>
                            <p className="mt-1 text-sm text-neutral-300">Coaching perso</p>
                        </div>
                        <div className="card p-4 text-center">
                            <p className="text-2xl font-bold text-lime-400">France</p>
                            <p className="mt-1 text-sm text-neutral-300">Candidature</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}