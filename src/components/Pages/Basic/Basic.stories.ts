import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from "storybook/test";

import {Basic} from '@/components/Pages/Basic/Basic.tsx';

const meta = {
    title: 'Pages/Basic',
    component: Basic,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof Basic>;

export const Default: Story = {
    args: {
        content: {
            header: {
                title: 'Digitaler Zwilling',
                subtitle: 'Das virtuelle Gesicht der Energiewende',
                menuItems: [
                    {label: "Use Cases", onClick: fn() },
                    {label: "Hosterwitz", onClick: fn() },
                ]
            },
            hero: {
                title: 'Digitaler Zwilling',
                subtitle: 'Energie sichtbar machen. Zukunft verstehen. Gemeinsam gestalten.',
            },
            textImage: {
                title: 'Was ist der Digitale Zwilling?',
                backgroundType: "dark",
                columnLayout: "66%:33%",
                imageAlignment: "right",
            }
        }
    }
};
