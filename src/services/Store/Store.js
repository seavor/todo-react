import uuid from 'uuid';
import Moment from 'moment-timezone';

var fall_back_memory_store = {};

class Store {
	constructor() {
		this.store = window.localStorage || fall_back_memory_store;
	}
	
    get(key) {
	    return JSON.parse(this.store[key] || null);
	}
	
    set(key, value) {
	    this.store[key] = JSON.stringify(value || null);
	}

	newDataEntry(tomorrow) {
	    return {
			id: uuid.v4(),
			date: Moment().add(tomorrow || 0, 'days').toISOString(),
			tz: Moment.tz.guess()
	    }
	}
}


export default Store;