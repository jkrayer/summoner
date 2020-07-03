import React from "react";
import { Box, Container, CssBaseline, Typography } from "@material-ui/core";
import Search from "./Search";
import Monster from "./Monster";

const Home = () => {
  const [monsterData, setMonsterData] = React.useState({});

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box p={{ xs: 1 }} textAlign="center">
        <Typography variant="h4" component="h1">
          Summoner
        </Typography>
      </Box>
      <Box p={{ xs: 1 }}>
        <form noValidate>
          <Search change={setMonsterData} />
        </form>
      </Box>
      <Box p={{ xs: 1 }} textAlign="center">
        <Typography variant="subtitle2" component="p">
          Search the <a href="https://api.open5e.com/">Open 5e API</a> for
          monsters.
        </Typography>
      </Box>
      <Monster data={monsterData} />
    </Container>
  );
};

export default Home;
