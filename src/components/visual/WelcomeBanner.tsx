import React, { PureComponent } from 'react';
import styled from 'styled-components';

const BannerText = styled.h1`
    color: red;
    font-size: 2em;
    margin-bottom: 16px;
    -webkit-text-stroke: 1px black;
`;

export const WelcomeBanner = ({ bannerText }: { bannerText: string } ) => <BannerText>{bannerText}</BannerText>