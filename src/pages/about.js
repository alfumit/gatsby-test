import React from  'react';
import HeaderCustom from '../components/header-custom';
import Layout from '../components/layout-custom';

export default () => (
  <Layout>
    <div style={{color: 'teal'}}>
      <HeaderCustom headerText={"Everybody's singing lalalalalala"} />
      <HeaderCustom headerText={"Weeeee"} />
      <p>Such wow. Very React.</p>
      <h1>About me</h1>
      <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    </div>
  </Layout>
)
