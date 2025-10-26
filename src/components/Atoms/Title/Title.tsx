/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Button/Button.scss';

export interface TitleProps {
    /** Title contents */
    title: string;

    /** Which title type should be used? */
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    /** Which alignment should be used? */
    alignment?: 'left' | 'center' | 'right';

    /** Which class name should be added? */
    className?: string;
}

/** Primary UI component for user interaction */
export const Title = ({
    title,
    type = 'h1',
    alignment = 'left',
    className = '',
    ...props
}: TitleProps) => {

    const Tag = type as keyof JSX.IntrinsicElements;

    const alignmentMap = {
        left: 'text-start',
        center: 'text-center',
        right: 'text-end',
    } as const;

    const alignmentClass = alignmentMap[alignment] ?? 'text-start';

    return (
        <Tag
            className={`section-title ${alignmentClass} mb-3 ${className}`}
            {...props}
        >
            {title}
        </Tag>
    );
};
