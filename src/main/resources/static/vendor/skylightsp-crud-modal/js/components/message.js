var question = {
		b:['<strong>','</strong>', '<u>', '</u>', '<center>', '</center>'],
		msg: {rm:'Are you sure to remove '},
		sgn: {q:' ?', i:' !', d:' .', c:' ,'}
	};

var exclamation = {
	b:['<div class="invalid-feedback" id="','" >', '</div>'],
    msg: {require: "can't be empty.."},   
}

function generateExclamation(eAccess, id) {
	if (eAccess == 'empty') {
		var message = 
		exclamation.b[0]+id+'_form_message'+
		exclamation.b[1]+
			exclamation.msg.require+
		exclamation.b[2];

		return message;
	}
}

function loadExclamation(eAccess, id){
	unloadExclamation(id);
	$('#'+id).addClass('is-invalid');

	var message = generateExclamation(eAccess, id);
	$(message).insertAfter('#'+id);
}

function unloadExclamation(id){
	$('#'+id+'_form_message').remove();
	$('#'+id).removeClass('is-invalid');
}

function generateMessage(Modul, Value){
	var message = 
		question.b[4]+
		question.b[0]+
			question.msg.rm+
				question.b[2]+Modul+' : '+Value+
				question.b[3]+
			question.sgn.q+
		question.b[1]+
		question.b[5];

	return message;
}

