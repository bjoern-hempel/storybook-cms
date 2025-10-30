import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {List} from "@/components/Atoms/List/List.tsx";

const meta = {
    title: "Atoms/List",
    component: List,
    parameters: {
        layout: "padded",
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        items: [
            "Wie viel Strom erzeugt die PV-Anlage heute?",
            "Wann arbeitet die Wärmepumpe am effizientesten?",
            "Wie wirkt sich das Nutzerverhalten auf den Energieverbrauch aus?",
        ],
    },
};
