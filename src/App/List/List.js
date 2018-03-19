// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component File Dependencies
import './List.css';
import ListItem from './ListItem/ListItem';

class List extends Component {
    /* Lifecycle Methods
    *********************************************************************/
    constructor() {
        super();

        this.mapItems = this.mapItems.bind(this);
        this.noListDisplay = this.noListDisplay.bind(this);
    }

    componentWillMount() {
        this.updateList = this.props.updateList.bind(this);
    }

    render() {
        return (
            <div className="List height-fix">
                {!this.props.list ? this.noListDisplay() :
                    <ul className="List-items">
                        {this.props.list.items.map(this.mapItems)}
                    </ul>
                }
            </div>
        );
    }

    /* Component Methods
    *********************************************************************/
    mapItems(item, i) {
        return <ListItem item={item} key={i} updateItem={this.updateList}></ListItem>;
    }

    noListDisplay() {
        return (
            <div className="List-noData">No list data</div>
        );
    }
}

List.propTypes = {
    list: PropTypes.object,
    updateList: PropTypes.func
}

export default List;
