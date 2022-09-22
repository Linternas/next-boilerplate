import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
          {/* // 여기에 폰트 임포트 */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
