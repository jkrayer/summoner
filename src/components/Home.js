import React from 'react';
import Search from './Search';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@material-ui/core';

const Home = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography
            variant="h4"
            component="h1"
          >
            Summoner
          </Typography>
          <Search />
          <Typography
            variant="subtitle2"
            component="p"
          >
            Search the <a href="http://www.dnd5eapi.co/">D&D 5e API</a> for monsters.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
