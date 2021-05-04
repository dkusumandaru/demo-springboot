var optionTemporaryLength, optionTemporartKey, optionTemporaryData;


$(document).ready(function(){
	getOption();
});

// --<> bakcup load localstorage
function getOption(){
	var optionTemporary = $('#optionTemporary').val();	
	var json = JSON.parse(optionTemporary);

	optionTemporaryData = json;
	optionTemporaryLength = Object.keys(json).length;
	optionTemporartKey = Object.keys(json);

	$('#optionTemporaryFrame').remove();
	$('#optionTemporary').remove();
}