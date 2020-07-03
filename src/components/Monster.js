import React from "react";
import fetch from "cross-fetch";
import { Box, Container, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MonsterView from "./MonsterView";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    maxHeight: "90vh",
    padding: theme.spacing(2, 3),
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Monster = (props) => {
  let lastPath = null;
  const { path } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [monster, setMonster] = React.useState({});
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (path !== "" && path !== lastPath) {
      lastPath = path;

      (async () => {
        const response = await fetch(`https://www.dnd5eapi.co${path}`);
        const result = await response.json();
        setMonster(result);
        setOpen(true);
      })();
    }
  }, [path]);

  return (
    <div>
      <Modal
        aria-labelledby="monster-title"
        aria-describedby="monster-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <Container maxWidth="sm" className={classes.paper}>
          <MonsterView data={monster} />
        </Container>
      </Modal>
    </div>
  );
};

export default Monster;
