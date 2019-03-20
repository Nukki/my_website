import PropTypes from 'prop-types';
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Flex, Text, Box } from 'rebass';

const Footer = (props) => (
  <StaticQuery
    query={logoQuery}
    render={renderFooter}
  />
);
export default Footer;

const renderFooter = (data) => (
  <Flex
    pt={3}
    pb={1}
    bg="dimgray"
    color="silver"
    flexDirection='column'
    justifyContent='start'
    fontFamily="sans-serif"
  >
    <Flex
      flex={3}
      pt={[3, 4]}
      pb={[2, 1]}
      flexDirection='row'
      justifyContent='center'
    >

      <Flex
        flex={1}
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          mr={1}
          fontSize={[0, 1, 2]}
          fontFamily="sans-serif"
          fontWeight="300"
        >
          Built with
        </Text>
        <Img style={{ width: '18px' }} fluid={data.gatsby.childImageSharp.fluid} />
        <Text
          ml={1}
          fontSize={[0, 1, 2]}
          fontFamily="sans-serif"
          fontWeight="300"
        >
          Gatsby.js
        </Text>
      </Flex>

      <Flex
        flex={1}
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          mr={1}
          fontSize={[0, 1, 2]}
          fontFamily="sans-serif"
          fontWeight="300"
        >
          Hosted on
        </Text>
        <Img style={{ width: '18px' }} fluid={data.netlify.childImageSharp.fluid} />
        <Text
          ml={1}
          fontSize={[0, 1, 2]}
          fontFamily="sans-serif"
          fontWeight="300"
        >
          Netlify
        </Text>
      </Flex>

    </Flex>

    <Text
      flex={1}
      align="center"
      fontSize={[0, 1, 2]}
      fontFamily="sans-serif"
      fontWeight="300"
    >
      Nikki Jack &copy; 2019
    </Text>
  </Flex>
);

export const footerImage = graphql`
fragment footerImage on File {
  childImageSharp {
    fluid(maxWidth: 100) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const logoQuery = graphql`
  query {
    gatsby: file(relativePath: { eq: "gatsby.png" }) {
      ...footerImage
    }
    netlify: file(relativePath: { eq: "netlify.png" }) {
      ...footerImage
    }
  }
`
