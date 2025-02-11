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

export const Index = () => {
  return (
    <React.Fragment>
      <Introduction/>
      <Experience/>
      <Skills/>
      <Languages/>
      <Footer/>
    </React.Fragment>
  );
};

export default Index;
