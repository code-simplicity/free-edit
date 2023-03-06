import {createContext } from "react";

export type ThemeContextProps = {
    /**
     * 主题
     */
    theme?: string,
}

/**
 * 主题上下文
 */
export const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
})