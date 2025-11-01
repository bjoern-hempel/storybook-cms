/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {ResponsiveGrid} from "@/components/Templates/ResponsiveGrid/ResponsiveGrid.tsx";

const meta = {
    title: 'Templates/ResponsiveGrid',
    component: ResponsiveGrid,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
        backgroundType: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        isContained: {
            control: { type: 'boolean' },
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof ResponsiveGrid>;

export default meta;
type Story = StoryObj<typeof ResponsiveGrid>;

const divClassNames = ['p-3', 'border', 'text-center', 'bg-light', 'bg-opacity-25', 'h-100'];
const child = <div className={divClassNames.join(" ")}>test</div>;
const child2 = <div className={divClassNames.join(" ")}>test<br />test</div>;

export const Small: Story = {
    args: {
        backgroundType: "dark",
        isContained: true,
        items: [
            {
                child: child,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: child2,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: child,
                colsMd: 4,
                classNames: "mb-0"
            },
            {
                child: child,
                colsMd: 4,
                classNames: "mb-0"
            },
            {
                child: child,
                colsMd: 4,
                classNames: "mb-0"
            },
        ],
        classNames: ''
    },
};

export const Big: Story = {
    args: {
        backgroundType: "dark",
        isContained: true,
        items: [
            {
                child: child,
                colsSm: 12,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: child,
                colsSm: 12,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: child,
                colsSm: 12,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: child,
                colsSm: 12,
                colsMd: 6,
                classNames: "mb-0"
            }
        ],
        classNames: ''
    },
};