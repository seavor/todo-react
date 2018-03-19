// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Store from '../../../services/Store/Store';
import Validation from '../../../services/Validation/Validation';

// Component File Dependencies
import './EditItemModal.css';
import Modal from '../../Modal/Modal';

class EditItemModal extends Component {
    /* Lifecycle Methods
    *********************************************************************/
    constructor(props) {
        super(props);

        this.store = new Store();

        this.handleEditListItem = this.handleEditListItem.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            textWarning: '',
            isOpen: false,

            /* @NOTE
                
                This was a pattern that didnt sit right with me, and towards the end
                I was working on combing this component into the NewItemModal, during
                which I wanted to work this kink out.

                Figured it out, moving from Class-level property instantiation to
                componentWillMount instantiation of this.state seemed to give me access
                to this.props
                
            */
            modalForm: {
                text: ''
            }
        };
    }

    componentWillMount() {
        this.closeModal = this.props.closeModal.bind(this);
        this.save = this.props.save.bind(this);

        this.setState({
            modalForm: {
                text: this.props.item.text
            }
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} closeModal={this.closeModal}>
                <div className="EditItemModal">
                    <h6>Edit List Item</h6>
                    <form onSubmit={this.handleEditListItem}>
                      <input type="text" placeholder="Watchya doing?" value={this.state.modalForm.text} ref="text" maxLength="100" onChange={this.onChange}></input>
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

        let invalid = Validation.minLength(this.state.modalForm.text);

        if (invalid) {
            this.setState({
                textWarning: invalid,
            });
        } else {
            let item = this.props.item;
            item.text = this.state.modalForm.text;

            this.save();
            this.closeModal();
        }
    }

    onChange(e) {
        let form = this.state.modalForm;

        form.text = this.refs.text.value;

        this.setState({
            modalForm: form,
            textWarning: Validation.maxLength(form.text.length),
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
