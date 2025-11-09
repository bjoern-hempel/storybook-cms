/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

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
import type {
    TypeBackground,
    TypeClassNames,
    TypeIsContained,
    TypeLayoutChild,
    TypeLayoutChildren
} from "@/types/common-types.ts";

export interface ContentProps {
    /* Which content should be displayed? */
    children: TypeLayoutChildren;

    /** What background type to use? */
    backgroundType: TypeBackground;

    /** Should the layout be wrapped in a centered container? */
    isContained?: TypeIsContained;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `Content` organism (`RowLayout` alias, but with `contained` = `true` as default) */
export const Content = ({
    children,
    backgroundType = 'none',
    isContained = true,
    classNames = null,
}: ContentProps) => {
    const childArray = React.Children.toArray(children);

    isContained = isContained === undefined ? true : isContained;

    return (
        <RowLayout backgroundType={backgroundType} isContained={isContained} classNames={classNames}>
            <>
                {childArray.map((child, index) => (
                    <React.Fragment key={index}>{child as TypeLayoutChild}</React.Fragment>
                ))}
            </>
        </RowLayout>
    );
};
