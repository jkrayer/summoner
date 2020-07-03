import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { bookCase } from "../utilities/helpers";

const useStyles = makeStyles((theme) => ({
  term: {
    paddingRight: ".5em",
    float: "left",
    fontWeight: 700,
  },
  definition: {
    clear: "right",
  },
}));

const Stat = (props) => {
  const { data } = props;
  const classes = useStyles();
  const key = Object.keys(data)[0];
  const val = data[key];

  if (val.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <dt className={classes.term}>{bookCase(key)}</dt>
      <dd className={classes.definition}>{val.join(", ")}</dd>
    </React.Fragment>
  );
};

export default Stat;
