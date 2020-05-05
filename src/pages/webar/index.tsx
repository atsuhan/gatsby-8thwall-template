// Base
import React from 'react';
import { SEO } from 'src/components';
import styled from '@emotion/styled';

// webar
import 'src/styles/static-global-webar.scss';
import keys from 'src/data/keys.json';
import ScriptTag from 'src/components/ScriptTag';
import EighthWallHandler from 'src/components/EighthWall/EighthWallHandler';

const Component: React.FCX = () => (
  <div className='eighthwall-container'>
    <ScriptTag name='threejs' src='https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js' />
    <ScriptTag name='xrextras' src='//cdn.8thwall.com/web/xrextras/xrextras.js' />
    <ScriptTag name='xrweb' src={`//apps.8thwall.com/xrweb?appKey=${keys.EIGHTHWALL}`} isAsync />
    <EighthWallHandler
      customPipelineModule={() => ({
        name: `test`,
      })}
    />
  </div>
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
