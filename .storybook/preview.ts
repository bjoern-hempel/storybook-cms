import type {Preview} from '@storybook/react-vite';

/* Import themes. */
import {withTheme} from "./theme/withTheme";
import {colors, themes} from "./theme/ThemeProvider";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        options: {
            storySort: {
                order: [
                    'Pages',
                    'Atoms',
                    'Molecules',
                    'Organisms',
                    'Templates',
                ],
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    },
    globalTypes: {
        // @see: https://storybook.js.org/docs/essentials/toolbars-and-globals
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: 'Theme',
                // @see: https://main--64b56e737c0aeefed9d5e675.chromatic.com/?path=/docs/introduction--docs
                icon: 'box',
                items: themes,
                dynamicTitle: true,
            },
        },
        color: {
            description: 'Secondary color for theme',
            toolbar: {
                title: 'Secondary color',
                // @see: https://main--64b56e737c0aeefed9d5e675.chromatic.com/?path=/docs/introduction--docs
                icon: 'button',
                items: colors,
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'darkblue',
        color: 'darkblue',
    },

    decorators: [withTheme],
};

export default preview;