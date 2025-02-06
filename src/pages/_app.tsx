import React from 'react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

export const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="referrer" content="no-referrer" />
      </Head>
      <Global
        styles={css`
          body {
            background-color: #fff;
            margin: 0;
            padding: 0;
            width: 100%;
          }
        `}
      />
      <Component {...pageProps}/>
    </React.Fragment>
  );
};

export default App;
