import * as React from "react";
import { ReactNode } from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Templates/RowLayout/RowLayout.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * Props for ColumnLayout
 */
export interface ColumnLayoutProps {
    /** Which background style? */
    backgroundType: "light"|"dark"|"none";

    /** Should the layout be wrapped in a centered container? */
    isContained: boolean;

    /** Child columns — one ReactNode per column */
    children: ReactNode[];
}

/**
 * Generic responsive column layout template
 */
export const RowLayout: React.FC<ColumnLayoutProps> = ({
    backgroundType = "none",
    isContained = false,
    children,
}) => {
    const childArray = React.Children.toArray(children);

    const SectionClasses = [
        "section-row-layout",
        backgroundType !== "none" && backgroundType
    ].filter(Boolean).join(" ");

    const Content = (
        <>
            {childArray.map((child, i) => (
                <div key={i}>
                    {child}
                </div>
            ))}
        </>
    );

    return (
        <section className={SectionClasses}>
            {isContained ? (
                <div className="section container">{Content}</div>
            ) : (
                <div className="section">{Content}</div>
            )}
        </section>
    );
};
