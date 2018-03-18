class Validation {
	static TEXT_LIMIT = 100;

	static TEXT_WARNINGS = {
        EMPTY: 'An empty task isn\'t very useful',
        MAX: 'Max Characters Reached'
    };

    static minLength(length) {
    	if (!length) {
    		return Validation.TEXT_WARNINGS.EMPTY;
    	}

    	return false;
    }

    static maxLength(length) {
    	console.log('Validation', length);
    	if (length === Validation.TEXT_LIMIT) {
    		return Validation.TEXT_WARNINGS.MAX;
    	}

    	return false;
    }
}


export default Validation;