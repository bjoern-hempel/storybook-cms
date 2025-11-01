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
import {Footer} from "@/components/Organisms/Footer/Footer.tsx";

const meta = {
    title: 'Organisms/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        streetHouseNumber: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        zipCodeCity: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        country: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        telephone: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        email: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        homepage: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        logo: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        logoApp: {
            control: { type: 'text' },
            table: { category: 'Content' },
        },
        linkItems: {
            control: { type: "object" },
            table: { category: "Content" },
        },
    },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        name: "EA Systems Dresden GmbH",
        streetHouseNumber: "Würzburger Str. 14",
        zipCodeCity: "01187 Dresden",
        country: "Deutschland",
        telephone: "+49 351 467136 55",
        email: "info@ea-energie.de",
        homepage: "https://www.ea-energie.de/",
        logo: "https://digitaltwin.easd.cloud/easd-content/uploads/2025/10/logo_vektor_white.png",
        logoApp: "https://digitaltwin.easd.cloud/easd-content/uploads/2023/12/unbenannt-768x959.png",
        linkItems: [
            { label: "Impressum", href: "https://www.ea-energie.de/de/unternehmen/impressum/" },
            { label: "Datenschutz", href: "https://www.ea-energie.de/de/datenschutzerklaerung/" },
        ],
    },
};
