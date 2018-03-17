// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Store from '../../../services/Store/Store';
import Constants from '../../../services/Constants/Constants';

// Component File Dependencies
import './EditItemModal.css';
import Modal from '../../Modal/Modal';

class EditItemModal extends Component {
    static TEXT_WARNINGS = {
        EMPTY: 'An empty task isn\'t very useful',
        MAX: 'Max Characters Reached'
    };

    state = {
        textWarning: '',
        isOpen: false,

        modalForm: {
            text: () => this.props.item.text
        }
    };

    /* Prop Methods
    *********************************************************************/
    closeModal = () => this.props.closeModal.bind(this);
    save = () => this.props.save.bind(this);

    /* Lifecycle Methods
    *********************************************************************/
    constructor(props) {
        super(props);

        this.store = new Store();

        this.handleEditListItem = this.handleEditListItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} closeModal={this.closeModal()}>
                <div className="EditItemModal">
                    <h6>Edit List Item</h6>
                    <form onSubmit={this.handleEditListItem}>
                      <input type="text" placeholder="Watchya doing?" value={this.state.modalForm.text()} ref="text" maxLength="100" onChange={this.onChange}></input>
                      <p>{this.state.textWarning}</p>
                      <button type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
        );
    }

    /* Component Methods
    *********************************************************************/
    handleEditListItem(e) {
        e.preventDefault();
        this.onChange(e);

        if (!this.state.modalForm.text()) {
            this.setState({
                textWarning: EditItemModal.TEXT_WARNINGS.EMPTY,
            });
        } else {
            let item = this.props.item;
            item.text = this.state.modalForm.text();

            this.save()();
            this.closeModal()();
        }
    }

    onChange(e) {
        let value = this.refs.text.value;
        let form = this.state.modalForm;

        form.text = () => value;

        this.setState({
            modalForm: form,
            textWarning: form.text.length === Constants.TEXT_LIMIT ? EditItemModal.TEXT_WARNINGS.MAX : null,
        });
    }
}

EditItemModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    item: PropTypes.object,
    save: PropTypes.func
}

export default EditItemModal;
