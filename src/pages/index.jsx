import React from 'react';
import { Flex } from 'rebass';
import Layout from '../components/Layout';
import Landing from '../components/Landing';

const IndexPage = (props) => (
  <Flex flexDirection="column" >
    <Layout >
      <Landing flex={1}/>
    </Layout>
  </Flex>
);

export default IndexPage;
