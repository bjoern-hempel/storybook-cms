import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from "storybook/test";

/* Import components. */
import {Header} from '@/components/Organisms/Header/Header.tsx';

const meta = {
    title: 'Organisms/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        logo: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        title: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        subtitle: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        menuItems: {
            control: { type: "object" },
            table: { category: "Content" },
        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        logo: "https://digitaltwin.easd.cloud/easd-content/uploads/2023/12/unbenannt-768x959.png",
        title: "Digitaler Zwilling",
        subtitle: "Das virtuelle Gesicht der Energiewende",
        menuItems: [
            { label: "Use Cases", onClick: fn() },
            { label: "Hosterwitz", onClick: fn() },
        ],
    },
};
