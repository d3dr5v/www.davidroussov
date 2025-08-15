import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Container } from '@/components';

const Groups = {
  "Frontend Frameworks": [
    "React",
    "Angular",
    "Vue.js",
    "Next.js",
    "react-admin"
  ],
  "Backend Frameworks": [
    "Node.js",
    "Grails (Groovy)"
  ],
  "Cloud Services": [
    "AWS (EC2, S3, Lambda, RDS, Elastic Beanstalk)",
    "Docker",
    "Terraform",
    "ELK Stack"
  ],
  "CI/CD Tools": [
    "Bitbucket Pipelines",
    "CircleCI"
  ],
  "Databases": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis"
  ],
  "API Technologies": [
    "REST",
    "GraphQL"
  ],
  "Third-Party Integrations": [
    "Stripe",
    "Xero",
    "OpenID",
    "Contentful",
    "Google Calendar API",
    "Google Maps API",
    "Mapbox"
  ]
};

export const Skills = () => {
  return (
    <section
      css={css`
        background: white;
        padding: 100px 0 100px 0;
      `}
    >
      <Container>
        <div className="row">
          <div className="col-12">
            <h2 className="display-2 fw-bolder" css={css`margin-bottom: 50px`}>
              Skills
            </h2>
            <div className="row">
              { Object.keys(Groups).map((skill, i) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                  <div className="card card-sm card-body flex-row align-items-center mb-5 border-0">
                    <div>
                      <h5 className="mb-2">{skill}</h5>
                      {Groups[skill].map(item => (
                        <span
                          key={item}
                          className="badge rounded-pill me-2 text-muted fw-normal"
                          css={css`
                            background: #f1f1f1;
                          `}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
