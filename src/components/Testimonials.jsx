import SectionTitle from "./SectionTitle";
import { coachData } from "../data/siteData";

export default function Testimonials() {
    return (
        <section className="section-padding bg-neutral-900/40">
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Avis"
                    title="Ce que disent les clients"
                    subtitle="Quelques retours qui renforcent la crédibilité du profil."
                />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {coachData.testimonials.map((testimonial, index) => (
                        <article key={index} className="card p-6">
                            <p className="text-lg leading-8 text-neutral-200">
                                “{testimonial.text}”
                            </p>
                            <p className="mt-6 font-semibold text-lime-400">
                                — {testimonial.name}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}