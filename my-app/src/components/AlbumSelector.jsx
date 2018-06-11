import React, { Component } from 'react';

class AlbumSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return this.props.data.map((item, index) => (
            <div className="Album-selector-element">
                <span className="indent" key={index} item={item}>
                    {item.text}
                </span>
            </div>
        ));

    }
}

export default AlbumSelector;


