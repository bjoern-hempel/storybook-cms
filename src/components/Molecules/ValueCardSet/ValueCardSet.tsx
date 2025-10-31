import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Molecules/ValueCard/ValueCard.scss';

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_VALUE_CARD_SET} from "@/utils/margins.ts";
import {ValueCard} from "@/components/Molecules/ValueCard/ValueCard.tsx";

export interface ValueCardItem {
    text: string;
    src: string;
    alt: string;
    cols?: number; // eg. 2, 4, 6, 12
    colsSm?: number; // eg. 2, 4, 6, 12
    colsMd?: number; // eg. 2, 4, 6, 12
    classNames?: TypeClassNames;
}

export interface ValueCardSetProps {
    /** Value card items */
    items: ValueCardItem[];

    /** Additional class names */
    classNames?: TypeClassNames;
}

const colsDefault = {
    cols: 12,
    colsSm: 6,
    colsMd: 4,
}

/** `ValueCardSet` molecule */
export const ValueCardSet = ({
    items,
    classNames = null,
    ...props
}: ValueCardSetProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_VALUE_CARD_SET, classNames);

    const finalClasses = [
        "section-value-card-set",
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <div className={`row g-4 ${finalClasses}`} {...props}>
            {items.map((item, index) => (
                <div key={index} className={`col-${item.cols ?? colsDefault.cols} col-sm-${item.colsSm ?? colsDefault.colsSm} col-md-${item.colsMd ?? colsDefault.colsMd}`}>
                    <ValueCard
                        text={item.text}
                        src={item.src}
                        alt={item.alt}
                        classNames={item.classNames ?? null}
                    />
                </div>
            ))}
        </div>
    );
};
