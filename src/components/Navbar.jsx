import { coachData } from "../data/siteData";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
            <div className="container-custom flex h-16 items-center justify-between">
                <a href="#home" className="text-lg font-bold tracking-wide">
                    {coachData.name}
                </a>

                <nav className="hidden gap-6 md:flex">
                    <a href="#about" className="text-sm text-neutral-300 hover:text-white">
                        À propos
                    </a>
                    <a href="#services" className="text-sm text-neutral-300 hover:text-white">
                        Services
                    </a>
                    <a href="#results" className="text-sm text-neutral-300 hover:text-white">
                        Résultats
                    </a>
                    <a href="#contact" className="text-sm text-neutral-300 hover:text-white">
                        Contact
                    </a>
                </nav>

                <a href="#contact" className="btn-primary">
                    Me contacter
                </a>
            </div>
        </header>
    );
}