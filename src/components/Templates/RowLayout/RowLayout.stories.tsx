import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";

const meta = {
    title: 'Templates/RowLayout',
    component: RowLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundType: {
            control: { type: 'radio' },
            table: { category: 'Design' },
        },
        isContained: {
            control: { type: 'boolean' },
            table: { category: 'Design' },
        }
    },
} satisfies Meta<typeof RowLayout>;

export default meta;
type Story = StoryObj<typeof RowLayout>;

const text = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
    sit amet.
`;

const children = [
    <Title title={`Title 1`} type={`h3`} />,
    <Paragraph text={`Text for paragraph 1. ${text}`} classNames={`mb-0 word-break text-hyphens`} />
];

export const Default: Story = {
    args: {
        backgroundType: "dark",
        isContained: true,
        children: children
    },
};