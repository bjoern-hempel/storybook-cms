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
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";

/* Import types. */
import {typeBackgroundOptions} from "@/types/common-types.ts";
import type {TypeLayoutChildren} from "@/types/common-types.ts";

const meta = {
    title: 'Organisms/Content',
    component: Content,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
        backgroundType: {
            control: { type: 'radio' },
            options: typeBackgroundOptions,
            table: { category: 'Design' },
        },
        isContained: {
            control: { type: 'boolean' },
            table: { category: 'Design' },
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof Content>;

const children: TypeLayoutChildren = [
    <Title title={`Warum ein Digitaler Zwilling?`} type={`h2`} classNames={``} alignment={`left`} />,
    <Paragraph text={`
        Energiewende und Stadtentwicklung brauchen innovative Technologien, Verständnis für diese, sowie Transparenz
        und Akzeptanz innerhalb Entscheider- und Verbrauchergruppen. Der Digitale Zwilling macht sichtbar, wie Gebäude,
        Netze und Technologien zusammenwirken – und wie aus Daten greifbare Entscheidungen werden.
    `} alignment={`left`} classNames={`mb-4 word-break text-hyphens`} />,
    <ColumnLayout layout={`50%:50%`} backgroundType={`none`} isContained={false}>
        <Paragraph text={`
            Energiewende und Stadtentwicklung brauchen innovative Technologien, Verständnis für diese, sowie Transparenz
            und Akzeptanz innerhalb Entscheider- und Verbrauchergruppen. Der Digitale Zwilling macht sichtbar, wie Gebäude,
            Netze und Technologien zusammenwirken – und wie aus Daten greifbare Entscheidungen werden.
        `} alignment={`left`} classNames={`mb-4 word-break text-hyphens`} />
        <Paragraph text={`
            Energiewende und Stadtentwicklung brauchen innovative Technologien, Verständnis für diese, sowie Transparenz
            und Akzeptanz innerhalb Entscheider- und Verbrauchergruppen. Der Digitale Zwilling macht sichtbar, wie Gebäude,
            Netze und Technologien zusammenwirken – und wie aus Daten greifbare Entscheidungen werden.
        `} alignment={`left`} classNames={`mb-4 word-break text-hyphens`} />
    </ColumnLayout>
];

export const ContentDark: Story = {
    args: {
        children: children,
        backgroundType: 'dark',
    },
};

export const ContentLight: Story = {
    args: {
        children: children,
        backgroundType: 'light',
    },
};
