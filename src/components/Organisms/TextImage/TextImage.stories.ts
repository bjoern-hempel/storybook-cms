import type {Meta, StoryObj} from '@storybook/react-vite';

import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";

const meta = {
    title: 'Organisms/TextImage',
    component: TextImage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
            table: { category: 'Input' },
        },
        backgroundType: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        imageAlignment: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        columnLayout: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof TextImage>;

export const Dark: Story = {
    args: {
        title: 'Was ist der Digitale Zwilling?',
        backgroundType: 'dark',
        imageAlignment: 'right',
        columnLayout: '66%:33%'
    },
};

export const Light: Story = {
    args: {
        title: 'Was ist der Digitale Zwilling?',
        backgroundType: 'light',
        imageAlignment: 'left',
        columnLayout: '66%:33%'
    },
};
