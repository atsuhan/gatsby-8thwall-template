import React from 'react';
import { SEO } from 'src/components';

import styled from '@emotion/styled';
import 'src/styles/static-global-webar.scss';

const Component: React.FCX = () => (
  <React.Fragment>
    <canvas id='canvas' />
  </React.Fragment>
);

const StyledComponent = styled(Component)`
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default ({ path }: { path: string }) => (
  <>
    <SEO title='WebAR-Top' pathname={path} />
    <StyledComponent />
  </>
);
