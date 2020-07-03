import React from "react";
import { Box, Container, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toStrings } from "../utilities/helpers";
import Scores from "./Scores";
import Stat from "./Stat";
import Proficiencies from "./Proficiencies";
import Ability from "./Ability";
import Senses from "./Senses";

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
    armor_class,
    challenge_rating,
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    hit_dice,
    hit_points,
    languages,
    proficiencies,
    reactions,
    senses,
    special_abilities,
    legendary_actions,
  } = data;
  const speed = toStrings(data.speed);
  const condition_immunities = data.condition_immunities.map(
    (cond) => cond.name
  );

  return (
    <article>
      <Box component="header" className={classes.divider}>
        <Typography
          id="monster-title"
          className={classes.title}
          variant="h5"
          component="h1"
        >
          {data.name}
        </Typography>
        <Box component="p" mt={0} fontStyle="oblique" id="monster-description">
          {`${data.size} ${data.type}, ${data.alignment}`}
        </Box>
      </Box>
      <Box component="section" className={classes.divider}>
        <dl>
          <Stat data={{ armor_class: [armor_class] }} />
          <Stat data={{ hit_points: [`${hit_points} (${hit_dice})`] }} />
          <Stat data={{ speed }} />
        </dl>
      </Box>
      <Box component="section" className={classes.divider}>
        <Scores scores={data} />
      </Box>
      <Box component="section" className={classes.divider}>
        <dl>
          <Proficiencies data={{ proficiencies }} />
          <Stat data={{ damage_vulnerabilities }} />
          <Stat data={{ damage_resistances }} />
          <Stat data={{ damage_immunities }} />
          <Stat data={{ condition_immunities }} />
          <Senses data={senses} />
          <Stat data={{ languages: [languages] }} />
          <Stat data={{ challenge_rating: [challenge_rating] }} />
        </dl>
      </Box>
      <Ability data={{ special_abilities }} hide={true} />
      <Ability data={{ actions }} />
      <Ability data={{ legendary_actions }} />
      <Ability data={{ reactions }} />
    </article>
  );
};

export default MonsterView;
