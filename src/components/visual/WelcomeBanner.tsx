import React, { PureComponent } from 'react';
import styled from 'styled-components';

const BannerText = styled.h1`
    color: red;
    font-size: 2em;
    margin-bottom: 16px;
    -webkit-text-stroke: 1px black;
`;

interface TextProps{
    bannerText: string
}

export class WelcomeBanner extends PureComponent<TextProps, {}>{
    render(){
        return (
            <BannerText>{this.props.bannerText}</BannerText>
        );
    }
}