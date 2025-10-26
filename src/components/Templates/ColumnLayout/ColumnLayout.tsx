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

    /** Background modifier */
    backgroundType?: "light" | "dark";

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
    backgroundType = "light",
    children,
}) => {
    const cols = layoutMap[layout];
    const childArray = React.Children.toArray(children.slice(0, cols.length));

    return (
        <section className={`section-column-layout ${backgroundType}`}>
            <div className=" section container">
                <div className="row gx-4 gy-4">
                    {childArray.map((child, idx) => (
                        <div key={idx} className={cols[idx] ?? "col-12"}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
