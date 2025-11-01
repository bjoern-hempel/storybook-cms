/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import type {ReactNode} from "react";
import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";

/* Import constants. */
import {MARGIN_CLASS_ROW_LAYOUT} from "@/utils/margins.ts";

const meta = {
    title: 'Templates/RowLayout',
    component: RowLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
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
} satisfies Meta<typeof RowLayout>;

export default meta;
type Story = StoryObj<typeof RowLayout>;

const text = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
    sit amet.
`;

const divClassNames = ['p-3', 'border', 'text-center', 'bg-light', 'bg-opacity-25', MARGIN_CLASS_ROW_LAYOUT];

const child1: ReactNode = <div className={divClassNames.join(" ")}>
    <Title
        title={`Title 1`}
        type={`h3`}
        alignment={`left`}
        classNames={`mb-0`}
    />
</div>;

const child2: ReactNode = <div className={divClassNames.join(" ")}>
    <Paragraph
        text={`Text for paragraph 1. ${text}`}
        classNames={`mb-0 word-break text-hyphens`}
    />
</div>;

const child3: ReactNode = <div className={divClassNames.join(" ")}>
    <Paragraph
        text={`Text for paragraph 2. ${text}`}
        classNames={`mb-0 word-break text-hyphens`}
    />
</div>;

const children = [
    child1,
    child2,
    child3
];

export const Default: Story = {
    args: {
        backgroundType: "dark",
        isContained: true,
        children: children,
        classNames: ''
    },
};