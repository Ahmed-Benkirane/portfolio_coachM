import SectionTitle from "./SectionTitle";
import { coachData } from "../data/siteData";

export default function Contact() {
    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Contact"
                    title="Prendre contact"
                    subtitle="Pour une candidature, une collaboration ou une prise d’information."
                />

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="card p-8">
                        <h3 className="text-2xl font-semibold">Coordonnées</h3>

                        <div className="mt-6 space-y-4 text-neutral-300">
                            <p>
                                <span className="font-semibold text-white">Nom :</span>{" "}
                                {coachData.name}
                            </p>
                            <p>
                                <span className="font-semibold text-white">Téléphone :</span>{" "}
                                <a href={`tel:${coachData.phone}`} className="hover:text-lime-400">
                                    {coachData.phone}
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-white">Email :</span>{" "}
                                <a
                                    href={`mailto:${coachData.email}`}
                                    className="hover:text-lime-400"
                                >
                                    {coachData.email}
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-white">Instagram :</span>{" "}
                                <a
                                    href={coachData.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-lime-400"
                                >
                                    Voir le profil
                                </a>
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href={`mailto:${coachData.email}`} className="btn-primary">
                                Envoyer un email
                            </a>
                            <a href={coachData.instagram} target="_blank" rel="noreferrer" className="btn-secondary">
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div className="card p-8">
                        <h3 className="text-2xl font-semibold">Présentation</h3>
                        <p className="mt-6 leading-8 text-neutral-300">
                            Coach sportif motivé, rigoureux et orienté résultats, avec
                            expérience dans l’accompagnement de clients aux objectifs variés :
                            perte de poids, transformation physique, prise de masse et remise
                            en forme.
                        </p>

                        <p className="mt-4 leading-8 text-neutral-300">
                            Ce portfolio a pour objectif de présenter son profil, ses méthodes
                            de travail et quelques résultats concrets obtenus avec des clients.
                        </p>

                        <div className="mt-8 rounded-2xl border border-lime-500/20 bg-lime-500/10 p-5">
                            <p className="font-semibold text-lime-400">
                                Disponible pour un poste en France
                            </p>
                            <p className="mt-2 text-sm leading-7 text-neutral-200">
                                Profil sérieux, image professionnelle et résultats visibles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}