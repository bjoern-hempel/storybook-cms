import {fn} from "storybook/test";

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
import {MARGIN_CLASS_BUTTON} from "@/utils/margins.ts";

export interface ButtonProps {
    /** Button contents */
    label: string;

    /** Optional click handler */
    onClick?: () => void;

    /** Is this the principal call to action on the page? */
    primary?: boolean;

    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';

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

/** `Button` atom */
export const Button = ({
    label,
    onClick,
    primary = false,
    size = 'medium',
    alignment = "left",
    classNames = null,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    const alignmentClass = classMap[alignment] ?? "text-start";
    const marginClass = applyMarginClass(MARGIN_CLASS_BUTTON, classNames);

    const finalClasses = [
        alignmentClass,
        "button",
        `button--${size}`,
        mode,
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <button
            type="button"
            className={finalClasses}
            onClick={onClick ? onClick : fn}
            {...props}
        >
            {label}
        </button>
    );
};
