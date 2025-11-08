/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import {ReactNode} from "react";

export type TypeClassNames = string | string[] | null;

export const typeBackgroundOptions = ['dark', 'light', 'none'] as const;
export type TypeBackground = "dark" | "light" | "none";

export type TypeIsContained = boolean;

export type TypeLayout =
    | "100%"
    | "50%:50%"
    | "66%:33%"
    | "33%:66%"
    | "33%:33%:33%"
    | "25%:25%:25%:25%";

export type TypeLayoutChild = ReactNode;

export type TypeLayoutChildren = TypeLayoutChild[];

export type TypeCol = 2 | 4 | 6 | 12;

export type TypeCols = {
    cols: TypeCol;
    colsSm: TypeCol;
    colsMd: TypeCol;
};
