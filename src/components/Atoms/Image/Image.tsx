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
import '@/components/Atoms/Button/Button.scss';

/* Import types. */
import type {TypeClassNames} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_IMAGE} from "@/constants/margins.ts";

export interface ImageProps {
    /** Image source */
    src: string;

    /** Image alternative text */
    alt: string;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `Title` atom */
export const Image = ({
    src,
    alt,
    classNames = null,
    ...props
}: ImageProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_IMAGE, classNames);

    const finalClasses = [
        "section-image",
        "img-fluid",
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <img
            src={src}
            alt={alt}
            className={`${finalClasses}`}
            {...props}
        />
    );
};
