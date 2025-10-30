import * as React from "react";
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from "storybook/test";

/* Import components. */
import {Basic} from '@/components/Pages/Basic/Basic.tsx';
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {Header} from "@/components/Organisms/Header/Header.tsx";
import {Hero} from "@/components/Organisms/Hero/Hero.tsx";
import {List} from "@/components/Atoms/List/List.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";
import {Table} from "@/components/Atoms/Table/Table.tsx";
import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";

/* Import assets. */
import {Image} from "@/components/Atoms/Image/Image.tsx";

const meta = {
    title: 'Pages/Basic',
    component: Basic,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        children: {
            control: {type: 'object'},
            table: {category: 'Content'},
        },
    }
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof Basic>;

export const Default: Story = {
    args: {
        children: [
            <Header
                title={`Digitaler Zwilling`}
                subtitle={`Das virtuelle Gesicht der Energiewende`}
                menuItems={[
                    {label: "Use Cases", onClick: fn() },
                    {label: "Hosterwitz", onClick: fn() },
                ]}
            />,
            <Hero
                title={`Digitaler Zwilling`}
                subtitle={`Energie sichtbar machen. Zukunft verstehen. Gemeinsam gestalten.`}
            />,
            <TextImage
                children={[
                    <Title
                        title={`Was ist der Digitale Zwilling?`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
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
                            digitales Modell, das physikalische Gegebenheiten unter pseudorealen
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
                ]}
                backgroundType={`dark`}
                columnLayout={`66%:33%`}
                imageAlignment={`right`}
                classNames={`mb-0`}
            />,
            <Content
                children={[
                    <Title
                        title={`Warum ein Digitaler Zwilling?`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
                    />,
                    <Paragraph
                        text={`
                            Energiewende und Stadtentwicklung brauchen innovative Technologien, Verständnis für diese, sowie Transparenz
                            und Akzeptanz innerhalb Entscheider- und Verbrauchergruppen. Der Digitale Zwilling macht sichtbar, wie Gebäude,
                            Netze und Technologien zusammenwirken – und wie aus Daten greifbare Entscheidungen werden.
                        `}
                        alignment={`left`}
                        classNames={`mb-4 word-break text-hyphens`}
                    />,
                    <ColumnLayout backgroundType={`none`} isContained={false} layout={`33%:66%`}>
                        <Image src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/istock-636304660-2-1-2048x1536.jpg`} alt={`Digital Twin`} />
                        <RowLayout backgroundType={`none`} isContained={false} classNames={`mb-0`}>
                            <Table
                                headers={
                                    [
                                        "Zielgruppe",
                                        "Nutzen"
                                    ]
                                }
                                rows={
                                    [
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
                                    ]
                                }
                                bordered={"half"}
                                classNames={`mb-0`}
                                groupDivider={true}
                                transparentBackground={true}
                            />
                        </RowLayout>
                    </ColumnLayout>
                ]}
                backgroundType={`light`}
                classNames={`mb-0`}
            />,
            <Content
                children={[
                    <Title
                        title={`Anwendungsbeispiel: Digitaler Zwilling Hosterwitz`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
                    />,
                    <RowLayout backgroundType={`none`} isContained={false}>
                        <ColumnLayout backgroundType={`none`} isContained={false} layout={`50%:50%`}>
                            <RowLayout backgroundType={`none`} isContained={false}>
                                <Paragraph
                                    text={`
                                        Der <strong>Digitale Zwilling Hosterwitz</strong> zeigt, wie sich ein reales
                                        Energiequartier virtuell abbilden lässt: Ein digitaler Stadtteil, gespeist mit
                                        echten Daten aus Photovoltaik, Wärmepumpen, Speichern und Verbrauchern.
                                    `}
                                />
                                <Paragraph
                                    text={`
                                        Die Darstellung macht Energieflüsse sichtbar – live und verständlich:
                                    `}
                                />
                                <List
                                    items={
                                        [
                                            "Wie viel Strom erzeugt die PV-Anlage heute?",
                                            "Wann arbeitet die Wärmepumpe am effizientesten?",
                                            "Wie wirkt sich das Nutzerverhalten auf den Energieverbrauch aus?",
                                        ]
                                    }
                                    classNames={`mb-0`}
                                />
                            </RowLayout>
                            <RowLayout backgroundType={`none`} isContained={false}>
                                <Paragraph
                                    text={`
                                        Für Fachleute bietet der Zwilling die Möglichkeit, reale Szenarien zu berechnen
                                        und zu simulieren. Für Bürgerinnen und Bürger wird er zum Erlebnisraum, in dem die
                                        Energiewende sichtbar und greifbar wird.
                                    `}
                                />
                                <Paragraph
                                    text={`
                                        Technik trifft Transparenz – und schafft Akzeptanz.
                                    `}
                                />
                                <Button
                                    label={`zur WiD Webdemo`}
                                    onClick={() => { fn() }}
                                    primary={true}
                                    alignment={`right`}
                                    classNames={`mb-0`}
                                />
                            </RowLayout>
                        </ColumnLayout>
                        <Title
                            title={`Digitaler Zwilling Demo`}
                            type={`h3`}
                            classNames={``}
                            alignment={`left`}
                        />
                    </RowLayout>
                ]}
                backgroundType={`dark`}
                classNames={`mb-0`}
            />,
            <Content
                children={[
                    <ColumnLayout backgroundType={`none`} isContained={false} layout={`33%:66%`}>
                        <Image src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/istock-1442965509-1024x710.jpg`} alt={`Ein Werkzeug für Kommunikation und Beteiligung`} />
                        <RowLayout backgroundType={`none`} isContained={false}>
                            <Title
                                title={`Ein Werkzeug für Kommunikation und Beteiligung`}
                                type={`h2`}
                                classNames={``}
                                alignment={`left`}
                            />
                            <Paragraph
                                text={`Der Digitale Zwilling ist nicht nur ein technisches Modell – er ist ein Werkzeug für Dialog, Bildung, Öffentlichkeitsarbeit sowie Energiesystemoptimierung.`}
                            />
                            <List
                                items={
                                    [
                                        "<strong>Bürgerdialog & Veranstaltungen</strong>: interaktive Visualisierungen und Simulationen",
                                        "<strong>Online-Kommunikation</strong>: Integration in Websites, Informationsportale oder Social Media",
                                        "<strong>Marketing & Imagearbeit</strong>: moderne, datenbasierte Präsentation von Projekten",
                                        "<strong>Bildung & Forschung</strong>: anschauliche Vermittlung komplexer Zusammenhänge",
                                        "<strong>Energiesystemoptimierung & Szenarienberechnung</strong>: modellgestützte Betrachtung und Optimierung von Energiesystemen im Verbund"
                                    ]
                                }
                            />
                            <Paragraph
                                text={`So wird der Digitale Zwilling zu einer Brücke zwischen Technik und Gesellschaft.`}
                                classNames={`mb-0`}
                            />
                        </RowLayout>
                    </ColumnLayout>
                ]}
                backgroundType={`light`}
                classNames={`mb-0`}
            />,
            <Content
                children={[
                    <Title
                        title={`Ihre Vorteile auf einen Blick!`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
                    />,
                    <Paragraph
                        text={`
                            Der Digitale Zwilling zielt darauf ab, komplexe technische Themen verständlich und greifbar
                            zu machen und reale Szenarien unter pseudorealen Bedingungen zu berechnen – um Vertrauen,
                            Beteiligung und ein positives Verständnis für innovative Entwicklungen zu fördern. So werden
                            Menschen aktiv in Veränderungsprozesse einbezogen und fundierte Entscheidungen auf Fachebene
                            ermöglicht.
                        `}
                    />
                ]}
                backgroundType={`dark`}
                classNames={`mb-0`}
            />,
        ],
    }
};
