/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { ReactNode, useEffect } from "react";

export const ThemeProvider = ({
    theme,
    children,
}: {
    theme: string;
    children: ReactNode;
}) => {
    useEffect(() => {
        document.documentElement.classList.remove(
            'theme-darkblue',
            'theme-blue',
            'theme-lightblue',
            'theme-green',
            'theme-cyan',
            'theme-purple',
            'theme-orange',
        );
        document.documentElement.classList.add(theme);
    }, [theme]);

    return <>{children}</>;
};
