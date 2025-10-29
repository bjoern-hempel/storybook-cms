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
import {MARGIN_CLASS_TITLE} from "@/utils/margins.ts";

export interface TitleProps {
    /** Title contents */
    title: string;

    /** Which title type should be used? */
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    /** Which alignment should be used? */
    alignment?: 'left' | 'center' | 'right';

    /** Additional class names */
    classNames?: TypeClassNames;
}

const classMap = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
} as const;

/** `Title` atom */
export const Title = ({
    title,
    type = 'h1',
    alignment = 'left',
    classNames = null,
    ...props
}: TitleProps) => {
    const Tag = type as keyof JSX.IntrinsicElements;
    const marginClass = applyMarginClass(MARGIN_CLASS_TITLE, classNames);
    const alignmentClass = classMap[alignment] ?? 'text-start';

    const finalClasses = [
        "section-title",
        alignmentClass,
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <Tag
            className={finalClasses}
            {...props}
        >
            {title}
        </Tag>
    );
};
