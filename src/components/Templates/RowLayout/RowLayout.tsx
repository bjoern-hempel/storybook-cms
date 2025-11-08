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
import '@/components/Templates/RowLayout/RowLayout.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import types. */
import type {TypeBackground, TypeClassNames, TypeIsContained, TypeLayoutChildren} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {PADDING_CLASS_ROW_LAYOUT} from "@/constants/paddings.ts";
import {MARGIN_CLASS_ROW_LAYOUT} from "@/constants/margins.ts";

/**
 * Props for ColumnLayout
 */
export interface ColumnLayoutProps {

    /** Child columns — one ReactNode per column */
    children: TypeLayoutChildren;

    /** Which background style? */
    backgroundType: TypeBackground;

    /** Should the layout be wrapped in a centered container? */
    isContained: TypeIsContained;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `RowLayout` template */
export const RowLayout: React.FC<ColumnLayoutProps> = ({
    children,
    backgroundType = "none",
    isContained = false,
    classNames = null,
}) => {
    const childArray = React.Children.toArray(children);
    const marginClass = applyMarginClass(MARGIN_CLASS_ROW_LAYOUT, classNames);

    const finalClasses = [
        "section-row-layout",
        marginClass,
        backgroundType !== "none" && backgroundType,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    const Content = (
        <div className={`section-row`}>
            {childArray.map((child, i) => (
                <React.Fragment key={i}>
                    {child}
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <section className={`${finalClasses}`}>
            {isContained ? (
                <div className={`container ${PADDING_CLASS_ROW_LAYOUT}`}>
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
