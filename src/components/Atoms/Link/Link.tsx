/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import type {ReactNode} from "react";
import {fn} from "storybook/test";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Link/Link.scss';

/* Import types. */
import type {TypeClassNames} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_LINK} from "@/constants/margins.ts";

export interface LinkProps {
    /** Button contents */
    label: string | ReactNode;

    /** Href */
    href?: string;

    /** Href */
    hrefType?: "default" | "mailto" | "tel" | "sms";

    /** Optional click handler */
    onClick?: () => void;

    /** Target */
    target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";

    /** Link color */
    color?: "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "body-emphasis";

    /** Link underline offset (default) */
    underlineOffset?: "default" | "offset-1" | "offset-2" | "offset-3";

    /** Link underline color (default) */
    underlineColor?: "default" | "none" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

    /** Link underline opacity (default) */
    underlineOpacity?: "default" | "opacity-10" | "opacity-25" | "opacity-50" | "opacity-75" | "opacity-100";

    /** Link underline opacity (hover) */
    underlineOpacityHover?: "default" | "opacity-10" | "opacity-25" | "opacity-50" | "opacity-75" | "opacity-100";

    /** Underline offset (hover) */
    underlineOffsetHover?: "default" | "offset-1" | "offset-2" | "offset-3";

    /** Show link icon. */
    showIcon?: boolean;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `Link` atom */
export const Link = ({
    label,
    href = "#",
    hrefType = "default",
    onClick = () => {},
    target = "_self",

    color = "default",
    underlineColor = "default",

    underlineOpacity = "default",
    underlineOpacityHover = "default",

    underlineOffset = "default",
    underlineOffsetHover = "default",

    showIcon = false,
    classNames = null,
    ...props
}: LinkProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_LINK, classNames);

    let finalClasses = [
        "section-link",
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean);

    if (color && color !== "default") {
        finalClasses.push(`link-${color}`);
    }
    if (underlineColor && underlineColor !== "default") {
        if (underlineColor === "none") {
            finalClasses.push("link-underline-opacity-0");
        } else {
            finalClasses.push(`link-underline-${underlineColor}`);
        }
    }

    if (underlineOpacity && underlineOpacity !== "default") {
        finalClasses.push(`link-underline-${underlineOpacity}`);
    }
    if (underlineOpacityHover && underlineOpacityHover !== "default") {
        finalClasses.push(`link-underline-${underlineOpacityHover}-hover`);
    }

    if (underlineOffset && underlineOffset !== "default") {
        finalClasses.push(`link-${underlineOffset}`);
    }
    if (underlineOffsetHover && underlineOffsetHover !== "default") {
        finalClasses.push(`link-${underlineOffsetHover}-hover`);
    }

    let hrefContent = href ?? '#';

    if (hrefType && hrefType !== "default") {
        hrefContent = `${hrefType}:${hrefContent}`;
    }

    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
        <a
            className={finalClasses.join(" ")}
            href={hrefContent}
            onClick={onClick ? onClick : fn}
            target={target}
            rel={rel}
            {...props}
        >
            {
                showIcon && <i className="bi bi-link me-1" aria-hidden="true"></i>
            }
            {label}
        </a>
    );
};
