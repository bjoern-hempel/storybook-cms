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

/* Import assets. */
import HeroImage from "@/assets/image/avocadi.png";
import {TextImage} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";

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
                children={[
                    <Title
                        title={`Push life`}
                        type={`h2`}
                        classNames={``}
                        alignment={`left`}
                    />,
                    <Paragraph
                        text={`
                            Es gibt tausende Apps, Programme und Anleitungen für <strong>Sport</strong>,
                            <strong>Fitness</strong> und <strong>Ernährung</strong>.
                            Sie sind gut für alle, die sich selbst motivieren und begeistern können. Ich liebe sie! :)
                        `}
                        alignment={`left`}
                        classNames={`word-break text-hyphens`}
                    />,
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
                    />,
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
                    />,
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
                ]}
                src={`https://benkert.life/user/themes/own/img/ipadBG2.png`}
                alt={`Was ist der Digitale Zwilling?`}
                backgroundType={`dark`}
                columnLayout={`66%:33%`}
                imageAlignment={`right`}
            />,
        ],
    }
};
