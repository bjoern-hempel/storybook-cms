import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {ValueCardSet} from "@/components/Molecules/ValueCardSet/ValueCardSet.tsx";

const meta = {
    title: "Molecules/ValueCardSet",
    component: ValueCardSet,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        items: {
            control: { type: "object" },
            table: { category: "Content" }
        },
        classNames: {
            control: { type: "text" },
            table: { category: "Design" },
        },
    },
} satisfies Meta<typeof ValueCardSet>;

export default meta;
type Story = StoryObj<typeof ValueCardSet>;

export const Default: Story = {
    args: {
        items: [
            {
                text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                alt: "Entscheidungen unterstützen",
                cols: 6,
                classNames: "mb-0"
            },
            {
                text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                alt: "Entscheidungen unterstützen",
                cols: 6,
                classNames: "mb-0"
            },
            {
                text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                alt: "Entscheidungen unterstützen",
                cols: 4,
                classNames: "mb-0"
            },
            {
                text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                alt: "Entscheidungen unterstützen",
                cols: 4,
                classNames: "mb-0"
            },
            {
                text: "Entscheidungen unterstützen – durch nachvollziehbare Simulationen",
                src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/entscheidungen-150x150.png",
                alt: "Entscheidungen unterstützen",
                cols: 4,
                classNames: "mb-0"
            }
        ],
        classNames: "mb-0"
    },
};
