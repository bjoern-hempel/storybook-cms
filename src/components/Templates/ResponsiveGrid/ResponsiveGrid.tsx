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
import '@/components/Templates/ResponsiveGrid/ResponsiveGrid.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import types. */
import type {TypeClassNames} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_RESPONSIVE_GRID} from "@/utils/margins.ts";
import {PADDING_CLASS_RESPONSIVE_GRID} from "@/utils/paddings.ts";

export interface ResponsiveGridItem {
    child: ReactNode;
    cols?: number; // eg. 2, 4, 6, 12
    colsSm?: number; // eg. 2, 4, 6, 12
    colsMd?: number; // eg. 2, 4, 6, 12
    classNames?: TypeClassNames;
}

/**
 * Props for ResponsiveGrid
 */
export interface ResponsiveGridProps {

    /** Child items */
    items: ResponsiveGridItem[];

    /** Which background style? */
    backgroundType: "light"|"dark"|"none";

    /** Should the layout be wrapped in a centered container? */
    isContained: boolean;

    /** Additional class names */
    classNames?: TypeClassNames;
}

export const colsDefault = {
    cols: 12,
    colsSm: 6,
    colsMd: 4,
}

/** `RowLayout` template */
export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
    items,
    backgroundType = "none",
    isContained = false,
    classNames = null
}) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_RESPONSIVE_GRID, classNames);

    const finalClasses = [
        "section-responsive-grid",
        marginClass,
        backgroundType !== "none" && backgroundType,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    const Content = (
        <div className={`row g-4 align-items-stretch`}>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`col-${item.cols ?? colsDefault.cols} col-sm-${item.colsSm ?? colsDefault.colsSm} col-md-${item.colsMd ?? colsDefault.colsMd}`}
                    >
                        <div className="section-responsive h-100 d-flex flex-column">
                            {item.child}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <section className={finalClasses}>
            {isContained ? (
                <div className={`container ${PADDING_CLASS_RESPONSIVE_GRID}`}>
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
