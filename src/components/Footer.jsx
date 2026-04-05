import { coachData } from "../data/siteData";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8">
            <div className="container-custom flex flex-col gap-3 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} {coachData.name}. Tous droits réservés.</p>
                <p>Portfolio coach sportif</p>
            </div>
        </footer>
    );
}