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
import {List} from "@/components/Atoms/List/List.tsx";

const meta = {
    title: "Atoms/List",
    component: List,
    parameters: {
        layout: "padded",
    },
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: { type: 'object' },
            table: { category: 'Content' }
        },
        style: {
            control: { type: 'select' },
            table: { category: 'Design' }
        },
        classNames: {
            control: { type: 'text' },
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        items: [
            "Wie viel Strom erzeugt die PV-Anlage heute?",
            "Wann arbeitet die Wärmepumpe am effizientesten?",
            "Wie wirkt sich das Nutzerverhalten auf den Energieverbrauch aus?",
        ],
        style: "list-standard"
    },
};
