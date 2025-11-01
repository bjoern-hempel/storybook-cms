/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import * as React from "react";
import {ReactNode} from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/TextImage/TextImage.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import components. */
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {Image} from "@/components/Atoms/Image/Image.tsx";

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

export interface TextImageProps {
    /** Which content should be displayed? */
    children: ReactNode[];

    /** Image source */
    src: string;

    /** Image alternative text */
    alt: string;

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
    src,
    alt,
    backgroundType = 'dark',
    imageAlignment = 'right',
    columnLayout = '66%:33%',
    classNames = null,
}: TextImageProps) => {
    const isImageLeft = imageAlignment === 'left';

    const Content: React.FC = () => (
        <>
            {children.map((child, index) => (
                <React.Fragment key={index}>{child as ReactNode}</React.Fragment>
            ))}
        </>
    );

    if (isImageLeft) {
        return (
            <ColumnLayout layout={columnLayout} backgroundType={backgroundType} isContained={true} classNames={classNames}>
                <Image
                    src={src}
                    alt={alt}
                />
                <Content />
            </ColumnLayout>
        );
    }

    return (
        <ColumnLayout layout={columnLayout} backgroundType={backgroundType} isContained={true} classNames={classNames}>
            <Content />
            <Image
                src={src}
                alt={alt}
            />
        </ColumnLayout>
    );
};
