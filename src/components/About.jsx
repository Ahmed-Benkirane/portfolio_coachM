import SectionTitle from "./SectionTitle";
import { coachData } from "../data/siteData";

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Profil"
                    title="À propos"
                    subtitle="Un portfolio simple, professionnel et orienté résultats."
                />

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="card p-8">
                        <p className="text-lg leading-8 text-neutral-200">
                            {coachData.about.intro}
                        </p>
                        <p className="mt-6 leading-8 text-neutral-300">
                            {coachData.about.details}
                        </p>
                    </div>

                    <div className="card p-8">
                        <h3 className="text-xl font-semibold">Points forts</h3>
                        <div className="mt-6 space-y-4">
                            {coachData.about.points.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 font-bold text-black">
                                        ✓
                                    </span>
                                    <p className="text-neutral-200">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}