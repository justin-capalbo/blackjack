import React from 'react';
import styled from 'react-emotion';

const BannerText = styled('h1')`
    color: red;
    font-size: 2em;
    margin-bottom: 16px;
    -webkit-text-stroke: 1px black;
`;

//Another form of taking a single prop as opposed to `type Prop`
export const WelcomeBanner = ({ bannerText }: { bannerText: string } ) => (
    <BannerText>
        {bannerText}
    </BannerText>
);