import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.playerList.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Please add a new player to get started</p>
        </div>
      );
    }
    else {
      return this.props.playerList.map((player) =>  {
        return <Player key={player._id} player={player}/>;
      });
    }
  };

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  playerList: PropTypes.array.isRequired
};
