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
                textContent: [
                    {
                        type: "Title",
                        props: {
                            title: "Was ist der Digitale Zwilling?",
                            type: "h2",
                            className: "fw-bold",
                            alignment: "left"
                        }
                    },
                    {
                        type: "Paragraph",
                        props: {
                            text: `
                                Der <strong>Digitale Zwilling</strong> ist das virtuelle Abbild eines
                                realen Ortes – etwa eines Stadtteils, Gebäudes oder Energiesystems. Er
                                verbindet reale Daten, Modelle und Simulationen zu einem lebendigen,
                                interaktiven Erlebnis, das technische Zusammenhänge verständlich,
                                anschaulich und beteiligungsfähig macht.
                            `,
                            alignment: "left"
                        }
                    },
                    {
                        type: "Paragraph",
                        props: {
                            text: `
                                Hinter dem sichtbaren 3D-Modell steckt ein wissenschaftlich fundiertes
                                digitales Modell, das physikalische Gegebenheiten unter pseudo­realen
                                Bedingungen abbildet. So lassen sich Energieflüsse, Verbrauch,
                                Steuerungsstrategien oder CO₂-Einsparpotenziale präzise simulieren –
                                und gleichzeitig verständlich kommunizieren.
                            `,
                            alignment: "left"
                        }
                    },
                    {
                        type: "Paragraph",
                        props: {
                            text: `Komplexe Energiezukunft, einfach erklärt.`,
                            alignment: `left`,
                            className: `mb-4`
                        }
                    },
                    {
                        type: "Button",
                        props: {
                            label: `Kontaktieren Sie uns für mehr Informationen.`,
                            onClick: () => { fn() },
                            primary: true,
                        }
                    }
                ],
                backgroundType: "dark",
                columnLayout: "66%:33%",
                imageAlignment: "right",
            }
        }
    }
};
