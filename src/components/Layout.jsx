import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Provider as RebassProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import Topbar from './Topbar';
import Footer from './Footer';


injectGlobal`
  body, div, p {
    margin: 0;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  .wrapper {
    min-height: inherit;
  }
  picture: {
    z-index: -1;
  }
`;

const Layout = ({ children, ...props }) => (
  <RebassProvider
    is={Flex}
    bg="dimgray"
    fontFamily="monospace"
    flexDirection="column"
    css={{ minHeight: '100vh' }}
    justifyContent="space-between"
  >
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <div className="wrapper">

          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
          >
            <html lang={data.site.siteMetadata.language} />
          </Helmet>

          <Flex
            flexDirection='column'
            justifyContent="space-between"
            css={{ minHeight: 'inherit' }}
          >

            <div css={{ position: 'sticky', top: 0, zIndex: '100' }}>
              <Topbar />
            </div>

            <Box >
              {children}
            </Box>

            <Box >
              <Footer />
            </Box>

          </Flex>

        </div>
      )}
    />


  </RebassProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
