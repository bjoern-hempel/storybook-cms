import {ReactNode} from "react";
import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/TextImage/TextImage.scss';
import TextImageImg from "@/assets/image/text-image.png";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import components. */
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_TEXT_IMAGE} from "@/utils/margins.ts";

export type ChildItem = ReactNode;

export interface TextImageProps {
    /* Which content should be displayed? */
    children: ChildItem[];

    /** What background type to use? */
    backgroundType: 'dark'|'light';

    /** What is the direction of the image? */
    imageAlignment?: 'right'|'left';

    /** Which column layout? */
    columnLayout?: '66%:33%'|'50%:50%'|'33%:66%';

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `TextImage` organism (`ColumnLayout` alias) */
export const TextImage = ({
    children,
    backgroundType = 'dark',
    imageAlignment = 'right',
    columnLayout = '66%:33%',
    classNames = null,
}: TextImageProps) => {
    const isImageLeft = imageAlignment === 'left';

    const Image: React.FC = () => (
        <img
            src={TextImageImg as string}
            alt="Digitale Zwilling Illustration"
            className="img-fluid feature-image"
        />
    );

    const Text: React.FC = () => (
        <>
            {children.map((child, index) => (
                <React.Fragment key={index}>{child as ReactNode}</React.Fragment>
            ))}
        </>
    );

    if (isImageLeft) {
        return (
            <ColumnLayout layout={columnLayout} backgroundType={backgroundType} isContained={true} classNames={classNames}>
                <Image />
                <Text />
            </ColumnLayout>
        );
    }

    return (
        <ColumnLayout layout={columnLayout} backgroundType={backgroundType} isContained={true} classNames={classNames}>
            <Text />
            <Image />
        </ColumnLayout>
    );
};
