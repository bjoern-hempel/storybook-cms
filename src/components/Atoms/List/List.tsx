import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Button/Button.scss';

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_LIST} from "@/utils/margins.ts";

export interface ListProps {
    /** List entries */
    items: (string | React.ReactNode)[];

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `List` atom */
export const List = ({
    items,
    classNames = null,
    ...props
}: ListProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_LIST, classNames);

    const finalClasses = [
        "section-list",
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <ul className={finalClasses} {...props}>
            {items.map((item, index) => (
                typeof item === "string" ? (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ) : (
                    <li key={index}>{item}</li>
                )
            ))}
        </ul>
    );
};
