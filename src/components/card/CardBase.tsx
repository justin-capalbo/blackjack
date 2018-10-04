import React, { PureComponent} from 'react';
import { CardTitle } from './CardTitle';
import styled from 'styled-components';
import { Card } from '../../types/Card';

interface CardBaseProps {
    card: Card,
    order: number
}

const CardBounds = styled.div`
    position: absolute;
    width: 190px;
    border: 2px solid black;
    background-color: white;
    margin-top: ${(p:{order: number}) => 4 + p.order * 24}px;
    margin-left: ${(p:{order: number}) => 4 + p.order * 6}px;
`;

export class CardBase extends PureComponent<CardBaseProps, {}>{
    render() {
        let card = this.props.card; 
        return (
        <CardBounds order={this.props.order}>
            <CardTitle face={card.face} suit={card.suit} />
            <CardTitle face={card.face} suit={card.suit} flipped={true} />
        </CardBounds>);
    }
};
