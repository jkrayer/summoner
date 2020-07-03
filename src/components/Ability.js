import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { bookCase } from "../utilities/helpers";

const useStyles = makeStyles((theme) => ({
  term: {
    fontWeight: 700,
  },
  title: {
    color: "#501e0e",
    borderBottom: "2px solid #501e0e",
  },
  definition: {
    padding: theme.spacing(1, 1, 1, 0),
    margin: theme.spacing(0),
  },
}));

const Ability = (props) => {
  const { data, hide } = props;
  const classes = useStyles();
  const key = Object.keys(data)[0];
  const val = data[key];

  if (val === undefined || val.length === 0) {
    return null;
  }

  const heading = hide ? null : (
    <Box mb=".5em">
      <Typography className={classes.title} variant="h6" component="h2">
        {bookCase(key)}
      </Typography>
    </Box>
  );

  return (
    <section>
      {heading}
      {props.children}
      <dl>
        {val.reduce((acc, ability, ind) => {
          const { name } = ability;
          acc.push(
            <dt key={`${ind}-${name}`} className={classes.term}>
              {bookCase(name)}
            </dt>
          );
          acc.push(
            <dd key={ind} className={classes.definition}>
              {ability.desc}
            </dd>
          );
          return acc;
        }, [])}
      </dl>
    </section>
  );
};

export default Ability;
