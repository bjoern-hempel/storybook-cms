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
import '@/components/Molecules/InfoCard/InfoCard.scss';

/* Import components. */
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Image} from "@/components/Atoms/Image/Image.tsx";

/* Import types. */
import type {TypeBackground, TypeClassNames, TypeLayoutChildren, TypeRatio} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_INFO_CARD} from "@/constants/margins.ts";



export interface ImageProps {
    /** Title content */
    title: string;

    /** Children */
    children: TypeLayoutChildren;

    /** Image source */
    src: string;

    /** Image alternative text */
    alt: string;

    /** Image ratio */
    ratio?: TypeRatio;

    /** Which background style? */
    backgroundType?: TypeBackground;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `ValueCard` molecule */
export const InfoCard = ({
    title,
    children,
    src,
    alt,
    ratio = "none",
    backgroundType = "dark",
    classNames = null,
    ...props
}: ImageProps) => {
    const childArray = React.Children.toArray(children);
    const marginClass = applyMarginClass(MARGIN_CLASS_INFO_CARD, classNames);

    const finalClasses = [
        "section-info-card",
        marginClass,
        backgroundType,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <>
            <div className={`card border-0 rounded-0 overflow-hidden ${finalClasses}`} {...props}>
                <figure className={`mb-0`}>
                    <Image src={src} alt={alt} classNames={`card-img-top rounded-0 img-fluid object-fit-cover w-100 mb-0${ratio === 'none' ? '' : ` ratio ratio-${ratio}`}`} />
                </figure>

                <div className="card-body rounded-0 text-white p-4">
                    <Title title={title} type={`h3`} alignment={`left`} />

                    {childArray.map((child, index) => (
                        <React.Fragment key={index}>
                            {child}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};
