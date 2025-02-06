import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Container } from '@/components';
import Typescript from '@/images/typescript.svg';
import Java from '@/images/java.svg';
import Python from '@/images/python.svg';
import Rust from '@/images/rust.svg';

export const Languages = () => {
  return (
    <section
      css={css`
        background: #f1f1f1;
        padding: 100px 0 100px 0;
      `}
    >
      <Container>
        <div className="row">
          <div className="col-12">
            <h2 className="display-2 fw-bolder" css={css`margin-bottom: 50px`}>
              Languages
            </h2>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card card-sm card-body mb-5 flex-row align-items-center border-0">

                  <Typescript/>
                  <div className="ms-3">
                    <h5 className="mb-0">TypeScript</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card card-sm card-body mb-5 flex-row align-items-center border-0">
                  <Java/>
                  <div className="ms-3">
                    <h5 className="mb-0">Java</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card card-sm card-body mb-5 flex-row align-items-center border-0">
                  <Python/>
                  <div className="ms-3">
                    <h5 className="mb-0">Java</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card card-sm card-body flex-row align-items-center border-0">
                  <Rust/>
                  <div className="ms-3">
                    <h5 className="mb-0">Rust</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Languages;
