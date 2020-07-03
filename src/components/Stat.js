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
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    clear: "right",
    textTransform: "capitalize",
  },
}));

const Stat = (props) => {
  const { data } = props;
  const classes = useStyles();
  const key = Object.keys(data)[0];
  const val = data[key];
  console.log(key, val);
  if (val.length === 0) {
    return null;
  }

  const value = typeof val === "string" ? val : val.join(", ");

  return (
    <React.Fragment>
      <dt className={classes.term}>{bookCase(key)}</dt>
      <dd className={classes.definition}>{value}</dd>
    </React.Fragment>
  );
};

export default Stat;
