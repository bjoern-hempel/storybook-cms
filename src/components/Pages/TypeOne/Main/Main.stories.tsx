/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import * as React from "react";
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from "storybook/test";

/* Import components. */
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {Header} from "@/components/Organisms/Header/Header.tsx";
import {Hero} from "@/components/Organisms/Hero/Hero.tsx";
import {Image} from "@/components/Atoms/Image/Image.tsx";
import {InfoCard} from "@/components/Molecules/InfoCard/InfoCard.tsx";
import {List} from "@/components/Atoms/List/List.tsx";
import {Main} from '@/components/Pages/TypeOne/Main/Main.tsx';
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {ResponsiveGrid} from "@/components/Templates/ResponsiveGrid/ResponsiveGrid.tsx";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";
import {Table} from "@/components/Atoms/Table/Table.tsx";
import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {ValueCardSet} from "@/components/Molecules/ValueCardSet/ValueCardSet.tsx";
import {Footer} from "@/components/Organisms/Footer/Footer.tsx";

const meta = {
    title: 'Pages/TypeOne/Main',
    component: Main,
    parameters: {
        layout: 'fullscreen',
    },
    /* "Disabled" autodocs tag means: Render element as page element */
    // tags: ['autodocs'],
    argTypes: {
        children: {
            control: {type: 'object'},
            table: {category: 'Content'},
        },
    }
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {
    args: {
        children: [
            <Header
                title={`Digitaler Zwilling`}
                subtitle={`Das virtuelle Gesicht der Energiewende`}
                logo={`https://digitaltwin.easd.cloud/easd-content/uploads/2023/12/unbenannt-768x959.png`}
                menuItems={[
                    {label: "Use Cases", onClick: fn() },
                    {label: "Hosterwitz", onClick: fn() },
                ]}
                fixedTop={true}
            />,
            <Hero
                src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/istock-1313125280-1-1024x619.jpg`}
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
                        classNames={`word-break text-hyphens`}
                    />,
                    <Button
                        label={`Kontaktieren Sie uns für mehr Informationen.`}
                        onClick={() => { fn() }}
                        primary={true}
                        classNames={`mt-5`}
                    />
                ]}
                src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/dt-bild-nobg-1024x920.png`}
                alt={`Was ist der Digitale Zwilling?`}
                backgroundType={`dark`}
                columnLayout={`66%:33%`}
                imageAlignment={`right`}
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
                        classNames={`word-break text-hyphens`}
                    />,
                    <ColumnLayout backgroundType={`none`} isContained={false} layout={`33%:66%`}>
                        <Image src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/istock-636304660-2-1-2048x1536.jpg`} alt={`Digital Twin`} />
                        <RowLayout backgroundType={`none`} isContained={false}>
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
                                    ]
                                }
                                bordered={"half"}
                                groupDivider={true}
                                transparentBackground={true}
                            />
                        </RowLayout>
                    </ColumnLayout>
                ]}
                backgroundType={`light`}
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
                                    classNames={`mt-5`}
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
                            />
                        </RowLayout>
                    </ColumnLayout>
                ]}
                backgroundType={`light`}
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
                    />,
                    <ValueCardSet items={[
                        {
                            text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                            alt: "Entscheidungen unterstützen",
                            colsMd: 6,
                            classNames: "h-100",
                        },
                        {
                            text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                            alt: "Entscheidungen unterstützen",
                            colsMd: 6,
                            classNames: "h-100",
                        },
                        {
                            text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                            alt: "Entscheidungen unterstützen",
                            colsMd: 4,
                            classNames: "h-100",
                        },
                        {
                            text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                            alt: "Entscheidungen unterstützen",
                            colsMd: 4,
                            classNames: "h-100",
                        },
                        {
                            text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                            alt: "Entscheidungen unterstützen",
                            colsMd: 4,
                            classNames: "h-100",
                        }
                    ]} />
                ]}
                backgroundType={`dark`}
            />,
            <Content
                children={[
                    <Title
                        title={`Anwendungsfelder unserer Digitalen Zwillinge`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
                    />,
                    <ResponsiveGrid
                        items={Array(2).fill([
                            {
                                child: <InfoCard
                                    title={`Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit`}
                                    children={[
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
                                        />
                                    ]}
                                    src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/art6-1024x611.jpg`}
                                    alt={`Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit`}
                                    classNames={`h-100`}
                                    ratio={'16x9'}
                                />,
                                cols: 12,
                                colsSm: 12,
                                colsMd: 6,
                            },
                            {
                                child: <InfoCard
                                    title={`Detailtiefe Energiesystemanalysen & Resilienzbetrachtungen`}
                                    children={[
                                        <Paragraph
                                            text={`
                                                Der <strong>Digitale Zwilling</strong> ermöglicht umfassende Analysen
                                                und Bewertungen komplexer Energiesysteme unter realitätsnahen
                                                Bedingungen. Mithilfe von Varianten- und Szenarienuntersuchungen
                                                können unterschiedliche Technologien, Betriebskonzepte und
                                                Infrastrukturoptionen im Hinblick auf Effizienz, Nachhaltigkeit,
                                                Wirtschaftlichkeit und Machbarkeit verglichen werden.
                                            `}
                                            alignment={`left`}
                                            classNames={null}
                                        />,
                                        <Paragraph
                                            text={`
                                                Ergänzend liefern Resilienzanalysen wertvolle Erkenntnisse über die
                                                Robustheit und Anpassungsfähigkeit von Energiesystemen gegenüber
                                                äußeren Einflüssen wie Lastspitzen, Störungen oder klimatischen
                                                Veränderungen. Auf dieser Basis entstehen fundierte
                                                Entscheidungsgrundlagen für die strategische Planung,
                                                Investitionsbewertung und Systemoptimierung in Transformationsprozessen
                                                des Energiesystems.
                                            `}
                                            alignment={`left`}
                                        />
                                    ]}
                                    src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/art4-1-1024x611.jpg`}
                                    alt={`Detailtiefe Energiesystemanalysen & Resilienzbetrachtungen`}
                                    classNames={`h-100`}
                                    ratio={'16x9'}
                                />,
                                cols: 12,
                                colsSm: 12,
                                colsMd: 6,
                            }
                        ]).flat()}
                        backgroundType={`none`}
                        isContained={false}
                    />
                ]}
                backgroundType={`light`}
            />,
            <Content
                children={[
                    <Title
                        title={`Was macht unseren Digitalen Zwilling einzigartig?`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
                    />,
                    <Paragraph
                        text={`
                            Unsere <strong>digitalen Zwillinge</strong> vereinen Präzision, Flexibilität und
                            Anpassungsfähigkeit – entwickelt für Forschung, Planung und Industrie.
                        `}
                        alignment={`left`}
                    />,
                    <Paragraph
                        text={`
                            Ob interdisziplinäre Systemanalyse oder detaillierte Simulation – sie lassen sich exakt
                            auf die Anforderungen und Ziele ihrer Nutzer:innen abstimmen. Durch ihren modularen Aufbau
                            sind sie skalierbar, flexibel und erweiterbar – von standardisierten Basismodellen bis zur
                            kundenspezifischen Entwicklung individueller Systeme.
                        `}
                        alignment={`left`}
                    />,
                    <ValueCardSet items={[
                        {
                            text: "Interdisziplinär",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/iStock-604353226_collaboration.png",
                            alt: "Interdisziplinär",
                            cols: 6,
                            colsSm: 6,
                            colsMd: 3,
                            classNames: "h-100",
                        },
                        {
                            text: "Skalierbar",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/Practical-Orientation.png",
                            alt: "Skalierbar",
                            cols: 6,
                            colsSm: 6,
                            colsMd: 3,
                            classNames: "h-100",
                        },
                        {
                            text: "Kundenspezifisch",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/kundenspez-300x300.png",
                            alt: "Kundenspezifisch",
                            cols: 6,
                            colsSm: 6,
                            colsMd: 3,
                            classNames: "h-100",
                        },
                        {
                            text: "Flexibel & Erweiterbar",
                            src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/Flexible-and-Extensible.png",
                            alt: "Flexibel & Erweiterbar",
                            cols: 6,
                            colsSm: 6,
                            colsMd: 3,
                            classNames: "h-100",
                        }
                    ]} />
                ]}
                backgroundType={`dark`}
            />,
            <Content
                children={[
                    <ColumnLayout backgroundType={`none`} isContained={false} layout={`66%:33%`}>
                        <RowLayout backgroundType={`none`} isContained={false}>
                            <Title
                                title={`Zukunft gestalten. Verantwortung übernehmen.`}
                                type={`h2`}
                                classNames={``}
                                alignment={`left`}
                            />
                            <Paragraph
                                text={`
                                    Der <strong>Digitale Zwilling</strong> macht nachhaltige Energie- und Stadtentwicklung
                                    sichtbar, berechenbar und erlebbar. Er verbindet Fachwelt und Öffentlichkeit – und
                                    unterstützt Sie dabei, die Zukunft gemeinsam mit Kommunen, Industrie und Bürger zu
                                    verstehen und optimal zu gestalten.
                                `}
                                alignment={`left`}
                            />
                            <Paragraph
                                text={`
                                    Erleben Sie Ihren eigenen Digitalen Zwilling.
                                `}
                                alignment={`left`}
                            />
                            <Button
                                label={`Lassen Sie uns gemeinsam die Zukunft gestalten!`}
                                onClick={() => { fn() }}
                                primary={true}
                                classNames={`mt-5`}
                            />
                        </RowLayout>
                        <Image
                            src={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/test-768x512.jpg`}
                            alt={`Zukunft gestalten. Verantwortung übernehmen.`}
                        />
                    </ColumnLayout>
                ]}
                backgroundType={`light`}
            />,
            <Footer
                name={`EA Systems Dresden GmbH`}
                streetHouseNumber={`Würzburger Str. 14`}
                zipCodeCity={`01187 Dresden`}
                country={`Deutschland`}
                telephone={`+49 351 467136 55`}
                email={`info@ea-energie.de`}
                homepage={`https://www.ea-energie.de/`}
                logo={`https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/logo_vektor_white.png`}
                logoApp={`https://digitaltwin.easd.cloud/easd-content/uploads/2023/12/unbenannt-768x959.png`}
                linkItems={[
                    { label: "Impressum", href: "https://www.ea-energie.de/de/unternehmen/impressum/" },
                    { label: "Datenschutz", href: "https://www.ea-energie.de/de/datenschutzerklaerung/" },
                ]}
            />
        ],
    }
};
