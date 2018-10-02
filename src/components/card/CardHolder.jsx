import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { CardBase } from './CardBase';

export class CardHolder extends Component {
    render() {
        let cards = this.props.cards; 
        return (
            <div>
                {
                    cards && 
                    cards.map((data, i) => 
                    <CardBase card={data} key={i} />)
                }
            </div>
        );
    }
};

CardHolder.propTypes = {
    cards: PropTypes.array.isRequired
}