/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {InfoCard} from "@/components/Molecules/InfoCard/InfoCard.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

/* Import types. */
import {typeBackgroundOptions, typeRatioOptions} from "@/types/common-types.ts";

const meta = {
    title: "Molecules/InfoCard",
    component: InfoCard,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: { type: "text" },
            table: { category: "Content" }
        },
        children: {
            control: { type: "object" },
            table: { category: "Content" }
        },
        src: {
            control: { type: "text" },
            table: { category: "Content" }
        },
        alt: {
            control: { type: "text" },
            table: { category: "Content" },
        },
        ratio: {
            control: { type: 'radio' },
            options: typeRatioOptions,
            table: { category: 'Design' },
        },
        backgroundType: {
            control: { type: 'radio' },
            options: typeBackgroundOptions,
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
    args: {
        title: "Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit",
        children: [
            <Paragraph
                text={`
                    Der <strong>Digitale Zwilling</strong> fungiert als interaktive Plattform zur anschaulichen
                    Darstellung komplexer Energiethemen und zur Förderung des Dialogs zwischen Bürger:innen, Kommunen,
                    Forschungseinrichtungen und Industrie. Durch Visualisierungen, Simulationen und digitale
                    Beteiligungsformate werden technische Inhalte verständlich aufbereitet und transparente Einblicke
                    in Projekte und Prozesse ermöglicht.
                `}
                alignment={`left`}
                classNames={null}
            />,
            <Paragraph
                text={`
                    Damit wird der Digitale Zwilling zu einem wirkungsvollen Werkzeug der Öffentlichkeitsarbeit, das
                    Akzeptanz, Teilhabe und Vertrauen in die Transformation des Energiesystems stärkt. Gleichzeitig
                    eröffnet er im Bereich Bildung und Forschung eine praxisnahe Umgebung, in der Lernende und
                    Forschende Energiesysteme simulieren, Szenarien analysieren und innovative Lösungen entwickeln
                    können. So verbindet der Digitale Zwilling Kommunikation, Wissenstransfer und angewandte Forschung
                    zu einem zentralen Baustein nachhaltiger Standort- und Technologieentwicklung.
                `}
                alignment={`left`}
                classNames={`mb-0`}
            />
        ],
        src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/art6-1024x611.jpg",
        alt: "Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit",
        ratio: "16x9",
        backgroundType: "dark",
        classNames: "mb-0"
    },
};
