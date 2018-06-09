"use strict"
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import GridInStyle from './gridInStyle';

const Html = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

module.exports = (context, callback) => {
    const sheet = new ServerStyleSheet();
    const body = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<GridInStyle />));
    const styles = sheet.getStyleTags(); 
    const title = 'OpenFAAS Server side Rendering with Styled Components';
    callback(undefined, Html({body, styles, title}));
}
