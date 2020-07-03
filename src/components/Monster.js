import React from "react";
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
  const { data } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(data).length > 0) {
      setOpen(true);
    }
  }, [data]);

  return (
    <div>
      <Modal
        aria-labelledby="monster-title"
        aria-describedby="monster-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Container maxWidth="sm" className={classes.paper}>
          <MonsterView data={data} />
        </Container>
      </Modal>
    </div>
  );
};

export default Monster;
