/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Button/Button.scss';

export interface ParagraphProps {
    /** Text contents */
    text: string;

    /** Which alignment should be used? */
    alignment?: 'left' | 'center' | 'right';

    /** Which class name should be added? */
    className?: string;
}

const alignmentMap = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
} as const;

/** Primary UI component for user interaction */
export const Paragraph = ({
    text,
    alignment = 'left',
    className = '',
    ...props
}: ParagraphProps) => {
    const alignmentClass = alignmentMap[alignment] ?? 'text-start';
    const hasMarginClass = /\bmb-\d+\b/.test(className ?? '');
    const marginClass = hasMarginClass ? "" : "mb-3";

    return (
        <p
            className={`section-title ${marginClass} ${alignmentClass} ${className}`}
            dangerouslySetInnerHTML={{ __html: text }}
            {...props}
        />
    );
};
