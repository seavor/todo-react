// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component File Dependencies
import './Modal.css';

class Modal extends Component {
    /* Lifecycle Methods
    *********************************************************************/
    render() {
        this.toggleBodyControls();

        return (
            <div className={"Modal " + (this.props.isOpen ? 'active' : '')} onClick={this.props.closeModal.bind(this)}>
                <div className="Modal-wrapper" onClick={this.prevent.bind(this)}>
                    <button className="Modal-wrapper_close" onClick={this.props.closeModal.bind(this)} />
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
