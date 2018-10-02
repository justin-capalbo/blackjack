import React, { PureComponent} from 'react';
import { PropTypes } from 'prop-types';
import { CardTitle } from './CardTitle';
import styled from 'styled-components';

const BaseBounds = styled.div`
    max-width: 180px;
    border: 2px solid black;
    margin: 2px;
`;

export class CardBase extends PureComponent {
    render() {
        let card = this.props.card; 
        return (
        <BaseBounds>
            <CardTitle face={card.face} suit={card.suit} />
            <CardTitle face={card.face} suit={card.suit} flipped={true} />
        </BaseBounds>);
    }
};

CardBase.propTypes = {
    card: PropTypes.object.isRequired
}