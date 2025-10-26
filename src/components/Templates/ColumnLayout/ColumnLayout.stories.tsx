import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";

const meta = {
    title: 'Templates/ColumnLayout',
    component: ColumnLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        layout: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        backgroundType: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof ColumnLayout>;

const text = `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
sit amet.
`;

const children = [
    <>
        <Title title={`Title 1`} type={`h3`} />
        <Paragraph text={`Text for paragraph 1. ${text}`} className={`mb-0`} />
    </>,
    <>
        <Title title={`Title 2`} type={`h3`} />
        <Paragraph text={`Text for paragraph 2. ${text}`} className={`mb-0`} />
    </>,
    <>
        <Title title={`Title 3`} type={`h3`} />
        <Paragraph text={`Text for paragraph 3. ${text}`} className={`mb-0`} />
    </>,
    <>
        <Title title={`Title 4`} type={`h3`} />
        <Paragraph text={`Text for paragraph 4. ${text}`} className={`mb-0`} />
    </>,
];

export const OneColumn: Story = {
    args: {
        layout: "100%",
        backgroundType: "dark",
        children: children
    },
};

export const TwoColumns: Story = {
    args: {
        layout: "50%:50%",
        backgroundType: "dark",
        children: children
    },
};

export const TwoColumns_2to1: Story = {
    args: {
        layout: "66%:33%",
        backgroundType: "dark",
        children: children
    },
};

export const TwoColumns_1to2: Story = {
    args: {
        layout: "33%:66%",
        backgroundType: "dark",
        children: children
    },
};

export const ThreeColumns: Story = {
    args: {
        layout: "33%:33%:33%",
        backgroundType: "dark",
        children: children
    },
};

export const FourColumns: Story = {
    args: {
        layout: "25%:25%:25%:25%",
        backgroundType: "dark",
        children: children
    },
};
