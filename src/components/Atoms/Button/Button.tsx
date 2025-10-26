/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Button/Button.scss';

export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;

    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';

    /** Button contents */
    label: string;

    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
        primary = false,
        size = 'medium',
        label,
        ...props
    }: ButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type="button"
            className={['button', `button--${size}`, mode].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};
