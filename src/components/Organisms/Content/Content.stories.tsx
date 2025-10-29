import type {Meta, StoryObj} from '@storybook/react-vite';

import {type TextChildItem} from "@/components/Organisms/TextImage/TextImage.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {Content} from "@/components/Organisms/Content/Content.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";

const meta = {
    title: 'Organisms/Content',
    component: Content,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundType: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        textChildren: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
    },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof Content>;

const textChildren: TextChildItem[] = [
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
        backgroundType: 'dark',
        textChildren: textChildren
    },
};

export const ContentLight: Story = {
    args: {
        backgroundType: 'light',
        textChildren: textChildren
    },
};
