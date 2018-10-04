import React, { PureComponent } from 'react';
import { CardBase } from './CardBase';
import { Card } from '../../types/Card';
import styled from 'styled-components';

const Holder = styled.div`
    border: 1px dashed black;
    min-height: 325px;
    max-width: 400px;
    margin: 20px auto;
`;

const Score = styled.h4`
    float: right;
    margin-top: 130px;
    margin-right: 10px;
`;

export interface CardHolderProps{
    cards: Card[],
    score: number
}

export class CardHolder extends PureComponent<CardHolderProps, {}> {
    render() {
        let cards = this.props.cards; 
        return (
            <Holder>
                {
                    cards && 
                    cards.map((data, i) => 
                    <CardBase 
                        key={i} 
                        card={data} 
                        order={i}/>)
                }
                <Score>Score: {this.props.score}</Score>
            </Holder>
        );
    }
};