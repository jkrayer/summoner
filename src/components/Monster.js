import React from "react";
import fetch from "cross-fetch";
import { Modal } from "@material-ui/core";
import MonsterView from "./MonsterView";

const Monster = (props) => {
  let lastPath = null;
  const { path } = props;
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
        open={open}
        onClose={handleClose}
        aria-labelledby="monster-title"
        aria-describedby="monster-description"
      >
        <div>
          <MonsterView data={monster} />
        </div>
      </Modal>
    </div>
  );
};

export default Monster;
