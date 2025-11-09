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
import {CarouselQuote} from "@/components/Organisms/CarouselQuote/CarouselQuote.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {Header} from "@/components/Organisms/Header/Header.tsx";
import {Hero} from "@/components/Organisms/Hero/Hero.tsx";
import {InfoCard} from "@/components/Molecules/InfoCard/InfoCard.tsx";
import {List} from "@/components/Atoms/List/List.tsx";
import {Main} from '@/components/Pages/Content10/Main/Main.tsx';
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {ResponsiveGrid} from "@/components/Templates/ResponsiveGrid/ResponsiveGrid.tsx";
import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";

/* Import assets. */
import HeroImage from "@/assets/image/avocadi.png";
import WhySportImage from "@/assets/image/why-sport.jpg";
import NutritionImage from "@/assets/image/nutrition.jpg";
import MotivationImage from "@/assets/image/motivation.jpg";
import EquipmentImage from "@/assets/image/equipment.jpg";
import PortraitImage from "@/assets/image/portrait.jpg";

const meta = {
    title: 'Pages/Content10/Main',
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
                title={`Life, Lifestyle, Fitness`}
                subtitle={`Dein Körper. Dein Leben. Deine Entscheidung.`}
                logo={HeroImage as string}
                menuItems={[
                    {label: "Blog", onClick: fn() },
                    {label: "Instagram", onClick: fn() },
                ]}
                fixedTop={true}
            />,
            <Hero
                src={`https://benkert.life/user/pages/01.home/_stage/main.jpeg`}
                title={`Life, Lifestyle, Fitness`}
                subtitle={`Dein neues Leben beginnt. Hier!`}
            />,
            <TextImage
                src={PortraitImage as string}
                alt={`Was ist der Digitale Zwilling?`}
                backgroundType={`dark`}
                columnLayout={`33%:66%`}
                imageAlignment={`left`}
            >
                <Title
                    title={`Hi, ich bin Isa`}
                    type={`h2`}
                    classNames={``}
                    alignment={`left`}
                />
                <Paragraph
                    text={`
                        Ausgebildete Fitnesstrainerin. Mit dem Willen dich zum Sport zu motivieren. Ich habe eine
                        Fitnesstrainer B Lizenz und möchte dir zeigen wie einfach es ist unseren inneren Schweinehund
                        zu überwinden. Denn Sport macht Spaß und fühlt sich gut an.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`
                        Du suchst Jemanden, der dich motiviert und dich so gut es geht zu Höchstleistungen treibt?
                        Dann bist du bei mir genau richtig.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <ColumnLayout backgroundType={`none`} isContained={false} layout={`33%:33%:33%`} classNames={`mt-5`}>
                    <Button
                        label={`Erzähl mir mehr`}
                        onClick={() => { fn() }}
                        primary={true}
                    />
                    <Button
                        label={`Finde mich auf Instagram`}
                        onClick={() => { fn() }}
                        primary={true}
                    />
                </ColumnLayout>
            </TextImage>,
            <TextImage
                src={`https://benkert.life/user/themes/own/img/ipadBG2.png`}
                alt={`Was ist der Digitale Zwilling?`}
                backgroundType={`light`}
                columnLayout={`66%:33%`}
                imageAlignment={`right`}
            >
                <Title
                    title={`Dein Start in ein neues Körpergefühl`}
                    type={`h2`}
                    classNames={``}
                    alignment={`left`}
                />
                <Paragraph
                    text={`
                        Es gibt unzählige Apps, Programme und Pläne für Sport, Fitness und Ernährung. Und sie
                        funktionieren – für Menschen, die sich selbst dauerhaft motivieren können. Wenn das bei
                        dir (noch) nicht so ist, ist das völlig normal.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`
                        Nicht jeder schafft es, allein den ersten Schritt zu machen oder langfristig dranzubleiben.
                        Oft fehlt nur ein kleiner Impuls von außen. Genau dabei unterstütze ich dich.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`
                        <strong>Ob Anfänger oder fortgeschritten</strong>: Mit einem individuellen Privattraining
                        bekommst du Motivation, Struktur und einen klaren Einstieg – ohne Überforderung. Gemeinsam
                        finden wir heraus, was dich antreibt und wie du Sport zu einem festen, positiven Teil deines
                        Lebens machen kannst. Dabei geht es nicht um Perfektion, sondern um echte Entwicklung.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`
                        Du bekommst:
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <List
                    items={[
                        'Motivation, die bleibt',
                        'Bewegung, die zu dir passt',
                        'Ernährungstipps, die alltagstauglich sind',
                        'Ein neues Bewusstsein für deinen Körper',
                    ]}
                    style="list-standard"
                />
                <Paragraph
                    text={`
                        Ich zeige dir, wie du Fortschritte erkennst, Training verstehst und Spaß daran findest.
                        So wirst du Schritt für Schritt selbstständig und kannst deinen Weg eigenständig weitergehen –
                        mit Kraft und Selbstvertrauen.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`Wenn du bereit bist, etwas zu verändern: Lass uns starten.`}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`<strong>Dein</strong> Training. <strong>Dein</strong> Gefühl. <strong>Dein</strong> Momentum.`}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <ColumnLayout backgroundType={`none`} isContained={false} layout={`33%:33%:33%`}>
                    <Button
                        label={`Erzähl mir mehr`}
                        onClick={() => { fn() }}
                        primary={true}
                        classNames={`mt-3`}
                    />
                    <Button
                        label={`Finde mich auf Instagram`}
                        onClick={() => { fn() }}
                        primary={true}
                        classNames={`mt-3`}
                    />
                </ColumnLayout>
            </TextImage>,
            <CarouselQuote
                quotes={[
                    'Ich sage dir nicht, dass es leicht wird. Ich sage dir, dass es sich lohnen wird.',
                    'Egal wie du dich fühlst. Steh auf, zieh dich an und gib niemals auf.',
                    'Hör nicht auf wenn es weh tut. Hör auf wenn du fertig bist.',
                ]}
                backgroundType={`dark`}
            />,
            <Content backgroundType={`light`}>
                <Title
                    title={`Dein Weg zu mehr Fitness, Energie und Wohlbefinden`}
                    type={`h2`}
                    classNames={``}
                    alignment={`left`}
                />
                <Paragraph
                    text={`
                        Sport ist weit mehr als Training für den Körper. Er stärkt auch deine mentale Widerstandskraft,
                        steigert dein Selbstvertrauen und bringt Struktur in deinen Alltag. Viele starten motiviert –
                        und verlieren dann unterwegs den Fokus. Genau hier setzen wir an. Gemeinsam finden wir heraus,
                        was dich antreibt, wie du Motivation langfristig hältst, welche Ernährung zu deinen Zielen
                        passt und welche Ausrüstung sinnvoll ist. Schritt für Schritt. Klar. Verständlich. Nachhaltig.
                    `}
                />
                <ResponsiveGrid
                    items={[
                        {
                            child: <InfoCard
                                title={`Warum Sport?`}
                                src={WhySportImage as string}
                                alt={`Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit`}
                                classNames={`h-100`}
                                ratio={'16x9'}
                                backgroundType={`dark`}
                            >
                                <Paragraph
                                    text={`
                                        Sport wirkt nicht nur auf deinen Körper, sondern auch auf deine mentale Stärke.
                                        Regelmäßige Bewegung kann Stress reduzieren, deine Stimmung heben und dein
                                        Selbstbewusstsein stärken. Gleichzeitig hilft sie dir, Ziele zu setzen und
                                        dranzubleiben. Vielleicht willst du fitter werden, leistungsfähiger sein oder
                                        dich einfach wohler fühlen – entscheidend ist, dass du verstehst, wie Bewegung,
                                        Motivation und persönliches Wachstum zusammenhängen. Ich begleite dich dabei
                                        und zeige dir, wie du Sport zu einem festen, positiven Teil deines Lebens machst.
                                    `}
                                    alignment={`left`}
                                    classNames={null}
                                />
                            </InfoCard>,
                            cols: 12,
                            colsSm: 12,
                            colsMd: 6,
                        },
                        {
                            child: <InfoCard
                                title={`Ernährung`}
                                src={NutritionImage as string}
                                alt={`Detailtiefe Energiesystemanalysen & Resilienzbetrachtungen`}
                                classNames={`h-100`}
                                ratio={'16x9'}
                                backgroundType={`dark`}
                            >
                                <Paragraph
                                    text={`
                                            Welche Nährstoffe braucht unser Körper, wenn wir Sport treiben?
                                            Grundsätzlich hängt das von deinem Ziel ab. Möchtest du abnehmen, ist vor
                                            allem deine Kalorienbilanz entscheidend. Willst du Muskeln aufbauen,
                                            braucht dein Körper ausreichend Eiweiß, Kohlenhydrate und gesunde Fette
                                            in der richtigen Zusammensetzung. Und wenn du einfach nur dein aktuelles
                                            Level halten möchtest, geht es um Balance und Kontinuität. Ich zeige dir,
                                            worauf es wirklich ankommt. Wichtig ist am Ende immer die Qualität und die
                                            richtige Mischung der Nährstoffe.
                                        `}
                                    alignment={`left`}
                                    classNames={null}
                                />
                            </InfoCard>,
                            cols: 12,
                            colsSm: 12,
                            colsMd: 6,
                        },
                        {
                            child: <InfoCard
                                title={`Wie motiviert man sich?`}
                                src={MotivationImage as string}
                                alt={`Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit`}
                                classNames={`h-100`}
                                ratio={'16x9'}
                                backgroundType={`dark`}
                            >
                                <Paragraph
                                    text={`
                                        Mehr Sport zu machen, nehmen sich viele fest vor. Doch oft hält die
                                        Anfangseuphorie nicht lange an. Der Alltag holt einen ein, die Motivation
                                        sinkt, und am Ende bleibt nur das schlechte Gewissen. Vielleicht kennst du das:
                                        Du startest hochmotiviert und brichst nach kurzer Zeit wieder ab. Genau hier
                                        setzen wir an. Gemeinsam finden wir heraus, was dich wirklich antreibt, wie du
                                        dranbleibst und Sport zu einem festen Bestandteil deines Alltags wird. Ich
                                        zeige dir, wie das gelingt.
                                    `}
                                    alignment={`left`}
                                    classNames={null}
                                />
                            </InfoCard>,
                            cols: 12,
                            colsSm: 12,
                            colsMd: 6,
                        },
                        {
                            child: <InfoCard
                                title={`Fitnessausrüstung`}
                                src={EquipmentImage as string}
                                alt={`Detailtiefe Energiesystemanalysen & Resilienzbetrachtungen`}
                                classNames={`h-100`}
                                ratio={'16x9'}
                                backgroundType={`dark`}
                            >
                                <Paragraph
                                    text={`
                                            Welche Fitnessausrüstung für dich sinnvoll ist, hängt vor allem von deinem
                                            Alltag und deinem Platz zu Hause ab. Hast du Raum, um Geräte dauerhaft
                                            aufzustellen und zu verstauen? Oder soll dein Wohnzimmer trainingsfrei
                                            bleiben und du möchtest lieber draußen oder im Studio aktiv sein? Ob
                                            Hanteln, Resistance Bands, eine Matte oder doch das Fitnessstudio –
                                            entscheidend ist, was zu dir, deinem Ziel und deinem Lebensstil passt.
                                            Wir schauen uns gemeinsam an, welche Ausstattung wirklich Sinn ergibt.
                                        `}
                                    alignment={`left`}
                                    classNames={null}
                                />
                            </InfoCard>,
                            cols: 12,
                            colsSm: 12,
                            colsMd: 6,
                        }
                    ]}
                    backgroundType={`none`}
                    isContained={false}
                />
            </Content>
        ],
    }
};
