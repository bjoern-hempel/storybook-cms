import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

const meta = {
    title: 'Atom/Paragraph',
    component: Paragraph,
    parameters: {
        layout: 'fullscreen',
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
        className: {
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
        className: ''
    },
};

export const Center: Story = {
    args: {
        text: 'Text with <strong>centered content</strong>.',
        alignment: 'center',
        className: ''
    },
};

export const Right: Story = {
    args: {
        text: 'Text with <strong>right content</strong>.',
        alignment: 'right',
        className: ''
    },
};