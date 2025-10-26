import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {Title} from "@/components/Atoms/Title/Title.tsx";

const meta = {
    title: 'Atom/Title',
    component: Title,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        type: {
            control: { type: 'select' },
            table: { category: 'Design' },
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
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
    args: {
        title: 'Title',
        type: 'h1'
    },
};

export const H2: Story = {
    args: {
        title: 'Title',
        type: 'h2'
    },
};

export const H3: Story = {
    args: {
        title: 'Title',
        type: 'h3'
    },
};

export const H4: Story = {
    args: {
        title: 'Title',
        type: 'h4'
    },
};

export const H5: Story = {
    args: {
        title: 'Title',
        type: 'h5'
    },
};

export const H6: Story = {
    args: {
        title: 'Title',
        type: 'h6'
    },
};
