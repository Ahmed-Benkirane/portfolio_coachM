import heroImage from "../assets/Wh.jpg";
import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";
import before3 from "../assets/before3.jpg";
import after3 from "../assets/after3.jpg";

export const coachData = {
    name: "Mehdi Aharchi",
    title: "Coach Sportif & Préparateur Physique",
    tagline:
        "J’accompagne mes clients dans leur transformation physique avec un suivi structuré, humain et durable.",
    location: "Disponible en France et au Maroc",
    phone: "+212 610-936617",
    email: "aharchimehdi900@gmail.com",
    instagram: "https://www.instagram.com/mehdiaharchi_/?utm_source=ig_web_button_share_sheet",
    heroImage,
    about: {
        intro:
            "Coach sportif passionné, j’aide mes clients à atteindre leurs objectifs de remise en forme, perte de poids, prise de masse et amélioration des performances.",
        details:
            "Mon approche repose sur la discipline, l’adaptation du programme au profil du client et un accompagnement sérieux. Chaque transformation est construite avec méthode, suivi et régularité.",
        points: [
            "Coaching personnalisé",
            "Suivi de progression",
            "Programmes adaptés au niveau",
            "Approche orientée résultats",
        ],
    },
    services: [
        {
            title: "Perte de poids",
            description:
                "Programme structuré pour perdre du gras durablement tout en gardant une bonne énergie au quotidien.",
        },
        {
            title: "Prise de masse",
            description:
                "Plan d’entraînement et conseils adaptés pour développer la masse musculaire de façon progressive.",
        },
        {
            title: "Remise en forme",
            description:
                "Accompagnement pour reprendre de bonnes habitudes, améliorer la condition physique et retrouver confiance.",
        },
        {
            title: "Suivi personnalisé",
            description:
                "Évaluation, ajustements, conseils et motivation pour avancer de manière constante.",
        },
    ],
    transformations: [
        {
            client: "Client A",
            duration: "12 semaines",
            objective: "Perte de poids",
            result: "-11 kg",
            before: before1,
            after: after1,
        },
        {
            client: "Client B",
            duration: "16 semaines",
            objective: "Prise de masse",
            result: "+6 kg",
            before: before2,
            after: after2,
        },
        {
            client: "Client C",
            duration: "10 semaines",
            objective: "Recomposition corporelle",
            result: "Transformation visible",
            before: before3,
            after: after3,
        },
    ],
    testimonials: [
        {
            name: "Amine",
            text: "Très bon coach, sérieux et motivant. Le suivi était clair et j’ai obtenu de vrais résultats.",
        },
        {
            name: "Sofiane",
            text: "Programme bien adapté à mon niveau. J’ai progressé rapidement sans me blesser.",
        },
        {
            name: "Nadia",
            text: "J’ai retrouvé confiance en moi grâce à un accompagnement constant et professionnel.",
        },
    ],
};