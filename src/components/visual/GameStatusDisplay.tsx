import React, { PureComponent } from 'react';
import { GAME_STATUS } from '../../constants/GameConstants';
import styled from 'react-emotion';

const GameStatusBounds = styled('div')`
    margin-top: 15px;
`;

type Props  = { 
    gameStatus: string; 
}; 

export class GameStatusDisplay extends PureComponent<Props, {}> {
    render(){
        const status = this.props.gameStatus;
        return (
            <GameStatusBounds>
                {
                    status === GAME_STATUS.PLAYING &&
                        <span>Choose Hit or Stand</span>
                    || status === GAME_STATUS.WIN &&
                        <span>You win!</span>
                    || status === GAME_STATUS.LOSE &&
                        <span>You Lose!</span>
                    || status === GAME_STATUS.PUSH &&
                        <span>Push!</span>
                }
            </GameStatusBounds>
        );
    }
}