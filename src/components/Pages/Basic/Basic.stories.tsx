import * as React from "react";
import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from "storybook/test";

/* Import components. */
import {Basic} from '@/components/Pages/Basic/Basic.tsx';
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import DtImg from "@/assets/image/dt.jpg";

const meta = {
    title: 'Pages/Basic',
    component: Basic,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof Basic>;

const Image: React.FC = () => (
    <img
        src={DtImg as string}
        alt="Digitale Zwilling Illustration"
        className="img-fluid feature-image"
    />
);

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
                textChildren: [
                    <Title title={`Was ist der Digitale Zwilling?`} type={`h2`} className={``} alignment={`left`} />,
                    <Paragraph text={`
                        Der <strong>Digitale Zwilling</strong> ist das virtuelle Abbild eines
                        realen Ortes – etwa eines Stadtteils, Gebäudes oder Energiesystems. Er
                        verbindet reale Daten, Modelle und Simulationen zu einem lebendigen,
                        interaktiven Erlebnis, das technische Zusammenhänge verständlich,
                        anschaulich und beteiligungsfähig macht.
                    `} alignment={`left`} className={`word-break text-hyphens`} />,
                    <Paragraph text={`
                        Hinter dem sichtbaren 3D-Modell steckt ein wissenschaftlich fundiertes
                        digitales Modell, das physikalische Gegebenheiten unter pseudorealen
                        Bedingungen abbildet. So lassen sich Energieflüsse, Verbrauch,
                        Steuerungsstrategien oder CO₂-Einsparpotenziale präzise simulieren –
                        und gleichzeitig verständlich kommunizieren.
                    `} alignment={`left`} className={`word-break text-hyphens`} />,
                    <Paragraph text={`
                        Komplexe Energiezukunft, einfach erklärt.
                    `} alignment={`left`} className={`mb-4 word-break text-hyphens`} />,
                    <Button label={`Kontaktieren Sie uns für mehr Informationen.`} onClick={() => { fn() }} primary={true} />
                ],
                backgroundType: "dark",
                columnLayout: "66%:33%",
                imageAlignment: "right",
            },
            content1: {
                textChildren: [
                    <Title title={`Warum ein Digitaler Zwilling?`} type={`h2`} className={``} alignment={`left`} />,
                    <Paragraph text={`
                        Energiewende und Stadtentwicklung brauchen innovative Technologien, Verständnis für diese, sowie Transparenz
                        und Akzeptanz innerhalb Entscheider- und Verbrauchergruppen. Der Digitale Zwilling macht sichtbar, wie Gebäude,
                        Netze und Technologien zusammenwirken – und wie aus Daten greifbare Entscheidungen werden.
                    `} alignment={`left`} className={`mb-4 word-break text-hyphens`} />,
                    <ColumnLayout backgroundType={`none`} isContained={false} layout={`33%:66%`}>
                        <Image />
                        <Paragraph text={`
                            Energiewende und Stadtentwicklung brauchen innovative Technologien, Verständnis für diese, sowie Transparenz
                            und Akzeptanz innerhalb Entscheider- und Verbrauchergruppen. Der Digitale Zwilling macht sichtbar, wie Gebäude,
                            Netze und Technologien zusammenwirken – und wie aus Daten greifbare Entscheidungen werden.
                        `} alignment={`left`} className={`mb-4 word-break text-hyphens`} />
                    </ColumnLayout>
                ],
                backgroundType: "light",
            }
        }
    }
};
