// Component Library Dependencies
import React, { Component } from 'react';

// Component Service Dependencies
import Store from '../services/Store/Store';
import Constants from '../services/Constants/Constants';
import Images from '../services/Images/Images';

// Component File Dependencies
import './App.css';
import Clock from './Clock/Clock';
import ListArray from './ListArray/ListArray';
import NewItemModal from './Modal/NewItemModal/NewItemModal';

class App extends Component {
  static TEXT_WARNINGS = {
    EMPTY: 'An empty task isn\'t very useful',
    MAX: 'Max Characters Reached'
  };

  state = {
    lists: [],

    modalIsOpen: false,
    modalForm: {
      text: ''
    }
  }

  /* Lifecycle Methods
  *********************************************************************/
  constructor(props) {
    super(props);

    this.store = new Store();

    this.toggleModal = this.toggleModal.bind(this);
    this.updateLists = this.updateLists.bind(this);
  }

  componentWillMount() {
    this.setState({
      lists: this.store.get(Constants.STORE_KEYS.LISTS) || []
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-buttons">
            <button className="App-buttons_new button" onClick={this.toggleModal}>{Images.addIcon()}</button>
            <button className="App-buttons_settings button">{Images.settingsIcon()}</button>
          </div>
          <div className="App-clock">
            <Clock />
          </div>
        </div>

        <div className="App-lists">
          <ListArray lists={this.state.lists} updateLists={this.updateLists}/>
        </div>

        <div className="App-credits">
          <div>Icons made by <a href="http://www.freepik.com" target="_blank" title="Freepik" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        </div>

        <NewItemModal isOpen={this.state.modalIsOpen} closeModal={this.toggleModal} lists={this.state.lists}></NewItemModal>

      </div>
    );
  }

  /* Component Methods
  *********************************************************************/
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  updateLists() {
    let item = this.state.lists[1].items[0];

    console.log(item.text);

    this.setState({
      lists: this.state.lists
    });

    this.store.set(Constants.STORE_KEYS.LISTS, this.state.lists);
  }
}

export default App;
