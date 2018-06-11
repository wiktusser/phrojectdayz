import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class Album extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {images} = this.props;
        return (
            <Gallery images={images} backdropClosesModal={true} showLightboxThumbnails={true}/>
        );
    }
}

export default Album;


