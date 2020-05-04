import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

import ModeButton from './mode-button';

const Component: React.FCX = ({ className }) => (
  <header className={className}>
    <h1>atsuhan gatsby template</h1>
    <nav>
      <ul>
        <li>
          <Link to='/'>Top</Link>
        </li>
        <li>
          <Link to='/404'>404</Link>
        </li>
        <li>
          <ModeButton />
        </li>
      </ul>
    </nav>
  </header>
);

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > nav {
    padding: 2rem;
    > ul {
      display: flex;
      justify-content: center;
      list-style: none;
      > li {
        > a {
          padding: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledComponent;
