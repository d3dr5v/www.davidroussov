import React from 'react';
/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import { css } from '@emotion/react';

import backgroundImage from '@/images/background.jpg';

export const Introduction = () => {
  return (
    <div css={css`height: 100vh; position: relative`}>
      <div
        css={css`
          height: 100%;
          width: 100%;
          position: relative;
        `}
      >
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="background"
        />
      </div>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.2) 60%,
            rgba(0, 0, 0, 1)
          );
        `}
      >
        <div
          css={css`
            position: absolute;
            bottom: 10%;
            left: 10%;
          `}
        >
          <h1 className="display-1 text-white fw-bolder">David Roussov</h1>
          <h2 className="text-white fw-bold">Software Developer</h2>
        </div>
      </div>
    </div>
  );
};
