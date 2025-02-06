import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Phone from '@/images/phone.svg';
import Mail from '@/images/mail.svg';
import Website from '@/images/website.svg';

const email: string = 'david.roussov@gmail.com';
const github: string = 'https://github.com/d3dr5v';
const phone: string = '0426267131';

export const Footer = () => {
  return (
    <footer className="pb-4 text-light" css={css`padding-top: 100px;`}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <Phone/>
                <div className="ms-2">
                  <a href={`tel:+61{phone.slice(1)}`} className="text-white">
                    {phone}
                  </a>
                </div>
              </li>
              <li className="mb-3 d-flex">
                <Mail/>
                <div className="ms-2">
                  <a href={`mailto:${email}`} className="text-white">
                    {email}
                  </a>
                </div>
              </li>
              <li className="mb-3 d-flex">
                <Website/>
                <div className="ms-2">
                  <a href={github} className="text-white" target="_blank">
                    {github}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-auto text-center">
            <small className="text-muted">
              {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
