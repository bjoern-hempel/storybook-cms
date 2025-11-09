/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { ReactNode, useEffect } from "react";

export const themes = ['darkblue', 'blue', 'lightblue', 'green', 'cyan', 'purple', 'orange'];
export const colors = ['yellow', 'pink', 'orange', 'red', 'blue'];

export interface ThemeProviderProps {
    theme: string;
    color: string;
    children: ReactNode;
}

export const ThemeProvider = ({
    theme,
    color,
    children,
}: ThemeProviderProps) => {
    useEffect(() => {
        themes.forEach((theme) => {
            document.documentElement.classList.remove(`theme-${theme}`);
        });
        colors.forEach((color) => {
            document.documentElement.classList.remove(`color-${color}`);
        });

        document.documentElement.classList.add(themes.includes(theme) ? `theme-${theme}` : `theme-${themes[0]}`);
        document.documentElement.classList.add(colors.includes(color) ? `color-${color}` : `color-${colors[0]}`);
    }, [theme, color]);

    return <>{children}</>;
};
