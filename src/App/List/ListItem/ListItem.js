// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Images from '../../../services/Images/Images';
import EditItemModal from '../../Modal/EditItemModal/EditItemModal';

// Component File Dependencies
import './ListItem.css';

class ListItem extends Component {
    state = {
		modalIsOpen: false
	};

    /* Prop Methods
    *********************************************************************/
    updateItem = () => this.props.updateItem.bind(this);

    /* Lifecycle Methods
    *********************************************************************/
    constructor() {
    	super();

    	this.toggleModal = this.toggleModal.bind(this);
    	this.togglePersist = this.togglePersist.bind(this);
    	this.toggleComplete = this.toggleComplete.bind(this);

    	this.updateSelf = this.updateSelf.bind(this);
    }

    render() {
        return (
            <li className="ListItem">
	            <button className="ListItem-wrapper clearfix" onClick={this.toggleModal}>
	            	<div className="ListItem-text single-line-ellipsis">
		            	{this.props.item.text}
	            	</div>
	            	<div className="ListItem-actions">
	            		{/* @NOTE
                         
	            			React doesnt seem to like nested buttons
	            			Per https://developer.mozilla.org, this seems like valid HTML5 syntax
	            			https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
							https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content

                            Moving on..

                            Huh.. might have missed this line in the spec..
                            Phrasing content, but there must be no interactive content descendant.

                            Note: I wonder what the proper pattern is for descendant interactivity. Sometimes, you might have an element
                            that has a top level click functionality, as well as inner functionality, as i have here. Do you play
                            DOM games and absolute position elements over one another so they arent technically descendants? Is this just
                            such bad UI/UX that its been built into the HTML spec? I will have to research this further
	            		*/}
	            		<button onClick={this.togglePersist} className={"button " + (this.props.item.persist ? 'selected' : '')}>
	            			{Images.favoriteIcon()}
            			</button>
	            		<button onClick={this.toggleComplete} className={"button " + (this.props.item.complete ? 'selected' : '')}>
	            			{Images.completeIcon()}
            			</button>
	            	</div>
	            </button>

	             <EditItemModal isOpen={this.state.modalIsOpen} closeModal={this.toggleModal} item={this.props.item} save={this.updateSelf}></EditItemModal>
            </li>
        );
    }

    /* Component Methods
    *********************************************************************/
    toggleModal() {
	    this.setState({
	      	modalIsOpen: !this.state.modalIsOpen
	    });
    }

    togglePersist(e) {
    	e.stopPropagation();

    	let item = this.props.item;
    	item.persist = !item.persist;

    	if (item.persist) {
	    	item.complete = false;
    	}

    	this.updateSelf();
    }

    toggleComplete(e) {
    	e.stopPropagation();

    	let item = this.props.item;
    	item.complete = !item.complete;

    	if (item.complete) {
	    	item.persist = false;
    	}

    	this.updateSelf();
    }

    updateSelf() {
    	this.updateItem()();
    }
}

ListItem.propTypes = {
    item: PropTypes.object,
    updateItem: PropTypes.func
}

export default ListItem;
