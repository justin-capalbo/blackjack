import React from 'react';
import styled, { css } from 'styled-components';

interface CardTitleProps {
    face: string,
    suit: string,
    flipped?: boolean
}

const TitleText = styled.div`
    font-weight: bold;
    margin 0 10px 0 10px;

    ${(p: { flipped: boolean } ) => p.flipped && css`
        transform: rotate(180deg);
        transform-origin: center;
        margin-top: 150px;
    `}
`;

export const CardTitle = (props: CardTitleProps) => (
    <TitleText flipped={props.flipped}>
        {props.face} of {props.suit}
    </TitleText>
);
