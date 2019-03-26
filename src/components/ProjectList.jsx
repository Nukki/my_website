import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Flex, Box, Container, Text } from 'rebass';
import Project from './Project';


const ProjectList = (props) => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <Flex
        py={[0, 2]}
        bg="dimgray"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        <Project
          name="Melomania"
          img={data.melomania.childImageSharp.fluid}
          github="https://github.com/Nukki/Melomania"
          live="https://melomania-game.herokuapp.com/"
          tech="Javasctipt/ES6, React.js, Redux, Apple Music API, Web Audio API"
          description="A song guessing game with over 800 songs of different genres."
        />
        <Project
          name="Llama"
          img={data.llama.childImageSharp.fluid}
          github="https://github.com/Nukki/Llama"
          demo="https://www.youtube.com/watch?v=6R45uegg110"
          tech="Javasctipt/ES6, React Native, Cocoapods, Node.js, Socket.io, MongoDB, APNs, Google Maps API"
          description="This app is aimed at improving gender equality in public. Unsafe person teams up with volunteers to walk together on campus, in the city or a music festival. GenHack hackathon entry."
        />
        <Project
          img={data.attendone.childImageSharp.fluid}
          github="https://github.com/Nukki/attenDONE"
          demo="https://www.youtube.com/watch?v=ULR1QrEeLk8"
          tech="Java, Android, NFC"
          description="Digital replacement for role call in class. An app for professors that makes attendence sheets and reads Student ID NFC tag to mark them present. Honorable Mentions at CUNYhack Spring'17 hackathon."
        />
        <Project
          img={data.turingchat.childImageSharp.fluid}
          github="https://github.com/Nukki/TuringChat"
          tech="Swift, Xcode, Cocoapods"
          description="CS Capstone Project. A chat application, where every chatroom includes two Neural Network entities trained on real people's Facebook data."
        />
        <Project
          img={data.pogo.childImageSharp.fluid}
          github="https://github.com/Nukki/pokemonGoCompetitiveResource"
          tech="Javasctipt/ES6, React.js, Redux, Google Cloud Natural Language API"
          description="A place for PokemonGo players to discuss the moves, stengths and weaknesses of each Pokemon. Each comment's color reflects its sentiment (positive, negative or neutral)."
        />
        <Project
          name="Twitter Bot"
          img={data.bot.childImageSharp.fluid}
          github="https://github.com/Nukki/twitter_bot"
          twitter="https://twitter.com/iSkidYouNot"
          tech="Javasctipt/ES6, Node.js, Twitter API, Giphy API"
          description="A bot that sent GIFs and educated influencers about the correct use of the word *CRYPTO*. Crypto != cryptocurrency. Crypto == cryptography."
        />
      </Flex>
    )}
  />

);

export default ProjectList;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 100) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    turingchat: file(relativePath: { eq: "turingchat.png" }) {
      ...fluidImage
    }
    llama: file(relativePath: { eq: "llama.png" }) {
      ...fluidImage
    }
    pogo: file(relativePath: { eq: "pogo.PNG" }) {
      ...fluidImage
    }
    melomania: file(relativePath: { eq: "melomania.png" }) {
      ...fluidImage
    }
    attendone: file(relativePath: { eq: "attendone.png" }) {
      ...fluidImage
    }
    bot: file(relativePath: { eq: "bot.png" }) {
      ...fluidImage
    }
  }
`
