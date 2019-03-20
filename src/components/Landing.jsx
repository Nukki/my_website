import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Box, Text, Flex } from 'rebass';
import ProjectList from './ProjectList';

const f1 = " _   _ _ _    _    _  ";
const f2 = "| \\ | (_) | _| | _(_)";
const f3 = "|  \\| | | |/ / |/ / |";
const f4 = "| |\\  | |   <|   <| |";
const f5 = "|_| \\_|_|_|\\_\\_|\\_\\_|";


const l1 = "     _            _    ";
const l2 = "    | | __ _  ___| | __";
const l3 = " _  | |/ _` |/ __| |/ /";
const l4 = "| |_| | (_| | (__|   < ";
const l5 = " \\___/ \\__,_|\\___|_|\\_\\";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = !this.state.clicked;
    this.setState({ clicked: newState })
  }

  componentDidUpdate() {
    if (this.state.clicked) {
      var elmnt = document.getElementById("projects");
      elmnt.scrollIntoView();
    }
  }

  render() {
    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        bg="dimgray"
        color="aliceblue"
        pt={[0, 2, 3]}
      >

        <Flex
          pt={[2, 3, 4]}
          flexDirection={["column", "row", "row"]}
          justifyContent= "center"
          alignItems="center"
          fontFamily="Roboto Mono, monospace"
          bg="dimgray"
          fontSize={[2, 3, 3]}
          css={css`
            white-space: pre;
          `}
        >

          <Box>
            <Text fontWeight="bold">{f1}</Text>
            <Text fontWeight="bold">{f2}</Text>
            <Text fontWeight="bold">{f3}</Text>
            <Text fontWeight="bold">{f4}</Text>
            <Text fontWeight="bold">{f5}</Text>
          </Box>

          <Box>
            <Text fontWeight="bold">{l1}</Text>
            <Text fontWeight="bold">{l2}</Text>
            <Text fontWeight="bold">{l3}</Text>
            <Text fontWeight="bold">{l4}</Text>
            <Text fontWeight="bold">{l5}</Text>
          </Box>
        </Flex>

        <Box
          px={[4, 5, 6]}
          pt={[4, 5, 5]}
          fontSize={[2, 3, 4]}
        >
          <Text fontFamily="sans-serif" fontWeight="300">
          {`👩‍💻 Full-Stack Software Developer.`}
          </Text>
          <Text fontFamily="sans-serif" fontWeight="300">
          {`💪 I build Web and Mobile apps.`}
          </Text>
          <Text fontFamily="sans-serif" fontWeight="300">
          {`🗽 NYC based.`}
          </Text>
          <Text fontFamily="sans-serif" fontWeight="300">
          {`🔐 Passionate about Digital Privacy.`}
          </Text>
          <Text fontFamily="sans-serif" fontWeight="300">
          {`🎓 Recent CS graduate from Hunter College, CUNY.`}
          </Text>
        </Box>

        <Link to="/#projects" style={{ textDecoration: 'none', color: 'aliceblue'}}>
          <Box
            fontSize={[2, 3, 4]}
            pt={['7vh', '10vh']}
            onClick={this.handleClick}
          >
            <Text fontFamily="sans-serif" fontWeight="300">{`Projects ⬇️`}</Text>
          </Box>
        </Link>

        {
          this.state.clicked && (
            <Box id='projects' pt={['10vh', '15vh']}>
              <ProjectList />
            </Box>
          )
        }

      </Flex>
    );
  };
};

export default Landing;
