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
import {CarouselQuote} from "@/components/Organisms/CarouselQuote/CarouselQuote.tsx";

/* Import types. */
import {typeBackgroundOptions} from "@/types/common-types.ts";

const meta = {
    title: 'Organisms/CarouselQuote',
    component: CarouselQuote,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        quotes: {
            control: { type: 'object' },
            table: { category: 'Content' }
        },
        backgroundType: {
            control: { type: 'radio' },
            options: typeBackgroundOptions,
            table: { category: 'Design' },
        },
    },
} satisfies Meta<typeof CarouselQuote>;

export default meta;
type Story = StoryObj<typeof CarouselQuote>;

export const Dark: Story = {
    args: {
        quotes: [
            'Ich sage dir nicht, dass es leicht wird. Ich sage dir, dass es sich lohnen wird.',
            'Egal wie du dich fühlst. Steh auf, zieh dich an und gib niemals auf.',
            'Hör nicht auf wenn es weh tut. Hör auf wenn du fertig bist.',
        ],
        backgroundType: 'dark',
    },
};

export const Light: Story = {
    args: {
        quotes: [
            'Ich sage dir nicht, dass es leicht wird. Ich sage dir, dass es sich lohnen wird.',
            'Egal wie du dich fühlst. Steh auf, zieh dich an und gib niemals auf.',
            'Hör nicht auf wenn es weh tut. Hör auf wenn du fertig bist.',
        ],
        backgroundType: 'light',
    },
};
