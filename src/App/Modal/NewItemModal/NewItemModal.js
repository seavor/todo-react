// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Store from '../../../services/Store/Store';
import Constants from '../../../services/Constants/Constants';

// Component File Dependencies
import './NewItemModal.css';
import Modal from '../../Modal/Modal';

class NewItemModal extends Component {
    static TEXT_WARNINGS = {
        EMPTY: 'An empty task isn\'t very useful',
        MAX: 'Max Characters Reached'
    };

    state = {
        textWarning: '',
        isOpen: false,

        modalForm: {
            text: ''
        }
    };

    /* Prop Methods
    *********************************************************************/
    closeModal = () => this.props.closeModal.bind(this);

    /* Lifecycle Methods
    *********************************************************************/
    constructor(props) {
        super(props);

        this.store = new Store();

        this.handleNewListItem = this.handleNewListItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} closeModal={this.closeModal()}>
                <div className="NewItemModal">
                    <h6>New List Item</h6>
                    <form onSubmit={this.handleNewListItem}>
                      <input type="text" placeholder="Watchya doing?" value={this.state.modalForm.text} ref="text" maxLength="100" onChange={this.onChange}></input>
                      <p>{this.state.textWarning}</p>
                      <button type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
        );
    }

    /* Component Methods
    *********************************************************************/
    handleNewListItem(e) {
        e.preventDefault();

        if (!this.refs.text.value) {
            this.setState({
                textWarning: NewItemModal.TEXT_WARNINGS.EMPTY,
            });
        } else {
            let lists = this.props.lists;

            let entry = this._newEntry(this.refs);
            let items = [].concat(lists[Constants.LIST_KEYS.TODAY].items, entry);

            lists[Constants.LIST_KEYS.TODAY].items = items;

            this.setState({
                modalForm: {
                    text: ''
                },

                lists: lists
            });

            // @TODO this is a really annoying syntax.. whats up?? Bad prop method binding pattern?
            this.closeModal()();

            this.store.set(Constants.STORE_KEYS.LISTS, lists);
        }
    }

    onChange(e) {
        let form = this.state.modalForm;
        form.text = e.target.value;

        this.setState({
            modalForm: form,
            textWarning: form.text.length === Constants.TEXT_LIMIT ? NewItemModal.TEXT_WARNINGS.MAX : null,
        });
    }

    /* Private Methods
    *********************************************************************/
    _newEntry(refs) {
        let entry = this.store.newDataEntry();

        entry.text = refs.text.value;
        entry.complete = refs.complete || false;
        entry.persist = refs.persist || false;

        return entry;
    }
}

NewItemModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    lists: PropTypes.array
}

export default NewItemModal;
