// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component File Dependencies
import './List.css';
import ListItem from './ListItem/ListItem';

class List extends Component {
    constructor() {
        super();

    }

    /* Lifecycle Methods
    *********************************************************************/
    render() {
        return (
            <div className="List height-fix">
                <button onClick={this.props.newItem.bind(this)}>New Item</button>

                {!(this.props.list && this.props.list.items.length) ? this.noListDisplay() :
                    <ul className="List-items">
                        {this.props.list.items.map(function(item, i){
                            return <ListItem item={item} key={i}></ListItem>;
                        })}
                    </ul>
                }
            </div>
        );
    }

    /* Component Methods
    *********************************************************************/
    noListDisplay() {
        return (
            <div className="List-noData">No list data</div>
        );
    }
}

List.propTypes = {
    list: PropTypes.object,
    newItem: PropTypes.func
}

export default List;
