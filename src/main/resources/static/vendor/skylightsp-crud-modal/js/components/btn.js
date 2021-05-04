var btnTRY__x = {
	b : ['<button class="', '">', '</button>'],
	bid : ['<button id="', '" class="', '" ', '>', '</button>'],
  	s : {success : 'btn btn-success', danger : 'btn btn-danger', warning: 'btn btn-warning', info:'btn btn-info', default:'btn btn-default'},
  	a : {call: 'call_row ', end : 'end_row ', delay: 'delay-row ', wait:'wait_row '},
};

var btn = {
	e : ['<button ', ' >', '</button>'],
	p : {i:'id', c:'class'},
  	s : {success : 'btn btn-success', danger : 'btn btn-danger', warning: 'btn btn-warning', info:'btn btn-info', default:'btn btn-default'},
  	a : {edit: 'edit_row ', rm : 'remove_row ', add: 'add_row '},
};

function generateBtn(className, idName){
	var button = 
	btn.e[0]+
	btn.p.i+'="'+idName+'"'+
	btn.p.c+'="'+className+'"'+
	btn.e[1]+
	btn.e[2];
}