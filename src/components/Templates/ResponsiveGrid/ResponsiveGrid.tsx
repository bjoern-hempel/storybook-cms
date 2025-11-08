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
import type {TypeBackground, TypeClassNames, TypeIsContained} from "@/types/common-types.ts";
import type {TypeResponsiveGridChildren} from "@/types/ui-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_RESPONSIVE_GRID} from "@/constants/margins.ts";
import {PADDING_CLASS_RESPONSIVE_GRID} from "@/constants/paddings.ts";

/* Import defaults. */
import {defaultCols} from "@/defaults/common-defaults.ts";

/**
 * Props for ResponsiveGrid
 */
export interface ResponsiveGridProps {

    /** Child items */
    items: TypeResponsiveGridChildren;

    /** Which background style? */
    backgroundType: TypeBackground;

    /** Should the layout be wrapped in a centered container? */
    isContained: TypeIsContained;

    /** Additional class names */
    classNames?: TypeClassNames;
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
                        className={`col-${item.cols ?? defaultCols.cols} col-sm-${item.colsSm ?? defaultCols.colsSm} col-md-${item.colsMd ?? defaultCols.colsMd}`}
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
