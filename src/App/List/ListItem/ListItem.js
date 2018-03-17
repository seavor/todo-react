// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component File Dependencies
import './ListItem.css';

class ListItem extends Component {
    constructor() {
        super();

    }

    /* Lifecycle Methods
    *********************************************************************/
    render() {
        return (
            <li className="ListItem">{this.props.item.text}</li>
        );
    }
}

ListItem.propTypes = {
    item: PropTypes.object
}

export default ListItem;
