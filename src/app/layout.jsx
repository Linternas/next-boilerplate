import ReactQueryProvider from '../components/react-query';

import LayoutWrapper from '../components/layoutWrapper';

import '../assets/styles/main.scss';

import { Providers } from 'src/redux/provider';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />

        {/* meta tag */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />

        <meta name="title" content="" />
        <meta name="description" content="" />
      </head>

      <body>
        <ReactQueryProvider>
          <Providers>
            <LayoutWrapper>
              <div className="content">{children}</div>
            </LayoutWrapper>
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
