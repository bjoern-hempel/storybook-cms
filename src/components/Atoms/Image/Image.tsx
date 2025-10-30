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
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_IMAGE} from "@/utils/margins.ts";

export interface ImageProps {
    /** Image source */
    src: string;

    /** Image alternative text */
    alt: string;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `Title` atom */
export const Image = ({
    src,
    alt,
    classNames = null,
    ...props
}: ImageProps) => {
    const marginClass = applyMarginClass(MARGIN_CLASS_IMAGE, classNames);

    const finalClasses = [
        "section-image",
        "img-fluid",
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <img
            src={src}
            alt={alt}
            className={`${finalClasses}`}
            {...props}
        />
    );
};
