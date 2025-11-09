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
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {Header} from "@/components/Organisms/Header/Header.tsx";
import {Hero} from "@/components/Organisms/Hero/Hero.tsx";
import {Main} from '@/components/Pages/Content10/Main/Main.tsx';
import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {CarouselQuote} from "@/components/Organisms/CarouselQuote/CarouselQuote.tsx";
import {ResponsiveGrid} from "@/components/Templates/ResponsiveGrid/ResponsiveGrid.tsx";
import {InfoCard} from "@/components/Molecules/InfoCard/InfoCard.tsx";

/* Import assets. */
import HeroImage from "@/assets/image/avocadi.png";
import WhySportImage from "@/assets/image/why-sport.jpg";
import NutritionImage from "@/assets/image/nutrition.jpg";
import MotivationImage from "@/assets/image/motivation.jpg";
import EquipmentImage from "@/assets/image/equipment.jpg";

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
                src={`https://benkert.life/user/themes/own/img/ipadBG2.png`}
                alt={`Was ist der Digitale Zwilling?`}
                backgroundType={`dark`}
                columnLayout={`66%:33%`}
                imageAlignment={`right`}
            >
                <Title
                    title={`Push life`}
                    type={`h2`}
                    classNames={``}
                    alignment={`left`}
                />
                <Paragraph
                    text={`
                        Es gibt tausende Apps, Programme und Anleitungen für <strong>Sport</strong>,
                        <strong>Fitness</strong> und <strong>Ernährung</strong>.
                        Sie sind gut für alle, die sich selbst motivieren und begeistern können. Ich liebe sie! :)
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`
                        Nicht jeder ist in der Lage aus sich selbst heraus die Kraft und den Willen zur
                        Selbstmotivation zu generieren. Der Wille ist da, aber es braucht oft noch einen kleinen
                        Stubs. Eine Motivationshilfe. Für alle, die nicht die Kraft und den Willen dazu aufbringen
                        können, biete ich meine Hilfe an. Mit vielen Tipps, Unterstützung und einem perfekten
                        Einstieg ins Training. Dein Privattraining. Dabei ist es egal, ob du Anfänger bist oder
                        dich in einem fortgeschrittenen Level befindest. Mit einem Privattraining biete ich dir
                        Motivation, Spaß und helfe dir das Beste aus dir herauszuholen. Du glaubst es nicht?
                        Probier es aus und mach ein Training mit mir. Zusammen bringe ich dir bei dich selbst
                        motivieren zu können. Damit du zukünftig allein und für dich entscheiden kannst, wohin
                        deine Reise gehen wird.
                    `}
                    alignment={`left`}
                    classNames={`word-break text-hyphens`}
                />
                <Paragraph
                    text={`
                        Ein Training hat viele Vorteile. Du wirst beweglicher und ausgeglichener. Um nur zwei
                        zu nennen. Zusammen mit mir und meinen Fitnesserfahrungen zeige ich dir wie du dich
                        motivierst. Du bekommst Ernährungstipps und wirst ein völlig neues Körpergefühl
                        kennenlernen. Du wirst von mir motiviert von allein weiterzumachen. Trainingsabläufe
                        und Zusammenhänge wirst du verstehen und lieben lernen! So wie ich. Mein Training ist
                        für all jene, die keine Motivation haben, aber motiviert werden möchten. Von mir.
                    `}
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
                backgroundType={`light`}
            />,
            <Content backgroundType={`dark`}>
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
            {/*</Content>,*/}
            {/*<Content backgroundType={`light`}>*/}
                <ResponsiveGrid
                    items={[
                        {
                            child: <InfoCard
                                title={`Warum Sport?`}
                                src={WhySportImage as string}
                                alt={`Kommunikation, Beteiligung, Bildung & Öffentlichkeitsarbeit`}
                                classNames={`h-100`}
                                ratio={'16x9'}
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
