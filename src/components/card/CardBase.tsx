import React, { PureComponent} from 'react';
import { CardTitle } from './CardTitle';
import styled from 'react-emotion';
import { Card } from '../../types/Card';

const CardBounds = styled('div')<{order: number}>`
    position: absolute;
    width: 190px;
    border: 2px solid black;
    background-color: white;
    margin-top: ${p => 4 + p.order * 24}px;
    margin-left: ${p => 4 + p.order * 6}px;
`;

type Props = {
    card: Card,
    order: number
}

export class CardBase extends PureComponent<Props, {}> {
    render() {
        let card = this.props.card; 
        return (
        <CardBounds order={this.props.order}>
            <CardTitle face={card.face} suit={card.suit} />
            <CardTitle face={card.face} suit={card.suit} flipped={true} />
        </CardBounds>);
    }
};
