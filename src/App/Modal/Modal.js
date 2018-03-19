// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Service Dependencies
import Images from '../../services/Images/Images';

// Component File Dependencies
import './Modal.css';

class Modal extends Component {
    /* Lifecycle Methods
    *********************************************************************/
    constructor(props) {
        super(props);

        this.prevent = this.prevent.bind(this);
        this.toggleBodyControls = this.toggleBodyControls.bind(this);
    }

    componentWillMount() {
        this.closeModal = this.props.closeModal.bind(this);
    }

    render() {
        this.toggleBodyControls();

        return (
            <div className={"Modal " + (this.props.isOpen ? 'active' : '')} onClick={this.closeModal}>
                <div className="Modal-wrapper" onClick={this.prevent}>
                    <button className="Modal-wrapper_close button" onClick={this.closeModal}>{Images.closeIcon()}</button>
                    <div className="Modal-wrapper_content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

    /* Component Methods
    *********************************************************************/
    prevent(e) {
        e.stopPropagation();
    }

    toggleBodyControls() {
         document.body.classList.toggle('no-scroll', this.props.isOpen);
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func
}

export default Modal;
