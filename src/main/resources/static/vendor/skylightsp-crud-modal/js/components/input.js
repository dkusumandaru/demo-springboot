var input = {
	b 	: ['<div class="form-group">','<div class="form-line">', '</div>' ],
	h 	: ['<div class="form-group hidden">'],
	in 	: ['<input ',' />'],
	s 	: ['<select ',' >', '</select>'],
	o 	: ['<option ', ' >', '</option>'],
	ta 	: ['<textarea ',' >', '</textarea>'],
	lb 	: ['<label>','</label>'],
	p 	: {type:{ t: 'text', n:'number', p:'password', e:'email', d:'date', i:'time', di:'datetime'}, class:{ fc: 'form-control'}},
	pf	: ['id', 'type', 'class', 'name', 'value', 'placeholder', 'required', 'disabled', 'onkeyup', 'onchange']
}

function loadOption(Value){

	// console.log(optionTemporaryData);

	// console.log(input);
	var optionList = '';
	var optionUsage = '';
	var optionUnusage = '';
	var optionStart = '';
	var optionData = optionTemporaryData['role'];

	optionLenght = Object.keys(optionData).length;

	// console.log(optionData);
	// console.log(optionKey);

	for (var i = 0; i < optionLenght; i++) {
		optionKey = Object.keys(optionData[i]);
		optionKeyLength = Object.keys(optionData[i]).length;

		// var optionId, optionName;
		// console.log(optionKey);
		for (var j = 0; j < optionKeyLength; j++) {
			// console.log(optionData[i][optionKey[j]]);
			// `${optionKey[j]}` = 
			var optionKeyRaw = optionKey[j];
			var optionVar = getAccess(optionKeyRaw);
			// checkIdAccess(optionKeyRaw);
			// console.log(opt);

			window['opt'+optionVar] = optionData[i][optionKey[j]];

			// `${Id}`	= optionData[i][optionKey[j]];
			// optionName	= optionData[i][optionKey[j]];

			
		}


		if (Value == optid) {
			optionUsage += 
				input.o[0]+input.pf[4]+'="'+optid+'"'+
				input.o[1]+optname+
				input.o[2];
		}else{
			optionUnusage += 
				input.o[0]+input.pf[4]+'="'+optid+'"'+
				input.o[1]+optname+
				input.o[2];
		}
			
		// console.log();
		// checkNameAccess(str)

	}

		optionStart = 
			input.o[0]+input.pf[4]+'=""'+
			input.o[1]+'-'+
			input.o[2];

	if (optionUsage == '') {
		optionList = optionStart+optionUsage+optionUnusage;
	}else{
		optionList = optionUsage+optionUnusage+optionStart;
	}


	return optionList;
}

function generateInput(Title, access, nameClass, nameId, typeValue, Value, Required){

	var head = '';
	var content = '';
	var attribute = '';
	var generateId = '';
	var generateType = ''; 
	var generateClass = ''; 
	var generataMaxLength = '';
	var generateMinLength = '';
	
	var generateName = '';
	var generateValue = '';
	var generateRequired = '';
	var generatePlaceholder = '';

	if (typeValue == 'text') {
		generateType = input.pf[1]+'="'+input.p.type.t+'" ';
	}else if(typeValue == 'number'){
		generateType = input.pf[1]+'="'+input.p.type.n+'" ';
	}else if(typeValue == 'password'){
		generateType = input.pf[1]+'="'+input.p.type.p+'" ';
	}else if(typeValue == 'email'){
		generateType = input.pf[1]+'="'+input.p.type.e+'" ';
	}else if(typeValue == 'date'){
		generateType = input.pf[1]+'="'+input.p.type.d+'" ';
	}else if(typeValue == 'time'){
		generateType = input.pf[1]+'="'+input.p.type.i+'" ';
	}else if(typeValue == 'datetime'){
		generateType = input.pf[1]+'="'+input.p.type.di+'" ';
	}else{
		console.log('type not found!!!');
	}

	if (nameClass != '') {
		generateClass = input.pf[2]+'="'+nameClass+' '+input.p.class.fc+'" ';
	}else{
		generateClass = input.pf[2]+'="'+input.p.class.fc+'" ';
	}

	if (nameId != '') {
		generateId = input.pf[0]+'="'+nameId+'" ';
		generateName = input.pf[3]+'="'+nameId+'" ';
		generatePlaceholder = input.pf[5]+'="'+Title+'" ';
	}

	// console.log('HERE : '+Value);

	if (Value != '') {
		if(Value == 0 || Value == '0'){
			generateValue = input.pf[4]+'="" ';			
		}else{
			generateValue = input.pf[4]+'="'+Value+'" ';
		}
	}
	// console.log(generateValue);


	if (Required == 'true') {
		generateRequired = input.pf[6];
	}else{
		generateRequired = '';
	}

	var generateKeyup = input.pf[8]+'="unloadExclamation(&#39;'+nameId+'&#39;)" ';

	attribute = 
		generateId+
		generateType+
		generateClass+
		generateName+
		generateValue+
		generatePlaceholder+
		generateKeyup+
		generateRequired;

	if (access == 'id') {
		generateMinLength = ' minlength="1" ';

		head = input.h[0];
		content =
			input.in[0]+
				attribute+
				generateMinLength+
			input.in[1];
	}else{
		head = input.b[0];
		if (access == 'select') {
			var generateChange = ' '+input.pf[9]+'="unloadExclamation(&#39;'+nameId+'&#39;)" ';
			var optionResult = loadOption(Value);
			var content =
				input.s[0]+
					generateId+
					generateClass+
					generateName+
					generateRequired+
					generateChange+
				input.s[1]+					
					optionResult+
				input.s[2];

		}else if (access == 'textarea') {
			var generateKeyup = input.pf[8]+'="unloadExclamation(&#39;'+nameId+'&#39;)" ';
			generataMaxLength = ' maxlength="65535" ';
			generateMinLength = ' minlength="4" ';

			content =
				input.ta[0]+
					generateId+
					generateType+
					generateClass+
					generateName+
					generatePlaceholder+
					generateRequired+
					generataMaxLength+
					generateMinLength+
					generateKeyup+
				input.ta[1]+
					Value+
				input.ta[2];
		}else{
			// console.log(typeValue);
			if (typeValue == 'number') {
				generateMinLength = ' min="0" ';
				generateMaxLength = ' max="99999999999" ';
			}else{
				generateMaxLength = ' maxlength="255" ';
				generateMinLength = ' minlength="2" ';
			}
			content =
				input.in[0]+
					attribute+
					generateMaxLength+
					generateMinLength+
				input.in[1];
		}
	}

	var newInput = 
		head+
			input.lb[0]+Title+ //Text Title
			input.lb[1]+
		input.b[1]+
			content+
		input.b[2]+
		input.b[2];

	// console.log(newInput);

	return newInput;
}