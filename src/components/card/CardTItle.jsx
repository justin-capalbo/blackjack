import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

const TitleText = styled.div`
    font-weight: bold;
    margin 0 10px 0 10px;

    ${props => props.flipped && css`
        transform: rotate(180deg);
        transform-origin: center;
        margin-top: 150px;
    `}
`;

export const CardTitle = (props) => (
    <TitleText flipped={props.flipped}>
        {props.face} of {props.suit}
    </TitleText>
);

CardTitle.propTypes = {
    face: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired
}