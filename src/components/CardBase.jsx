import React from 'react';
import { PropTypes } from 'prop-types';

export const CardBase = (props) => (
    <div>{props.card.face} of {props.card.suit}</div>
);

CardBase.propTypes = {
    card: PropTypes.object.isRequired
}