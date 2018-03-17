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
}


export default Store;