import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerText = styled.h1`
    color: red;
    font-size: 2em;
    -webkit-text-stroke: 1px black;
`;

export class WelcomeBanner extends PureComponent {
    render(){
        return (
            <BannerText>{this.props.bannerText}</BannerText>
        );
    }
}

WelcomeBanner.propTypes = {
    bannerText: PropTypes.string.isRequired
};