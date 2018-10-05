import React, { PureComponent } from 'react';
import { GameStatus } from '../../constants';
import styled from 'react-emotion';

const GameStatusBounds = styled('div')`
    margin-top: 15px;
`;

type Props  = { 
    gameStatus: string; 
}; 

export class GameStatusDisplay extends PureComponent<Props, {}> {
    render() {
        const status = this.props.gameStatus;
        return (
            <GameStatusBounds>
                {
                    status === GameStatus.PLAYING &&
                        <span>Choose Hit or Stand</span>
                    || status === GameStatus.WIN &&
                        <span>You win!</span>
                    || status === GameStatus.LOSE &&
                        <span>You Lose!</span>
                    || status === GameStatus.PUSH &&
                        <span>Push!</span>
                }
            </GameStatusBounds>
        );
    }
}