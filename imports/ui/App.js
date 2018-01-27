import React from 'react';
import {Players, calculatePlayerPositions} from '../api/players';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    let players = [];
    let title = 'Terence Score Keep';
    players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);

    return (
      <div>
        <TitleBar title={title}/>
        <div className='wrapper'>
          <PlayerList playerList={positionedPlayers}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
}
