import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Molecules/ValueCard/ValueCard.scss';

/* Import components. */
import {ValueCard} from "@/components/Molecules/ValueCard/ValueCard.tsx";
import {ResponsiveGrid} from "@/components/Templates/ResponsiveGrid/ResponsiveGrid.tsx";

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_VALUE_CARD_SET, MARGIN_CLASS_VALUE_CARD_SET_VALUE_CARD} from "@/utils/margins.ts";

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
        <div className={`${finalClasses}`} {...props}>
            <ResponsiveGrid
                items={items.map((item) => {
                    const marginClass = applyMarginClass(MARGIN_CLASS_VALUE_CARD_SET_VALUE_CARD, item.classNames);
                    const finalClasses = [
                        marginClass,
                        ...normalizeClassNames(item.classNames),
                    ].filter(Boolean).join(" ");

                    return {
                        child: (
                            <ValueCard
                                text={item.text}
                                src={item.src}
                                alt={item.alt}
                                classNames={finalClasses}
                            />
                        ),
                        ...(item.cols !== undefined && { cols: item.cols }),
                        ...(item.colsSm !== undefined && { colsSm: item.colsSm }),
                        ...(item.colsMd !== undefined && { colsMd: item.colsMd }),
                    };
                })}
                backgroundType={`none`}
                isContained={false}
                classNames={`mb-0`} /* Margin bottom managed by ResponsiveGrid component. */
            />
        </div>
    );
};
