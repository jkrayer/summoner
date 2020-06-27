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
          <Grid item>
            <Typography
              variant="h4"
              component="h1"
            >
              Summoner
            </Typography>
          </Grid>
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              component="p"
            >
              Search the <a href="http://www.dnd5eapi.co/">D&D 5e API</a> for monsters.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
