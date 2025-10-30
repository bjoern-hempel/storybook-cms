import type {Meta, StoryObj} from '@storybook/react-vite';

import {Hero} from '@/components/Organisms/Hero/Hero.tsx';

const meta = {
    title: 'Organisms/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        subtitle: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
    },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
    args: {
        title: 'Digitaler Zwilling',
        subtitle: 'Energie sichtbar machen. Zukunft verstehen. Gemeinsam gestalten.',
    },
};
