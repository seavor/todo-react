class Constants {
	static LIST_KEYS = {
		WHENEVER: {
			INDEX: -1,
			LABEL: 'Whenever'
		},
		TOMORROW: {
			INDEX: 0,
			LABEL: 'Tomorrow'
		},
		TODAY: {
			INDEX: 1,
			LABEL: 'Today'
		},
		YESTERDAY: {
			INDEX: 2,
			LABEL: 'Yesterday'
		}
	}

	static STORE_KEYS = {
		LISTS: 'lists'
	}
	
	static TEXT_LIMIT = 100;

	static TEXT_WARNINGS = {
        EMPTY: 'An empty task isn\'t very useful',
        MAX: 'Max Characters Reached'
    };
}


export default Constants;