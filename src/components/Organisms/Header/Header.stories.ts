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
        title: {
            control: { type: 'text' },
            table: { category: 'Input' },
        },
        subtitle: {
            control: { type: 'text' },
            table: { category: 'Input' },
        },
        menuItems: {
            control: { type: "object" },
            table: { category: "Input" },
        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        title: 'Digitaler Zwilling',
        subtitle: 'Das virtuelle Gesicht der Energiewende',
        menuItems: [
            { label: "Use Cases", onClick: fn() },
            { label: "Hosterwitz", onClick: fn() },
        ],
    },
};
