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
import {Image} from "@/components/Atoms/Image/Image.tsx";

const meta = {
    title: "Atoms/Image",
    component: Image,
    parameters: {
        layout: "fullscreen",
    },
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        alt: {
            control: { type: 'text' },
            table: { category: 'Content' }
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/istock-636304660-2-1-2048x1536.jpg",
        alt: "Digital Twin",
        classNames: "mb-0"
    },
};
