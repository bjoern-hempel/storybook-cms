import type {Meta, StoryObj} from '@storybook/react-vite';

/* Import components. */
import {ResponsiveGrid} from "@/components/Templates/ResponsiveGrid/ResponsiveGrid.tsx";

const meta = {
    title: 'Templates/ResponsiveGrid',
    component: ResponsiveGrid,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: { type: 'object' },
            table: { category: 'Content' },
        },
        backgroundType: {
            control: { type: 'radio' },
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
} satisfies Meta<typeof ResponsiveGrid>;

export default meta;
type Story = StoryObj<typeof ResponsiveGrid>;

const divClassNames = ['p-3', 'border', 'text-center'];

export const Default: Story = {
    args: {
        backgroundType: "dark",
        isContained: true,
        items: [
            {
                child: <div className={divClassNames.join(" ")}>test</div>,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: <div className={divClassNames.join(" ")}>test</div>,
                colsMd: 6,
                classNames: "mb-0"
            },
            {
                child: <div className={divClassNames.join(" ")}>test</div>,
                colsMd: 4,
                classNames: "mb-0"
            },
            {
                child: <div className={divClassNames.join(" ")}>test</div>,
                colsMd: 4,
                classNames: "mb-0"
            },
            {
                child: <div className={divClassNames.join(" ")}>test</div>,
                colsMd: 4,
                classNames: "mb-0"
            },
        ],
        classNames: ''
    },
};