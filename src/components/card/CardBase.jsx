import React, { PureComponent} from 'react';
import { PropTypes } from 'prop-types';
import { CardTitle } from './CardTitle';
import styled from 'styled-components';

const CardBounds = styled.div`
    position: absolute;
    width: 190px;
    border: 2px solid black;
    background-color: white;
    margin-top: ${props => 4 + props.index * 24}px;
    margin-left: ${props => 4 + props.index * 6}px;
`;

export class CardBase extends PureComponent {
    render() {
        let card = this.props.card; 
        return (
        <CardBounds index={this.props.index}>
            <CardTitle face={card.face} suit={card.suit} />
            <CardTitle face={card.face} suit={card.suit} flipped={true} />
        </CardBounds>);
    }
};

CardBase.propTypes = {
    card: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}