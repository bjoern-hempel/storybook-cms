import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

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
        classNames: null,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
