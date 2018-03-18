// Component Library Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment-timezone';

// Component Service Dependencies
import Store from '../../services/Store/Store';
import Constants from '../../services/Constants/Constants';

// Component File Dependencies
import './ListArray.css';
import List from '../List/List';

class ListArray extends Component {
  state = {
    listIndex: 0,
    lists: []
  };

  /* Prop Methods
  *********************************************************************/
  updateLists = () => this.props.updateLists.bind(this);

  /* Lifecycle Methods
  *********************************************************************/
  constructor(props) {
    super(props);

    this.store = new Store();
  }

  componentWillMount() {
    this.setState({
      lists: this._initializeLists(this.props.lists)
    });
  }

  render() {
    return (
      <div className="ListArray">
        <div className="ListArray-item">
          <h2 className="ListArray-item_title">{Constants.LIST_KEYS.YESTERDAY.LABEL}</h2>
          <List updateList={this.updateLists()} list={this.state.lists[this.state.listIndex+Constants.LIST_KEYS.YESTERDAY.INDEX]} />
        </div>
        <div className="ListArray-item">
          <h2 className="ListArray-item_title">{Constants.LIST_KEYS.TODAY.LABEL}</h2>
          <List updateList={this.updateLists()} list={this.state.lists[this.state.listIndex+Constants.LIST_KEYS.TODAY.INDEX]} />
        </div>
        <div className="ListArray-item">
          <h2 className="ListArray-item_title">{Constants.LIST_KEYS.TOMORROW.LABEL}</h2>
          <List updateList={this.updateLists()} list={this.state.lists[this.state.listIndex]} />
        </div>
      </div>
      );
  }

  /* Private Methods
  *********************************************************************/
  _initializeLists(lists) {
    // No List History
    if (!lists.length) {
      lists.push(this._newList(1));
      lists.push(this._newList());
    } else {
      this._initializeTodaysLists(lists);
    }

    this.store.set(Constants.STORE_KEYS.LISTS, lists);

    return lists;
  }

  _initializeTodaysLists(lists) {
    let todayListExists = this._isToday(lists[Constants.LIST_KEYS.TODAY.INDEX].date),
      tomorrowIsToday = this._isToday(lists[Constants.LIST_KEYS.TOMORROW.INDEX].date),
      
      originalYesterdayList = lists[Constants.LIST_KEYS.YESTERDAY.INDEX];

    if (!todayListExists) {
      let newYesterdayList;

      if (!tomorrowIsToday) {
        newYesterdayList = lists[Constants.LIST_KEYS.TODAY.INDEX];
        lists.unshift(this._newList());
      }

      lists.unshift(this._newList(1));
      
      originalYesterdayList && this._persistItems(lists[Constants.LIST_KEYS.TODAY.INDEX].items, originalYesterdayList.items);
      newYesterdayList && this._persistItems(lists[Constants.LIST_KEYS.TODAY.INDEX].items, newYesterdayList.items);
    }

  }

  _newList(tomorrow) {
    let list = this.store.newDataEntry(tomorrow);
    list.items = [];

    return list;
  }

  _isToday(date) {
    let today = Moment().startOf('day');

    return Moment.tz(Moment(date), Moment.tz.guess()).isSame(today, 'd');
  }

  _persistItems(list, items) {
    items.map(function(item, i) {
      if (item.persist) {
        list.push(item);
        items.splice(i, 1);

      }

      return item;
    });
  }

}

ListArray.propTypes = {
  lists: PropTypes.array,
  updateLists: PropTypes.func
}

export default ListArray;
