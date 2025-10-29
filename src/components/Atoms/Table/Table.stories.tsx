import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {Table} from "@/components/Atoms/Table/Table.tsx";

const meta = {
    title: 'Atoms/Table',
    component: Table,
    parameters: {
        layout: 'fullscreen',
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
                <strong>Kommunen & Stadtwerke</strong>,
                "Anschauliche Darstellung von Energie- und Stadtentwicklungsprojekten."
            ],
            [
                <strong>Wohnungsunternehmen</strong>,
                "Visualisierung von Modernisierungsmaßnahmen."
            ],
            [
                <strong>Bürgerinnen & Bürger</strong>,
                "Verständnis lokaler Energieprojekte."
            ],
            [
                <strong>Industrie & Forschung</strong>,
                "Simulation, Analyse und Optimierung."
            ],
        ],
        bordered: "none",
        groupDivider: false
    },
};