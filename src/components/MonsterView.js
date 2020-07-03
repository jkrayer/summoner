import React from "react";
import { Box, Container, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { kvStrings, getSaves } from "../utilities/helpers";
import Scores from "./Scores";
import Stat from "./Stat";
import Ability from "./Ability";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#501e0e",
    fontFamily: "Times, 'Times New Roman', Georgia, serif",
    fontVariant: "small-caps",
    letterSpacing: ".01em",
  },
  divider: {
    borderBottom: "2px solid #a40b07",
  },
}));

const MonsterView = (props) => {
  const { data } = props;
  const classes = useStyles();
  const {
    actions,
    alignment,
    armor_class,
    armor_desc,
    challenge_rating,
    condition_immunities,
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    hit_dice,
    hit_points,
    languages,
    legendary_actions,
    legendary_desc,
    name,
    reactions,
    senses,
    special_abilities,
    size,
    type,
  } = data;

  const speed = kvStrings(data.speed);
  const saving_throws = getSaves(data);
  const skills = kvStrings(data.skills);

  return (
    <article>
      <Box component="header" className={classes.divider}>
        <Typography
          id="monster-title"
          className={classes.title}
          variant="h5"
          component="h1"
        >
          {name}
        </Typography>
        <Box component="p" mt={0} fontStyle="oblique" id="monster-description">
          {`${size} ${type}, ${alignment}`}
        </Box>
      </Box>
      <Box component="section" className={classes.divider}>
        <dl>
          <Stat data={{ armor_class: [`${armor_class} (${armor_desc})`] }} />
          <Stat data={{ hit_points: [`${hit_points} (${hit_dice})`] }} />
          <Stat data={{ speed }} />
        </dl>
      </Box>
      <Box component="section" className={classes.divider}>
        <Scores scores={data} />
      </Box>
      <Box component="section" className={classes.divider}>
        <dl>
          <Stat data={{ saving_throws }} />
          <Stat data={{ skills }} />
          <Stat data={{ damage_vulnerabilities }} />
          <Stat data={{ damage_resistances }} />
          <Stat data={{ damage_immunities }} />
          <Stat data={{ condition_immunities }} />
          <Stat data={{ senses }} />
          <Stat data={{ languages }} />
          <Stat data={{ challenge_rating }} />
        </dl>
      </Box>
      <Ability data={{ special_abilities }} hide={true} />
      <Ability data={{ actions }} />
      <Ability data={{ legendary_actions }}>
        <p>{legendary_desc}</p>
      </Ability>
      <Ability data={{ reactions }} />
    </article>
  );
};

export default MonsterView;
