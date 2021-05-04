function getUrlSegment(number){
	if (number != null) {
		var url = window.location.href;
		// console.log(url);
		var getSegment = url.replace(base_url, '');
		var segment = getSegment.split('/');	
		// console.log(segment);
		// console.log(segment[number]);

		return segment[number];
	}
}



//---<> URL
	function generateURL(){
		var result;
		var rSegment = getUrlSegment(0);
		var oSegment = getUrlSegment(1);
		var sSegment = getUrlSegment(2);
		var eSegment = getUrlSegment(3);
		if ((rSegment == 'status' || rSegment == 'category' || oSegment == 'detail') && sSegment != '' && eSegment == '') {
			result = base_url+rSegment+'/'+oSegment+'/'+sSegment+'/'+eSegment;
		}else if ((rSegment == 'status' || oSegment == 'detail') && sSegment != '') {
			result = base_url+rSegment+'/'+oSegment+'/'+sSegment;
		}else if (oSegment == 'status' || oSegment == 'detail' || oSegment == 'category') {
			result = base_url+rSegment+'/'+oSegment;
			// return result;
		}else{
			result = base_url+rSegment;
			// return result;
		}
		return result;
	} 
//---<> URL