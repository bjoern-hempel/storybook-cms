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
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

/* Import constants. */
import {MARGIN_CLASS_COL_LAYOUT} from "@/utils/margins.ts";

const meta = {
    title: 'Templates/ColumnLayout',
    component: ColumnLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
        layout: {
            control: { type: 'radio' },
            table: { category: 'Design' },
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
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof ColumnLayout>;

const text = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
    sit amet.
`;

const divClassNames = ['p-3', 'border', 'text-center', 'bg-light', 'bg-opacity-25', MARGIN_CLASS_COL_LAYOUT];

const children = Array.from({ length: 4 }).map((_, index) => {
    const number = index + 1;

    const child1 = (
        <div className={divClassNames.join(" ")}>
            <Title title={`Title ${number}`} type="h3" alignment="left" classNames="mb-0" />
        </div>
    );

    const child2 = (
        <div className={divClassNames.join(" ")}>
            <Paragraph text={`Text for paragraph ${number}. ${text}`} classNames="mb-0 word-break text-hyphens" />
        </div>
    );

    return (
        <>
            {child1}
            {child2}
        </>
    );
});

export const OneColumn: Story = {
    args: {
        children: children,
        layout: "100%",
        backgroundType: "dark",
        isContained: true,
    },
};

export const TwoColumns: Story = {
    args: {
        children: children,
        layout: "50%:50%",
        backgroundType: "dark",
        isContained: true,
    },
};

export const TwoColumns_2to1: Story = {
    args: {
        children: children,
        layout: "66%:33%",
        backgroundType: "dark",
        isContained: true,
    },
};

export const TwoColumns_1to2: Story = {
    args: {
        children: children,
        layout: "33%:66%",
        backgroundType: "dark",
        isContained: true,
    },
};

export const ThreeColumns: Story = {
    args: {
        layout: "33%:33%:33%",
        backgroundType: "dark",
        isContained: true,
        children: children
    },
};

export const FourColumns: Story = {
    args: {
        layout: "25%:25%:25%:25%",
        backgroundType: "dark",
        isContained: true,
        children: children
    },
};
