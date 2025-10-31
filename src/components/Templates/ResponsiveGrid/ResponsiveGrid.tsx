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
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_ROW_LAYOUT} from "@/utils/margins.ts";

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
    classNames = null,
}) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_ROW_LAYOUT, classNames);

    const sectionClasses = [
        "section-responsive-grid",
        backgroundType !== "none" && backgroundType
    ].filter(Boolean).join(" ");

    const finalClasses = [
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    const Content = (
        <div className={`row g-4`}>
            {items.map((item, index) => (
                <div key={index} className={`col-${item.cols ?? colsDefault.cols} col-sm-${item.colsSm ?? colsDefault.colsSm} col-md-${item.colsMd ?? colsDefault.colsMd}`}>
                    {item.child}
                </div>
            ))}
        </div>
    );

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
