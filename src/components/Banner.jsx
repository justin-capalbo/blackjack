import React, { PureComponent } from 'react';
import { BannerText } from './BannerText';
import PropTypes from 'prop-types';

export class Banner extends PureComponent {
    render(){
        return (
            <BannerText>{this.props.bannerText}</BannerText>
        );
    }
}

Banner.propTypes = {
    bannerText: PropTypes.string.isRequired
};