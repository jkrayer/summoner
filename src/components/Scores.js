import React from "react";
import Score from "./Score";

const Scores = (props) => {
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = props.scores;

  return (
    <table>
      <thead>
        <tr>
          <th>{"STR"}</th>
          <th>{"DEX"}</th>
          <th>{"CON"}</th>
          <th>{"INT"}</th>
          <th>{"WIS"}</th>
          <th>{"CHA"}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Score score={strength} />
          </td>
          <td>
            <Score score={dexterity} />
          </td>
          <td>
            <Score score={constitution} />
          </td>
          <td>
            <Score score={intelligence} />
          </td>
          <td>
            <Score score={wisdom} />
          </td>
          <td>
            <Score score={charisma} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Scores;
