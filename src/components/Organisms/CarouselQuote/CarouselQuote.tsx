/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/CarouselQuote/CarouselQuote.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import constants. */
import {PADDING_CLASS_COL_LAYOUT} from "@/constants/paddings.ts";

/* Import types. */
import type {TypeBackground} from "@/types/common-types.ts";

/* Import components. */
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";

export interface CarouselQuoteProps {
    /** Quote strings */
    quotes: string[];

    /** What background type to use? */
    backgroundType: TypeBackground;
}

/** `CarouselQuote` organism */
export const CarouselQuote = ({
    quotes,
    backgroundType
}: CarouselQuoteProps) => {

    const Quotes: React.FC = () => (
        <>
            <div id="quoteCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {quotes.map((quote, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="carousel-item-inner d-flex justify-content-center align-items-center h-100">
                                <blockquote className="blockquote text-center">
                                    <p>{quote}</p>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-indicators">
                    {quotes.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#quoteCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <RowLayout backgroundType={backgroundType} isContained={true}>
            <section className={`section-carousel-quote`}>
                <Quotes />
            </section>
        </RowLayout>
    );
};
