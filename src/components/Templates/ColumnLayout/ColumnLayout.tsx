import * as React from "react";
import { ReactNode } from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Templates/ColumnLayout/ColumnLayout.scss'

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    /** Which layout pattern to use */
    layout?: LayoutType;

    /** Which background style? */
    backgroundType: "light"|"dark"|"none";

    /** Should the layout be wrapped in a centered container? */
    isContained: boolean;

    /** Child columns — one ReactNode per column */
    children: ReactNode[];
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

/**
 * Generic responsive column layout template
 */
export const ColumnLayout: React.FC<ColumnLayoutProps> = ({
    layout = "50%:50%",
    backgroundType = "none",
    isContained = false,
    children,
}) => {
    const cols = layoutMap[layout];
    const childArray = React.Children.toArray(children.slice(0, cols.length));

    const SectionClasses = [
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

    return (
        <section className={SectionClasses}>
            {isContained ? (
                <div className="section container">{Content}</div>
            ) : (
                <div className="">{Content}</div>
            )}
        </section>
    );
};
