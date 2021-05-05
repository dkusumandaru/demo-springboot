//---<> Converter
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function titleCase(str) {
	   var splitStr = str.toLowerCase().split(' ');
	   for (var i = 0; i < splitStr.length; i++) {
	       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	   }

	   return splitStr.join(' '); 
	}

	function replaceUnderscore(str){
		var replaced = str.split('_').join(' ');
		return replaced;
	}
//---<> Converter


//---<> Text Usage

	function createTitle(key) {
		var createTitle = '';

		var str = replaceUnderscore(key);
		var result = titleCase(str);

		var checkSelect = result.slice(-6);
		if (checkSelect == 'Select') {
			result = result.split(' ')[0];
		}
		var checkTextarea = result.slice(-8);
		if (checkTextarea == 'Textarea') {
			result = result.replace(' Textarea','');
		}

		return result;
	}

	function generateModul(access){
		var Modul;
		var rSegment = getUrlSegment(0);
		var oSegment = getUrlSegment(1);
		var rModul = capitalizeFirstLetter(rSegment);
		
		if (oSegment == 'status' || oSegment == 'detail' || oSegment == 'category') {
			var oModul = capitalizeFirstLetter(oSegment);			
			if (access == 'title') {
				Modul = rModul+' '+oModul;
			}else if (access == 'control') {
				Modul = rModul+oModul;
			}
		}else{
			if (access == 'title') {
				Modul = rModul;
			}else if (access == 'control') {
				Modul = rModul;
			}
		}
		return Modul;
	}

	function currencyFormater(input){
		var output;
		if (input != null) {
			var data = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			output = data;
		}
		return	output;	
	}
//---<> Text Usage


//---<> Access
	function checkIdAccess(str){
		// var result = str.substring(2,0);
		var result = str.slice(-2);
		if (result == 'id') {
			return result;
		}else{
			return false;
		}
	}

	function checkSelectAccess(str){
		var result = str.slice(-6);
		if (result == 'select') {
			return result;
		}else{
			return false;
		}
	}

	function checkNameAccess(str){
		var result = str.slice(-4);
		if (result == 'name') {
			return result;
		}else{
			return false;
		}
	}

	function checkDateAccess(str){
		var result = str.slice(-4);
		if (result == 'date') {
			return result;
		}else{
			return false;
		}
	}

	function getTextAreaAccess(str){

		var remark = str.slice(-6);
		if (remark == 'remark') {
			return 'textarea';
		}else{
			var location = str.slice(-8);
			if (location == 'location' || location == 'describe') {
				return 'textarea';
			}else{
				var address = str.slice(-7);
				if (address == 'address' || address == 'comment') {
					return 'textarea';
				}else{
					var textarea = str.slice(-8);
					if (textarea == 'textarea') {
						return 'textarea';
					}else{
						return false;
					}
				}
			}
		}
	}

	// ---<> main 
	function getAccess(str){
		var checkId = checkIdAccess(str);
		if (checkId != false) {
			return checkId;
		}else{
			var checkName = checkNameAccess(str);
			if (checkName != false) {
				return checkName;
			}else{
				var checkText = getTextAreaAccess(str);
				if (checkText != false) {
					return checkText;
				}else{
					var checkText = checkSelectAccess(str);
					if (checkText != false) {
						return checkText;
					}else{
						return false;
					}
				}
			}
		}
	}
//---<> Access

//---<> Get Id

function getSelectPointer(str){
	var pointer = str.substr(0, str.indexOf('_id_select_'));

	console.log(pointer);

	return pointer;

}

//---<> Get Id