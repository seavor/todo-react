// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Store from '../../../services/Store/Store';
import Constants from '../../../services/Constants/Constants';
import Validation from '../../../services/Validation/Validation';

// Component File Dependencies
import './EditItemModal.css';
import Modal from '../../Modal/Modal';

class EditItemModal extends Component {
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
                      <p className="error">{this.state.textWarning}</p>
                      <button>Submit</button>
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

        let invalid = Validation.minLength(this.state.modalForm.text());

        if (invalid) {
            this.setState({
                textWarning: invalid,
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
            textWarning: Validation.maxLength(form.text().length),
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
