/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

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
import type {TypeClassNames} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_LIST} from "@/utils/margins.ts";

export interface ListProps {
    /** List entries */
    items: (string | React.ReactNode)[];

    /** List style */
    style?: "list-standard"|"list-unstyled"|"list-inline";

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `List` atom */
export const List = ({
    items,
    style = "list-standard",
    classNames = null,
    ...props
}: ListProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_LIST, classNames);

    const finalClasses = [
        "section-list",
        style,
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    const itemClass = style === "list-inline" ? "list-inline-item" : null;

    return (
        <ul className={finalClasses} {...props}>
            {items.map((item, index) => (
                typeof item === "string" ? (
                    <li key={index} className={`${itemClass ? ` ${itemClass}` : ""}`} dangerouslySetInnerHTML={{ __html: item }} />
                ) : (
                    <li key={index} className={`${itemClass ? ` ${itemClass}` : ""}`}>{item}</li>
                )
            ))}
        </ul>
    );
};
