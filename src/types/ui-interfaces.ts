/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

/* Import types. */
import type {TypeClassNames, TypeCol, TypeLayoutChild} from "@/types/common-types.ts";

export interface InterfaceResponsiveGridChild {
    child: TypeLayoutChild;
    cols?: TypeCol;
    colsSm?: TypeCol;
    colsMd?: TypeCol;
    classNames?: TypeClassNames;
}

export interface InterfaceMenuItem {
    /** Menu label */
    label: string;

    /** Click handler */
    onClick: () => void;
}
