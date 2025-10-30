import * as React from "react";
import {ReactNode} from "react";

/* Import assets. */
import '@/components/Pages/Basic/Basic.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface BasicProps {
    /** Children */
    children: ReactNode[];
}

/** `Basic` page */
export const Basic: React.FC<BasicProps> = ({
    children
}) => {
    const childArray = React.Children.toArray(children);

    return (
        <article>
            <>
                {childArray.map((child, i) => (
                    <React.Fragment key={`page-${i}`}>
                        {child}
                    </React.Fragment>
                ))}
            </>
        </article>
    );
};
