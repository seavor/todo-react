// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Images from '../../../services/Images/Images';
import EditItemModal from '../../Modal/EditItemModal/EditItemModal';

// Component File Dependencies
import './ListItem.css';

class ListItem extends Component {
    /* Lifecycle Methods
    *********************************************************************/
    constructor() {
    	super();

    	this.toggleModal = this.toggleModal.bind(this);
    	this.togglePersist = this.togglePersist.bind(this);
    	this.toggleComplete = this.toggleComplete.bind(this);

        this.state = {
            modalIsOpen: false
        };
    }

    componentWillMount() {
        this.updateItem = this.props.updateItem.bind(this);
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

	           <EditItemModal isOpen={this.state.modalIsOpen} closeModal={this.toggleModal} item={this.props.item} save={this.updateItem}></EditItemModal>
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

        /* @NOTE

            The more I understand React, the more I'm wondering if this isn't an anti-pattern
            of sorts. I'm still altering this.props directly, just not DIRECTLY directly, which
            may be the reason it avoids the warning you get when trying to alter this.props.

            The reason for this pattern was i found i didnt have to pass the mutated object up the
            chain to be acted upon by the controlling parent. this.prop is passed by the controlling
            parent, so mutating it locally and then telling the parent to just update using the same
            object saved me the overhead of instantiating, passing and accepting new objects.

        */
    	let item = this.props.item;
    	item.persist = !item.persist;

    	if (item.persist) {
	    	item.complete = false;
    	}

    	this.updateItem();
    }

    toggleComplete(e) {
    	e.stopPropagation();

    	let item = this.props.item;
    	item.complete = !item.complete;

    	if (item.complete) {
	    	item.persist = false;
    	}

    	this.updateItem();
    }
}

ListItem.propTypes = {
    item: PropTypes.object,
    updateItem: PropTypes.func
}

export default ListItem;
