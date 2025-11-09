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

export const typeBackgroundOptions = ["dark", "light", "none"] as const;
export type TypeBackground = "dark" | "light" | "none";

export const typeRatioOptions = ["none", "1x1", "4x3", "16x9", "21x9"] as const;
export type TypeRatio = "none" | "1x1" | "4x3" | "16x9" | "21x9";

export type TypeIsContained = boolean;

export const typeLayoutOptions = ["100%", "50%:50%", "66%:33%", "33%:66%", "33%:33%:33%", "25%:25%:25%:25%"] as const;
export type TypeLayout =
    | "100%"
    | "50%:50%"
    | "66%:33%"
    | "33%:66%"
    | "33%:33%:33%"
    | "25%:25%:25%:25%";

export const typeLayoutTextImageOptions = ["66%:33%", "50%:50%", "33%:66%"] as const;
export type TypeLayoutTextImage =
    | "66%:33%"
    | "50%:50%"
    | "33%:66%";

export const typeAlignmentTextImageOptions = ["right", "left"] as const;
export type TypeAlignmentTextImage =
    | "right"
    | "left";

export type TypeLayoutChild = ReactNode;

export type TypeLayoutChildren = TypeLayoutChild[];

export type TypeCol = 2 | 4 | 6 | 12;

export type TypeCols = {
    cols: TypeCol;
    colsSm: TypeCol;
    colsMd: TypeCol;
};
