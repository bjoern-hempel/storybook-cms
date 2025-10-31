import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {Table} from "@/components/Atoms/Table/Table.tsx";

const meta = {
    title: "Atoms/Table",
    component: Table,
    parameters: {
        layout: "padded",
    },
    tags: ['autodocs'],
    argTypes: {
        headers: {
            control: { type: 'object' },
            table: { category: 'Content' }
        },
        rows: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
        bordered: {
            control: { type: 'select' },
            table: { category: 'Design' },
        },
        transparentBackground: {
            control: { type: 'boolean' },
            table: { category: 'Design' },
        },
        groupDivider: {
            control: { type: 'boolean' },
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        headers: ["Zielgruppe", "Nutzen"],
        rows: [
            [
                "Kommunen & Stadtwerke",
                "Anschauliche Darstellung von Energie- und Stadtentwicklungsprojekten."
            ],
            [
                "Wohnungsunternehmen",
                "Visualisierung von Modernisierungsmaßnahmen."
            ],
            [
                "Bürgerinnen & Bürger",
                "Verständnis lokaler Energieprojekte."
            ],
            [
                "Industrie & Forschung",
                "Simulation, Analyse und Optimierung."
            ],
        ],
        bordered: "none",
        transparentBackground: true,
        groupDivider: false
    },
};