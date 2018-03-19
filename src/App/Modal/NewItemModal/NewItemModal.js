// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Store from '../../../services/Store/Store';
import Constants from '../../../services/Constants/Constants';
import Validation from '../../../services/Validation/Validation';
import Images from '../../../services/Images/Images';

// Component File Dependencies
import './NewItemModal.css';
import Modal from '../../Modal/Modal';

class NewItemModal extends Component {
    static DEFAULT_FORM_STATE = {
        text: '',
        list: Constants.LIST_KEYS.TODAY.INDEX
    };

    /* Lifecycle Methods
    *********************************************************************/
    constructor(props) {
        super(props);

        this.store = new Store();

        this.handleNewListItem = this.handleNewListItem.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onListChange = this.onListChange.bind(this);

        this.state = {
            textWarning: '',
            isOpen: false,

            /* @NOTE

                I didnt expect to have to copy a static object reference
                to avoid mutating the original static object properties
                when working on the assignment variable. I expected assigning
                static properties to a variable would be done by copy, and not
                by reference.

                Love this spread operator tho.

                ES6 in general has been really nice to work with.
                
            */
            modalForm: {...NewItemModal.DEFAULT_FORM_STATE}
        };
    }

    componentWillMount() {
        this.closeModal = this.props.closeModal.bind(this);

        if (this.props.item) {
            this.setState({
                modalForm: {
                    text: this.props.item.text || NewItemModal.DEFAULT_FORM_STATE.text,
                    // @TODO actually get this.props.item.list
                    list: this._getItemListIndex(this.props.item, this.props.lists) || NewItemModal.DEFAULT_FORM_STATE.list
                }
            })
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} closeModal={this.closeModal}>
                <div className="NewItemModal">
                    <h6>{this.props.item ? 'Edit' : 'New'} Item</h6>
                    <form onSubmit={this.handleNewListItem}>
                        <div className="NewItemModal-text">
                            <input type="text" placeholder="Watchya doing?" value={this.state.modalForm.text} ref="text" maxLength="100" onChange={this.onTextChange}></input>
                            <p className="error">{this.state.textWarning}</p>
                        </div>

                        <div className="NewItemModal-status">
                            <div className="NewItemModal-status_wrapper">
                                <div className="NewItemModal-status_persist">
                                    <span>Carry?</span><i>{Images.favoriteIcon()}</i>
                                </div>
                                <div className="NewItemModal-status_complete">
                                    <span>Complete?</span><i className="adjust">{Images.completeIcon()}</i>
                                </div>
                            </div>
                        </div>

                        <div className="NewItemModal-list">
                            <div className="NewItemModal-list_item radio">
                              <label>
                                <input type="radio" onChange={this.onListChange} value={Constants.LIST_KEYS.TODAY.INDEX}
                                    checked={this.state.modalForm.list === Constants.LIST_KEYS.TODAY.INDEX}
                                />
                                <span>{Constants.LIST_KEYS.TODAY.LABEL}</span>
                              </label>
                            </div>
                            <div className="NewItemModal-list_item radio">
                              <label>
                                <input type="radio" onChange={this.onListChange} value={Constants.LIST_KEYS.TOMORROW.INDEX}
                                    checked={this.state.modalForm.list === Constants.LIST_KEYS.TOMORROW.INDEX}
                                />
                                <span>{Constants.LIST_KEYS.TOMORROW.LABEL}</span>
                              </label>
                            </div>
                            <div className="NewItemModal-list_item radio">
                              <label>
                                <input type="radio" onChange={this.onListChange} value={Constants.LIST_KEYS.WHENEVER.INDEX}
                                    checked={this.state.modalForm.list === Constants.LIST_KEYS.WHENEVER.INDEX}
                                />
                                <span>{Constants.LIST_KEYS.WHENEVER.LABEL}</span>
                              </label>
                            </div>
                        </div>



                        <button>Submit</button>
                    </form>
                </div>
            </Modal>
        );
    }

    /* Component Methods
    *********************************************************************/
    handleNewListItem(e) {
        e.preventDefault();

        let invalid = Validation.minLength(this.state.modalForm.text);

        if (invalid) {
            this.setState({ textWarning: invalid });
        } else {
            let lists = this.props.lists,

                items, entry;

            if (!this.props.item) {
                entry = this._newEntry(this.state.modalForm);
                items = [].concat(lists[this.state.modalForm.list].items, entry);
            } else {
                let item = this.props.item;

                item.text = this.state.modalForm.text;
                item.persist = this.state.modalForm.persist || false;
                item.complete = this.state.modalForm.complete || false;

                if (this._getItemListIndex(this.props.item, this.props.lists) !== this.state.modalForm.list) {
                    // Splice out entry from orig list of items if list change
                    // Enter spliced entry into new list of items
                }
            }
            
            lists[this.state.modalForm.list].items = items;

            this.setState({
                modalForm: {...NewItemModal.DEFAULT_FORM_STATE},
                lists: lists
            });

            /* @Note 
                this.boundPropMethod()() is a really annoying syntax.. whats up?? Bad binding pattern?

                Yup, was following a bad example of binding it at the component property level.
                Binding inside componentWillMount seems to be the proper pattern, or at least lets
                me get rid of that disgusting ()() syntax.
            */
            this.closeModal();

            this.store.set(Constants.STORE_KEYS.LISTS, lists);
        }
    }

    onTextChange(e) {
        let form = this.state.modalForm;
        form.text = e.target.value;

        let invalid = Validation.maxLength(form.text.length);

        this.setState({ modalForm: form, textWarning: invalid });
    }

    onListChange(e) {
        let form = this.state.modalForm;
        form.list = parseInt(e.target.value, 10);

        this.setState({ modalForm: form });
    }

    /* Private Methods
    *********************************************************************/
    _newEntry(modalForm) {
        let entry = this.store.newDataEntry();

        entry.text = modalForm.text;
        entry.complete = modalForm.complete || false;
        entry.persist = modalForm.persist || false;

        return entry;
    }

    _getItemListIndex(item, lists) {
        let result;

        for (let i in lists) {
            for (let {id} of lists[i].items) {
                if (id === item.id) {
                    return i;
                }
            }
        }

        return result;
    }
}

NewItemModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    lists: PropTypes.array
}

export default NewItemModal;
