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
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_ROW_LAYOUT} from "@/utils/margins.ts";

/**
 * Props for ColumnLayout
 */
export interface ColumnLayoutProps {

    /** Child columns — one ReactNode per column */
    children: ReactNode[];

    /** Which background style? */
    backgroundType: "light"|"dark"|"none";

    /** Should the layout be wrapped in a centered container? */
    isContained: boolean;

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

    const sectionClasses = [
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
