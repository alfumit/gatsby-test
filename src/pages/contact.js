import React from 'react';
import { Link } from 'gatsby';
import HeaderCustom from '../components/header-custom';

export default () => (
  <div style={{color: 'teal'}}>
    <Link to="/">Home</Link>
    <HeaderCustom headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)
