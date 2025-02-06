import React, { useState, useRef } from 'react';
/** @jsxImportSource @emotion/react */

import { Introduction, Experience, Skills, Footer } from '@/components';

export const Index = () => {
  return (
    <React.Fragment>
      <Introduction/>
      <Experience/>
      <Skills/>
      <Footer/>
    </React.Fragment>
  );
};

export default Index;
