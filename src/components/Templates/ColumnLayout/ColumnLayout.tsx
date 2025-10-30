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
import type {TypeClassNames} from "@/utils/classNames.ts";
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";
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

    const sectionClasses = [
        "section-column-layout",
        backgroundType !== "none" && backgroundType
    ].filter(Boolean).join(" ");

    const Content = (
        <div className="row g-4">
            {childArray.map((child, i) => (
                <div key={i} className={cols[i] ?? "col-12"}>
                    {child}
                </div>
            ))}
        </div>
    );

    const finalClasses = [
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <section className={sectionClasses}>
            {isContained ? (
                <div className={`section container ${finalClasses}`}>{Content}</div>
            ) : (
                <div className={finalClasses}>{Content}</div>
            )}
        </section>
    );
};
