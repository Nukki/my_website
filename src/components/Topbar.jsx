import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Box, Flex } from 'rebass';
import { FaGithubSquare, FaLinkedin, FaFileAlt, FaEnvelopeSquare } from 'react-icons/fa';

const Topbar = (props) => (
  <StaticQuery
    query={pdfQuery}
    render={renderTopBar}
  />
);
export default Topbar;


const renderTopBar = (data) => (
  <Flex
    py={[2, 3]}
    bg="dimgray"
    justifyContent="center"
    adjustItems="center"
    style={{ zIndex: 1}}
  >
    <Box flex={[1, 1, 3]} />
    <Flex justifyContent="space-around" flex={[6, 5, 2]} alignItems="center">
      <a
        href="https://github.com/Nukki"
        style={{ textDecoration: 'none', color: 'aliceblue'}}
      >
        <FaGithubSquare size={45} />
      </a>

      <a
        href="https://linkedin.com/in/nikkijacktech"
        style={{ textDecoration: 'none', color: 'aliceblue'}}
      >
        <FaLinkedin size={45} />
      </a>
      <a
        href="mailto:nikkijacktech@gmail.com"
        style={{ textDecoration: 'none', color: 'aliceblue'}}
      >
        <FaEnvelopeSquare size={45} />
      </a>
      <a
        style={{ textDecoration: 'none', color: 'aliceblue'}}
        rel="noopener noreferrer"
        target="_blank"
        href={data.allFile.edges[0].node.publicURL}
      >
        <FaFileAlt size={38} />
      </a>

    </Flex>
    <Box flex={[1, 1, 3]} />
  </Flex>
);

export const pdfQuery = graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
