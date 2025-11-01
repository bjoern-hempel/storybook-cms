/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

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
import {MARGIN_CLASS_PARAGRAPH} from "@/utils/margins.ts";

export interface ParagraphProps {
    /** Text contents */
    text: string;

    /** Which alignment should be used? */
    alignment?: "left" | "center" | "right";

    /** Additional class names */
    classNames?: TypeClassNames;
}

const classMap = {
    left: "text-start",
    center: "text-center",
    right: "text-end",
} as const;

/** `Paragraph` atom */
export const Paragraph = ({
    text,
    alignment = "left",
    classNames = null,
    ...props
}: ParagraphProps) => {
    const alignmentClass = classMap[alignment] ?? "text-start";
    const marginClass = applyMarginClass(MARGIN_CLASS_PARAGRAPH, classNames);

    const finalClasses = [
        "section-title",
        alignmentClass,
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <p
            className={finalClasses}
            dangerouslySetInnerHTML={{ __html: text }}
            {...props}
        />
    );
};
