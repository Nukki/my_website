import PropTypes from 'prop-types';
import React from 'react';
import { Flex, Box, Container, Text, Heading, Card } from 'rebass';
import Img from 'gatsby-image';
import { FaYoutube, FaGithub, FaExternalLinkAlt, FaTwitter } from 'react-icons/fa';


const Project = ({ name, img, github, demo, live, tech, description, twitter, ...props }) => (
  <Flex justifyContent="center">
    <Card
      width={[ 270, 350 ]}
      px={3}
      pt={[0, 4]}
      mb={[ 4, 4, 5 ]}
      mx='auto'
      bg='aliceblue'
      color='dimgray'
      variant='basic'
      boxShadow="none"
    >

      <Flex
        justifyContent="center"
        alignItems="center"
        css={{ height: '250px'}}
      >
        <Img css={{ width: '75%' }} fluid={img} />
      </Flex>

      <Flex pt={[0, 3, 4]} justifyContent="center">
        <a href={github} style={{ textDecoration: 'none', color: 'dimgray'}}>
          <FaGithub size={30} />
        </a>
        { live && (
          <a href={live} style={{ textDecoration: 'none', color: 'dimgray', marginLeft: '30px'}}>
            <FaExternalLinkAlt size={30} />
          </a>
          )
        }
        { demo && (
          <a href={demo} style={{ textDecoration: 'none', color: 'dimgray', marginLeft: '30px'}}>
            <FaYoutube size={30} />
          </a>
          )
        }
        { twitter && (
          <a href={twitter} style={{ textDecoration: 'none', color: 'dimgray', marginLeft: '30px'}}>
            <FaTwitter size={30} />
          </a>
          )
        }
      </Flex>

      {
        name && <Heading pt={2} fontFamily="sans-serif" textAlign="center">{name}</Heading>
      }
      <Text mt={2} fontFamily="sans-serif" fontWeight="300">
        {description}
      </Text>
      <Text mt={3} fontFamily="sans-serif" fontWeight="300">
        <Text fontWeight='bold' >TECHNOLOGIES USED:</Text>
        {tech}
      </Text>
    </Card>
  </Flex>
);

export default Project;
