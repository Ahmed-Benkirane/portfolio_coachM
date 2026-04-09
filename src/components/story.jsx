import beforeStory from "../assets/storybefore.jpg";
import afterStory from "../assets/storyafter.jpg";

export default function Story() {
    return (
        <section id="story" className="section-padding bg-neutral-900/40">
            <div className="container-custom">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                            Parcours
                        </p>

                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Une transformation personnelle réelle
                        </h2>

                        <p className="mt-6 text-base leading-8 text-neutral-300">
                            Avant d’accompagner les autres, j'ai d’abord vécu ma propre
                            transformation, À 18 ans, je pesais 55 kg. J’étais très mince et je voulais changer.
                        </p>

                        <p className="mt-4 text-base leading-8 text-neutral-300">
                            Je me suis alors lancé dans une prise de masse sérieuse, mais surtout intelligente. Je me suis formé en profondeur en biologie, en nutrition et en science de l’entraînement pour comprendre exactement comment progresser efficacement.

                            Avec le temps, la discipline et une rigueur constante, j’ai transformé mon physique jusqu’à atteindre aujourd’hui 82 kg secs.
                        </p>

                        <p className="mt-4 text-base leading-8 text-neutral-300">
                            Ce parcours m’a permis de développer une approche structurée, basée sur des principes solides et non sur des méthodes aléatoires.

                            Aujourd’hui, j’utilise cette expérience pour accompagner mes clients avec sérieux, précision et résultats
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                                <p className="text-sm text-neutral-400">Début</p>
                                <p className="mt-1 text-lg font-semibold text-white">18 ans</p>
                            </div>

                            <div className="rounded-2xl border border-lime-500/20 bg-lime-500/10 p-4 text-center">
                                <p className="text-sm text-lime-300">Aujourd’hui</p>
                                <p className="mt-1 text-lg font-semibold text-lime-400">
                                    82 kg secs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="card overflow-hidden">
                            <div className="relative">
                                <img
                                    src={beforeStory}
                                    alt="Photo du coach avant sa transformation"
                                    className="h-96 w-full object-cover"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                                    Avant
                                </span>
                            </div>
                        </div>

                        <div className="card overflow-hidden">
                            <div className="relative">
                                <img
                                    src={afterStory}
                                    alt="Photo du coach après sa transformation"
                                    className="h-96 w-full object-cover"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                                    Maintenant
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}