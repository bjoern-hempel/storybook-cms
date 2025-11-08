/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import type {ReactNode} from "react";
import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

/* Import components. */
import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

/* Import types. */
import {
    typeAlignmentTextImageOptions,
    typeBackgroundOptions,
    typeLayoutTextImageOptions
} from "@/types/common-types.ts";

const meta = {
    title: 'Organisms/TextImage',
    component: TextImage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
        src: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        alt: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        backgroundType: {
            control: { type: 'radio' },
            options: typeBackgroundOptions,
            table: { category: 'Design' },
        },
        imageAlignment: {
            control: { type: 'radio' },
            options: typeAlignmentTextImageOptions,
            table: { category: 'Design' },
        },
        columnLayout: {
            control: { type: 'radio' },
            options: typeLayoutTextImageOptions,
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof TextImage>;

const textChildren: ReactNode[] = [
    <Title
        title={`Was ist der Digitale Zwilling?`}
        type={`h2`}
        alignment={`left`}
        classNames={`fw-bold`}
    />,
    <Paragraph
        text={`
            Der <strong>Digitale Zwilling</strong> ist das virtuelle Abbild eines
            realen Ortes – etwa eines Stadtteils, Gebäudes oder Energiesystems. Er
            verbindet reale Daten, Modelle und Simulationen zu einem lebendigen,
            interaktiven Erlebnis, das technische Zusammenhänge verständlich,
            anschaulich und beteiligungsfähig macht.
        `}
        alignment={`left`}
        classNames={`word-break text-hyphens`}
    />,
    <Paragraph
        text={`
            Hinter dem sichtbaren 3D-Modell steckt ein wissenschaftlich fundiertes
            digitales Modell, das physikalische Gegebenheiten unter pseudo realen
            Bedingungen abbildet. So lassen sich Energieflüsse, Verbrauch,
            Steuerungsstrategien oder CO₂-Einsparpotenziale präzise simulieren –
            und gleichzeitig verständlich kommunizieren.
        `}
        alignment={`left`}
        classNames={`word-break text-hyphens`}
    />,
    <Paragraph
        text={`
            Komplexe Energiezukunft, einfach erklärt.
        `}
        alignment={`left`}
        classNames={`mb-4 word-break text-hyphens`}
    />,
    <Button
        label={`Kontaktieren Sie uns für mehr Informationen.`}
        onClick={() => { fn() }}
        primary={true}
    />
];

export const Dark: Story = {
    args: {
        children: textChildren,
        src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/dt-bild-nobg-1024x920.png",
        alt: "Was ist der Digitale Zwilling?",
        backgroundType: 'dark',
        imageAlignment: 'right',
        columnLayout: '66%:33%',
    },
};

export const Light: Story = {
    args: {
        children: textChildren,
        src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/dt-bild-nobg-1024x920.png",
        alt: "Was ist der Digitale Zwilling?",
        backgroundType: 'light',
        imageAlignment: 'left',
        columnLayout: '66%:33%',
    },
};
