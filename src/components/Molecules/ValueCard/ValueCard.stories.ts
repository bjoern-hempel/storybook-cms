import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {ValueCard} from "@/components/Molecules/ValueCard/ValueCard.tsx";

const meta = {
    title: "Molecules/ValueCard",
    component: ValueCard,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        text: {
            control: { type: "text" },
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
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof ValueCard>;

export default meta;
type Story = StoryObj<typeof ValueCard>;

export const Default: Story = {
    args: {
        text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
        src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
        alt: "Entscheidungen unterstützen",
        classNames: "mb-0"
    },
};
