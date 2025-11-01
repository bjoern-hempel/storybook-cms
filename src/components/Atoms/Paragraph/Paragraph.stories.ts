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
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

const meta = {
    title: 'Atoms/Paragraph',
    component: Paragraph,
    parameters: {
        layout: "padded",
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        alignment: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Left: Story = {
    args: {
        text: 'Text with <strong>left content</strong>.',
        alignment: 'left',
        classNames: ''
    },
};

export const Center: Story = {
    args: {
        text: 'Text with <strong>centered content</strong>.',
        alignment: 'center',
        classNames: ''
    },
};

export const Right: Story = {
    args: {
        text: 'Text with <strong>right content</strong>.',
        alignment: 'right',
        classNames: ''
    },
};