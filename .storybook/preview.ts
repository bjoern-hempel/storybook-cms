import type {Preview} from '@storybook/react-vite';

/* Import themes. */
import {withTheme} from "./theme/withTheme";

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
                icon: 'structure',
                items: ['theme-blue', 'theme-green'],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'theme-blue',
    },

    decorators: [withTheme],
};

export default preview;