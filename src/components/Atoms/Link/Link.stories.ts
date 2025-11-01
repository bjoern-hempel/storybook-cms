import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

/* Import components. */
import {Link} from "@/components/Atoms/Link/Link.tsx";

const meta = {
    title: "Atoms/Link",
    component: Link,
    parameters: {
        layout: "padded",
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        href: {
            control: { type: 'text' },
            table: { category: 'Behavior' }
        },
        hrefType: {
            control: { type: 'select' },
            table: { category: 'Behavior' }
        },
        onClick: {
            action: 'clicked',
            table: { category: 'Events' },
        },
        target: {
            control: { type: 'select' },
            table: { category: 'Behavior' },
        },

        color: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },
        underlineColor: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },

        underlineOpacity: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },
        underlineOpacityHover: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },

        underlineOffset: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },
        underlineOffsetHover: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },

        showIcon: {
            control: { type: 'boolean' },
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design', type: { summary: 'string | string[] | null' }, },
        },
    },
    args: {onClick: fn()},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Link',
        href: 'https://storybook.js.org/',
        onClick: fn(),
        target: '_blank',
        classNames: '',
    },
};