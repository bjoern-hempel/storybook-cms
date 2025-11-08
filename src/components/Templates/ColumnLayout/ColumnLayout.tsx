/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import * as React from "react";
import { ReactNode } from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Templates/ColumnLayout/ColumnLayout.scss'

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import types. */
import type {TypeClassNames} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {PADDING_CLASS_COL_LAYOUT} from "@/utils/paddings.ts";
import {MARGIN_CLASS_COL_LAYOUT} from "@/utils/margins.ts";

export type LayoutType =
    | "100%"
    | "50%:50%"
    | "66%:33%"
    | "33%:66%"
    | "33%:33%:33%"
    | "25%:25%:25%:25%";

/**
 * Props for ColumnLayout
 */
export interface ColumnLayoutProps {
    /** Children */
    children: ReactNode[];

    /** Which layout pattern to use */
    layout?: LayoutType;

    /** Which background style? */
    backgroundType: "light"|"dark"|"none";

    /** Should the layout be wrapped in a centered container? */
    isContained: boolean;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** Mapping between layout types and Bootstrap column classes */
const layoutMap: Record<LayoutType, string[]> = {
    "100%": ["col-12"],
    "50%:50%": ["col-12 col-lg-6", "col-12 col-lg-6"],
    "66%:33%": ["col-12 col-lg-8", "col-12 col-lg-4"],
    "33%:66%": ["col-12 col-lg-4", "col-12 col-lg-8"],
    "33%:33%:33%": ["col-12 col-lg-4", "col-12 col-lg-4", "col-12 col-lg-4"],
    "25%:25%:25%:25%": [
        "col-12 col-lg-3",
        "col-12 col-lg-3",
        "col-12 col-lg-3",
        "col-12 col-lg-3",
    ],
};

/** `ColumnLayout` template */
export const ColumnLayout: React.FC<ColumnLayoutProps> = ({
    children,
    layout = "50%:50%",
    backgroundType = "none",
    isContained = false,
    classNames,
}) => {
    const cols = layoutMap[layout];
    const childArray = React.Children.toArray(children).slice(0, cols.length);
    const marginClass = applyMarginClass(MARGIN_CLASS_COL_LAYOUT, classNames);

    const finalClasses = [
        "section-column-layout",
        marginClass,
        backgroundType !== "none" && backgroundType,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    const Content = (
        <div className={`row g-4`}>
            {childArray.map((child, i) => (
                <div key={i} className={`section-column ${cols[i] ?? "col-12"}`}>
                    {child}
                </div>
            ))}
        </div>
    );

    return (
        <section className={finalClasses}>
            {isContained ? (
                <div className={`container ${PADDING_CLASS_COL_LAYOUT}`}>
                    {Content}
                </div>
            ) : (
                <React.Fragment>
                    {Content}
                </React.Fragment>
            )}
        </section>
    );
};
