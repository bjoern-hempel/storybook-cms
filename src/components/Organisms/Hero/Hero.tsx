/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Hero/Hero.scss';
import HeroImage from "@/assets/image/hero.jpg";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface HeroProps {
    title: string;
    subtitle: string;
}

/** `Hero` organism */
export const Hero = ({title, subtitle}: HeroProps) => (
    <section className="section-hero">
        <div
            className="hero section position-relative d-flex align-items-end text-white"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            <div className="hero-layer"></div>

            <div className="container position-relative">
                <div className="hero-text">
                    <h1 className="fw-bold">{title}</h1>
                    <h2 className="lead mb-0">{subtitle}</h2>
                </div>
            </div>
        </div>
    </section>
);
