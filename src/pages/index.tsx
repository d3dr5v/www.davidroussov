import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Introduction,
  Experience,
  Skills,
  Footer,
  Languages,
} from '@/components';

const DevToggle = () => {
  return (
    <div css={css`position: absolute; z-index: 1; top: 0px; right: 0px;`}>
      <button
        type="button"
        onClick={() => {
          Router.push('/@');
        }}
        css={css`
          background: transparent;
          color: white;
          border: none;
          padding: 20px;
        `}
      >
        @
      </button>
    </div>
  );
};

export const Index = () => {
  return (
    <React.Fragment>
      <DevToggle />
      <React.Fragment>
        <Introduction/>
        <Experience/>
        <Skills/>
        <Languages/>
        <Footer/>
      </React.Fragment>
    </React.Fragment>
  );
};

export default Index;
