import { ThemeProvider } from "./ThemeProvider";

export const withTheme = (Story, context) => {
    const theme = context.globals.theme;
    return (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    );
};
