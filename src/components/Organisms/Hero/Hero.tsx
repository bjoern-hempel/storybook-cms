/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Hero/Hero.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import constants. */
import {PADDING_CLASS_COL_LAYOUT} from "@/constants/paddings.ts";

export interface HeroProps {
    /** Image source */
    src: string;

    /** Title contents */
    title: string;

    /** Subtitle contents */
    subtitle: string;

    /** Has darken overlay? */
    hasDarkOverlay?: boolean;
}

/** `Hero` organism */
export const Hero = ({
    src,
    title,
    subtitle,
    hasDarkOverlay = false,
}: HeroProps) => {
    return (
        <section className={`section-hero`}>
            <div
                className={`hero position-relative d-flex align-items-end text-white ${PADDING_CLASS_COL_LAYOUT}`}
                style={{backgroundImage: `url(${src})`}}
            >
                <div className={`hero-layer${hasDarkOverlay ? ' has-dark-overlay' : ''}`}></div>

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
