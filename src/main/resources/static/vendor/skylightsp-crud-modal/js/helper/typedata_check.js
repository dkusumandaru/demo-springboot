function getFormatedDate(value) {
    if (value) {
       var month = value.GetMonth();
    }
}

function checkType(value) {
	var checkType;

	var checkNumber_1 = Number.isInteger(value);
	if (checkNumber_1 == true) {
		checkType = 'number';
	}else{
		var newInt = parseInt(value);
		var checkNumber_2 = Number.isInteger(newInt);
		if (checkNumber_1 == true) {
			checkType = 'number';
		}else{
			checkType = 'text';
		}
	}

	return checkType;
}
