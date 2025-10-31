import * as React from "react";
import {ReactNode} from "react";

/* Import assets. */
import '@/components/Pages/TypeOne/Main/Main.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface MainProps {
    /** Children */
    children: ReactNode[];
}

/** `Main` page */
export const Main: React.FC<MainProps> = ({
    children
}) => {
    const childArray = React.Children.toArray(children);

    return (
        <article className="section-page-main">
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
