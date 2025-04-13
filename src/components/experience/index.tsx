import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Container } from '@/components';
import upfamilyImage1 from '@/images/upfamily-screenshots/image-1.png';
import upfamilyImage2 from '@/images/upfamily-screenshots/image-2.png';
import upfamilyImage3 from '@/images/upfamily-screenshots/image-3.png';
import axisStreamImage1 from '@/images/axisstream-screenshots/image-1.png';
import axisStreamImage2 from '@/images/axisstream-screenshots/image-2.png';
import inTouchCareImage1 from '@/images/intouchcare-screenshots/image-1.png';
import inTouchCareImage2 from '@/images/intouchcare-screenshots/image-2.png';
import inTouchCareImage3 from '@/images/intouchcare-screenshots/image-3.png';

const ExperienceItems = [
  {
    company: 'Up Family',
    industry: 'Construction',
    year: '2017 - Present',
    website: 'https://up-family.com.au',
    project: 'https://admin.up-family.com.au',
    showcase: true,
    summary: 'Construction productivity software for Australian subcontractors, builders and site workers.',
    screenshots: [
      upfamilyImage1,
      upfamilyImage2,
      upfamilyImage3,
    ],
    tech: [ 'Angular', 'Grails' ],
  },
  {
    company: 'AxisTech',
    industry: 'Agriculture',
    year: '2020 - 2023',
    website: 'https://axistech.co',
    project: 'https://my.axisstream.co',
    showcase: true,
    screenshots: [
      axisStreamImage1,
      axisStreamImage2,
    ],
    summary: 'Agriculture and IoT software for data-intensive farming operations.',
    tech: [ 'Vue', 'Node/Serverless' ],
  },
  {
    company: 'InTouchCare',
    industry: 'Telehealth',
    year: '2021',
    website: '',
    project: 'https://app.intouchcare.com.au',
    showcase: true,
    screenshots: [
      inTouchCareImage1,
      inTouchCareImage2,
      inTouchCareImage3,
    ],
    summary: 'Telehealth doctor consultations and professional profiles.',
    tech: [ 'React', 'Node/Serverless' ],
  },
];

export const Experience = () => {
  const [ screenshotVisibilities, setScreenshotVisibilities ] = useState({});
  
  return (
    <div css={css`background-color: black`}>
      {ExperienceItems.filter(item => item.showcase).map((item, i) => (
        <section key={i} css={css`padding: 100px 0 100px 0;`}>
          <Container>
            <div className="row">
              <div className="col">
                <div className="row justify-content-center">
                  <div className="col-lg-11">
                    <h2 className="display-2 fw-bolder text-white">
                      {item.company}
                    </h2>
                    <p className="text-white-50">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <dl className="row">
                  <dt className="col-3 mb-2 text-white">Year</dt>
                  <dd className="col-9 mb-2 text-white">{item.year}</dd>
                  <dt className="col-3 mb-2 text-white">Industry</dt>
                  <dd className="col-9 mb-2 text-white">{item.industry}</dd>
                  <dt className="col-3 mb-2 text-white">Tech</dt>
                  <dd className="col-9 mb-2 text-white">{item.tech.join(' · ')}</dd>
                  { item.website ?
                    <>
                      <dt className="col-3 mb-2 text-white">Website</dt>
                      <dd className="col-9 mb-2 text-white">
                        <a href={item.website} target="_blank">{item.website}</a>
                      </dd>
                    </> : null
                  }
                </dl>
                <hr className="text-white"/>
                <div className="d-flex align-items-center">
                  <div className="d-flex mx-2">
                    <button
                      type="button"
                      className="btn rounded-pill btn-sm btn-outline-light text-light"
                      css={css`
                        &:hover {
                          color: #000 !important;
                        }
                      `}
                      onClick={() => setScreenshotVisibilities({
                        ...screenshotVisibilities,
                        [i]: !screenshotVisibilities[i],
                      })}
                    >
                      Screenshots
                    </button>
                    { item.project ?
                      <a
                        href={item.project}
                        className="btn ms-2 rounded-pill btn-sm btn-outline-light text-light"
                        css={css`
                          &:hover {
                            color: #000 !important;
                          }
                        `}
                        target="_blank"
                      >
                        App →
                      </a> : null
                    }
                  </div>
                </div>
              </div>
            </div>
            { (item.screenshots && screenshotVisibilities[i]) ? 
              <div className="row" css={css`margin-top: 20px;`}>
                <div className="col-12">
                  <Swiper
                    css={css`
                      img {
                        border-radius: 8px;
                      }
                    `}
                  >
                    { item.screenshots.map((screenshot, index) => (
                      <SwiperSlide key={index} style={{ textAlign: 'center' }}>
                        <Image
                          src={screenshot}
                          height={600}
                          alt="screenshot"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div> : null
            }
          </Container>
        </section>
      ))}
    </div>
  );
};

export default Experience;
