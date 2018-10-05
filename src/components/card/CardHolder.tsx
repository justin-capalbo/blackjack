import React, { PureComponent } from 'react';
import { CardBase } from '.';
import { Card } from '../../types';
import styled from 'react-emotion';

const Holder = styled('div')`
    border: 1px dashed black;
    min-height: 325px;
    width: 400px;
    margin: 20px auto;
`;

const Score = styled('h4')`
    float: right;
    margin-top: 130px;
    margin-right: 10px;
`;

type Props = {
    cards: Card[],
    score: number
}

export class CardHolder extends PureComponent<Props, {}> {
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