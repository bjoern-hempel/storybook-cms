/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

/* Import components. */
import {Button} from '@/components/Atoms/Button/Button.tsx';

const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "padded",
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        onClick: {
            action: 'clicked',
            table: { category: 'Events' },
        },
        primary: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        size: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },
        alignment: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design', type: { summary: 'string | string[] | null' }, },
        },
    },
    args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        onClick: fn(),
        primary: true,
        size: 'medium',
        alignment: 'left',
        classNames: '',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
        onClick: fn(),
        primary: false,
        size: 'medium',
        alignment: 'left',
        classNames: '',
    },
};

export const Large: Story = {
    args: {
        label: 'Button',
        onClick: fn(),
        primary: true,
        size: 'large',
        alignment: 'left',
        classNames: '',
    },
};

export const Small: Story = {
    args: {
        label: 'Button',
        onClick: fn(),
        primary: true,
        size: 'small',
        alignment: 'left',
        classNames: '',
    },
};
