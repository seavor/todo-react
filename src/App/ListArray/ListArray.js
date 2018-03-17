// Component Library Dependencies
import React, { Component } from 'react';
import Moment from 'moment-timezone';
import uuid from 'uuid';

// Component Service Dependencies
import Store from '../../services/Store/Store';
import Constants from '../../services/Constants/Constants';

// Component File Dependencies
import './ListArray.css';
import List from '../List/List';
import Modal from '../Modal/Modal';

class ListArray extends Component {
  static TOMORROW_INDEX = 0;
  static TODAY_INDEX = 1;
  static YESTERDAY_INDEX = 2;

  static STORE_KEY = 'lists';

  static TEXT_WARNINGS = {
    EMPTY: 'An empty task isn\'t very useful',
    MAX: 'Max Characters Reached'
  };

  constructor() {
    super();

    this.store = new Store();

    this.state = {
      listIndex: 0,
      lists: [],

      modalIsOpen: false,
      modalForm: {
        text: ''
      }
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleNewListItem = this.handleNewListItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /* Lifecycle Methods
  *********************************************************************/
  componentWillMount() {
    this.setState({
      lists: this._initializeLists()
    });
  }

  render() {
    return (
      <div className="ListArray">
        <Modal isOpen={this.state.modalIsOpen} closeModal={this.toggleModal}>
          <div className="ListArray-modal">
            <h6>New List Item</h6>
            <form onSubmit={this.handleNewListItem}>
              <input type="text" placeholder="Watchya doing?" value={this.state.modalForm.text} ref="text" maxLength="100" onChange={this.onChange}></input>
              <p>{this.state.textWarning}</p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
        <div className="ListArray-item">
          <List list={this.state.lists[this.state.listIndex+ListArray.YESTERDAY_INDEX]} newItem={this.toggleModal} />
        </div>
        <div className="ListArray-item">
          <List list={this.state.lists[this.state.listIndex+ListArray.TODAY_INDEX]} newItem={this.toggleModal} />
        </div>
        <div className="ListArray-item">
          <List list={this.state.lists[this.state.listIndex]} newItem={this.toggleModal} />
        </div>
      </div>
      );
  }

  /* Component Methods
  *********************************************************************/

  /*
   * This method toggles the component's modal
   */
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  handleNewListItem(e) {
    e.preventDefault();

    if (!this.refs.text.value) {
      this.setState({
        textWarning: ListArray.TEXT_WARNINGS.EMPTY,
      });
    } else {
      let entry = this._newDataEntry();

      entry.text = this.refs.text.value;
      entry.complete = this.refs.complete || false;
      entry.persist = this.refs.persist || true;

      let lists = this.state.lists;
      let items = [].concat(lists[ListArray.TODAY_INDEX].items, entry);

      lists[ListArray.TODAY_INDEX].items = items;

      this.setState({
        modalForm: {
          text: ''
        },
        lists: lists
      });

      this.toggleModal();

      this.store.set(ListArray.STORE_KEY, lists);
    }
  }

  onChange(e) {
    let form = this.state.modalForm;
    form.text = e.target.value;

    this.setState({
      modalForm: form,
      textWarning: form.text.length === Constants.TEXT_LIMIT ? ListArray.TEXT_WARNINGS.MAX : null,
    });
  }

  /* Private Methods
  *********************************************************************/
  _initializeLists() {
    let lists = this.store.get(ListArray.STORE_KEY) || [];

    // No List History
    if (!lists.length) {
      lists.push(this._newList(1));
      lists.push(this._newList());
    } else {
      this._initializeTodaysLists(lists);
    }

    this.store.set(ListArray.STORE_KEY, lists);

    return lists;
  }

  _initializeTodaysLists(lists) {
    let todayListExists = this._isToday(lists[ListArray.TODAY_INDEX].date),
      tomorrowIsToday = this._isToday(lists[ListArray.TOMORROW_INDEX].date),
      
      originalYesterdayList = lists[ListArray.YESTERDAY_INDEX];

    if (!todayListExists) {
      let newYesterdayList;

      if (!tomorrowIsToday) {
        newYesterdayList = lists[ListArray.TODAY_INDEX];
        lists.unshift(this._newList());
      }

      lists.unshift(this._newList(1));
      
      originalYesterdayList && this._persistItems(originalYesterdayList.items, lists[ListArray.TODAY_INDEX].items);
      newYesterdayList && this._persistItems(newYesterdayList.items, lists[ListArray.TODAY_INDEX].items);
    }

  }

  _newList(tomorrow) {
    let list = this._newDataEntry(tomorrow);
    list.items = [];

    return list;
  }

  _newDataEntry(tomorrow) {
    return {
      id: uuid.v4(),
      date: Moment().add(tomorrow || 0, 'days').toISOString(),
      tz: Moment.tz.guess()
    }
  }

  _isToday(date) {
    let today = Moment().startOf('day'),
      fake = 'US/Pacific';

    return Moment.tz(Moment(date), Moment.tz.guess()).isSame(today, 'd');
  }

  _isTomorrow(date) {
    let tomorrow = Moment().add(1, 'days').startOf('day'),
      fake = 'US/Pacific';

    return Moment.tz(Moment(date), Moment.tz.guess()).isSame(tomorrow, 'd');
  }

  _persistItems(items, list) {
    items.map(function(item, i) {
      if (item.persist) {
        list.push(item);
        items.splice(i, 1);
      }
    });
  }

}

export default ListArray;
