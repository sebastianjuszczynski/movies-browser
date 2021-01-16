import { createGlobalStyle } from "styled-components";

export const footerHeight = 50;

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };
    body {
        background: ${({ theme }) => theme.colors.background};
        font-family: "Poppins", sans-serif;
    };
    main {
        padding-bottom: ${footerHeight + 25}px;
    };
    #root {
        min-height: 100vh;
        position: relative;
    };
`;