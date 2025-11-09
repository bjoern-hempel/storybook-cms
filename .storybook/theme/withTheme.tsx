/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { ThemeProvider } from "./ThemeProvider";

export const withTheme = (Story, context) => {
    const theme = context.globals.theme;
    const color = context.globals.color;

    return (
        <ThemeProvider theme={theme} color={color}>
            <Story />
        </ThemeProvider>
    );
};
