import { createGlobalStyle } from 'styled-components';

interface Roots {
  [key: string]: string | number;
}

export const roots: Roots = {
  activeButtonBackgroundColor: '#EBEBEB',
  primaryBackgroundColor: '#FFFFFF',
  primaryItemColor: '#FF3216',
  primaryFontSize: 14,
  primaryTextColor: '#212529',
};

export default createGlobalStyle`

:root {
    --active-button-background-color:${roots.activeButtonBackgroundColor};
    --primary-background-color:${roots.primaryBackgroundColor};
    --primary-item-color:${roots.primaryItemColor};
    --primary-font-size:${roots.primaryFontSize};
    --primary-text-color:${roots.primaryTextColor}
};


html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body { min-height: 100vh}

    button{
       cursor:pointer;
    }

`;
