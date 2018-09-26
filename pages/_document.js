import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

import { GA_TRACKING_ID } from '@common/lib/gtag'

injectGlobal`
.header{
  transition: 0.25s all ease-in-out;
  svg .logo-bg{
    transition: 0.25s all ease-in-out;
  }
}
.headroom.headroom--scrolled{
  box-shadow: 0 3px 12px rgba(37,0,105,.32);
  .header{
    background:#211f6d;
    svg .logo-bg{
      fill: transparent!important;
    }   
  }
}`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <title>Blockstack</title>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
