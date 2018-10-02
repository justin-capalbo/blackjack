import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { CardBase } from './CardBase';
import styled from 'styled-components';

const Holder = styled.ul`
    border: 2px black;
    list-style: none;
`;


export class CardHolder extends Component {
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
            </Holder>
        );
    }
};

CardHolder.propTypes = {
    cards: PropTypes.array.isRequired
}