import React from 'react';
import { css } from 'react-emotion'
import { rhythm } from '../../../utils/typography'
export const Footer = () => (
      <footer className={css`
        margin-top: ${rhythm(1)};
        float: right;
      `}>
        <span>Created by creator</span> | <span>Copyright 2018</span>
      </footer>
    )
