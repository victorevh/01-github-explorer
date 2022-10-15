import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --bg:#fff;
        --eletric-violet: #7510F7;

        //card
        --bg-secondary: #f9f9fb;
        --border-primary: #cfcfd8;
        --color-headings: #1b1b1b;
        --color-textCard: #4e4e4e;
    }
    
    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 728px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        font: 16px "Helvetica Neue", Arial, sans-serif;
        color: var(--color-headings);
        justify-content: center;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--bg);
        padding: 3rem;
        position: relative;
        background-color: var(--bg);
        border-radius: 5px;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`



