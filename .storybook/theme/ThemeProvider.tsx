
import { ReactNode, useEffect } from "react";

export const ThemeProvider = ({
                                  theme,
                                  children,
                              }: {
    theme: string;
    children: ReactNode;
}) => {
    useEffect(() => {
        document.documentElement.classList.remove("theme-blue", "theme-green");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return <>{children}</>;
};
