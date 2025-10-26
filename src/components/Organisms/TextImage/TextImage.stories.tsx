import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

import {type TextChildItem, TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

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

const textChildren: TextChildItem[] = [
    <Title title={`Was ist der Digitale Zwilling?`} type={`h2`} className={`fw-bold`} alignment={`left`} />,
    <Paragraph text={`
        Der <strong>Digitale Zwilling</strong> ist das virtuelle Abbild eines
        realen Ortes – etwa eines Stadtteils, Gebäudes oder Energiesystems. Er
        verbindet reale Daten, Modelle und Simulationen zu einem lebendigen,
        interaktiven Erlebnis, das technische Zusammenhänge verständlich,
        anschaulich und beteiligungsfähig macht.
    `} alignment={`left`} />,
    <Paragraph text={`
        Hinter dem sichtbaren 3D-Modell steckt ein wissenschaftlich fundiertes
        digitales Modell, das physikalische Gegebenheiten unter pseudo realen
        Bedingungen abbildet. So lassen sich Energieflüsse, Verbrauch,
        Steuerungsstrategien oder CO₂-Einsparpotenziale präzise simulieren –
        und gleichzeitig verständlich kommunizieren.
    `} alignment={`left`} />,
    <Paragraph text={`
        Komplexe Energiezukunft, einfach erklärt.
    `} alignment={`left`} className={`mb-4`} />,
    <Button label={`Kontaktieren Sie uns für mehr Informationen.`} onClick={() => { fn() }} primary={true} />
];

export const Dark: Story = {
    args: {
        backgroundType: 'dark',
        imageAlignment: 'right',
        columnLayout: '66%:33%',
        textChildren: textChildren
    },
};

export const Light: Story = {
    args: {
        backgroundType: 'light',
        imageAlignment: 'left',
        columnLayout: '66%:33%',
        textChildren: textChildren
    },
};
