import SectionTitle from "./SectionTitle";
import { coachData } from "../data/siteData";

export default function Services() {
    return (
        <section id="services" className="section-padding bg-neutral-900/40">
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Expertise"
                    title="Services proposés"
                    subtitle="Des accompagnements pensés selon les objectifs et le niveau de chaque client."
                />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {coachData.services.map((service, index) => (
                        <article key={index} className="card p-6">
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-4 leading-7 text-neutral-300">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}