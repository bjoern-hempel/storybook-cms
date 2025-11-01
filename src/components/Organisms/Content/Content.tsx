/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import {ReactNode} from "react";
import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Content/Content.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import components. */
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

export type ChildItem = ReactNode;

export interface ContentProps {
    /* Which content should be displayed? */
    children: ChildItem[];

    /** What background type to use? */
    backgroundType: 'dark'|'light';

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `Content` organism (`RowLayout` alias) */
export const Content = ({
    children,
    backgroundType = 'dark',
    classNames = null,
}: ContentProps) => {
    const Content: React.FC = () => (
        <>
            {children.map((child, index) => (
                <React.Fragment key={index}>{child as ReactNode}</React.Fragment>
            ))}
        </>
    );

    return (
        <RowLayout backgroundType={backgroundType} isContained={true} classNames={classNames}>
            <Content />
        </RowLayout>
    );
};
