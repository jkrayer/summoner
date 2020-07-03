import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { calculateMod, symbol } from "../utilities/helpers";

const useStyles = makeStyles((theme) => ({
  cell: {
    padding: theme.spacing(0, 2, 2, 2),
  },
  head: {
    padding: theme.spacing(2, 2, 0, 2),
    borderBottom: "none",
  },
}));

const Scores = (props) => {
  const classes = useStyles();
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = props.scores;

  const cells = [
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  ].map((score) => ({ score, mod: calculateMod(score) }));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center" className={classes.head}>
            STR
          </TableCell>
          <TableCell align="center" className={classes.head}>
            DEX
          </TableCell>
          <TableCell align="center" className={classes.head}>
            CON
          </TableCell>
          <TableCell align="center" className={classes.head}>
            INT
          </TableCell>
          <TableCell align="center" className={classes.head}>
            WIS
          </TableCell>
          <TableCell align="center" className={classes.head}>
            CHA
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {cells.map((cell, ind) => (
            <TableCell key={ind} align="center" className={classes.cell}>{`${
              cell.score
            } (${symbol(cell.mod)}${cell.mod})`}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Scores;
