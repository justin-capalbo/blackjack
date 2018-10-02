import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { CardBase } from './CardBase';
import styled from 'styled-components';

const Holder = styled.div`
    border: 1px dashed black;
    min-height: 325px;
    margin-top: 2px;
`;

const Score = styled.h4`
    float: right;
    margin-top: 130px;
    margin-right: 10px;
`;

export class CardHolder extends PureComponent {
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
                        index={i}/>)
                }
                <Score>Score: {this.props.score}</Score>
            </Holder>
        );
    }
};

CardHolder.propTypes = {
    cards: PropTypes.array.isRequired
}