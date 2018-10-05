import React from 'react';
import styled from 'react-emotion';

const TitleText = styled('div')<{flipped: boolean}>`
    font-weight: bold;
    margin 0 10px 0 10px;

    ${p => p.flipped && `
        transform: rotate(180deg);
        transform-origin: center;
        margin-top: 150px;
    `}
`;

type Props = {
    face: string,
    suit: string,
    flipped?: boolean
}

export const CardTitle = (props: Props) => (
    <TitleText flipped={props.flipped}>
        {props.face} of {props.suit}
    </TitleText>
);
