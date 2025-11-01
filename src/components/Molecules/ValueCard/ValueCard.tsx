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

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Molecules/ValueCard/ValueCard.scss';

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_VALUE_CARD} from "@/utils/margins.ts";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

export interface ImageProps {
    /** Value card text */
    text: string;

    /** Image source */
    src: string;

    /** Image alternative text */
    alt: string;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `ValueCard` molecule */
export const ValueCard = ({
    text,
    src,
    alt,
    classNames = null,
    ...props
}: ImageProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_VALUE_CARD, classNames);

    const finalClasses = [
        "section-value-card",
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <>
            <div className={`d-flex flex-column align-items-center p-4 text-center ${finalClasses}`} {...props}>
                <div className={`icon ${MARGIN_CLASS_VALUE_CARD}`}>
                    <img src={src} alt={alt} title={text} />
                </div>
                <Paragraph text={text} alignment={`center`} classNames={`mb-0`} />
            </div>
        </>
    );
};
