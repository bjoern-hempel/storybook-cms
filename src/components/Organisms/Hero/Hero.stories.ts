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
        src: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
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
        src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/istock-1313125280-1-1024x619.jpg",
        title: "Digitaler Zwilling",
        subtitle: "Energie sichtbar machen. Zukunft verstehen. Gemeinsam gestalten.",
    },
};
