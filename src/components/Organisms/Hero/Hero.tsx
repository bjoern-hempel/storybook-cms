/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Hero/Hero.scss';
import HeroImage from "@/assets/image/hero.jpg";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import constants. */
import {PADDING_CLASS_COL_LAYOUT} from "@/utils/paddings.ts";

export interface HeroProps {
    /** Title contents */
    title: string;

    /** Subtitle contents */
    subtitle: string;
}

/** `Hero` organism */
export const Hero = ({title, subtitle}: HeroProps) => {
    return (
        <section className="section-hero">
            <div
                className={`hero position-relative d-flex align-items-end text-white ${PADDING_CLASS_COL_LAYOUT}`}
                style={{backgroundImage: `url(${HeroImage})`}}
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
};
