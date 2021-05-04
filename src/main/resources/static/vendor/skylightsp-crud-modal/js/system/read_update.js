var ModulTitle = generateModul('title');
var ModulControl = generateModul('control');
var getUrlAction = generateURL();

var tempValueEdit = '';

$('#add_tables').on('click','.add_record',function(){
	unloadAlertReadUpdate('add');
	$('.modal-notification-body').hide();
	var titleModal = icon.add+' Add '+ModulTitle;
	
	$('#add-row-title').html(titleModal);
	$('#add-row-form').attr('action', getUrlAction+'/add');
	$('.add-id.modal.fade').attr('id', 'add'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var type = '';
	var action = 'add';

	for (const [key, value] of Object.entries(data)) {

		access = getAccess(key);
		title = createTitle(key);

		console.log(title);
		console.log(value);

		typeDate = checkDateAccess(key);
		if (typeDate != 'date') {
			type = checkType(value);
		}else{
			type = typeDate;
		}

		// Title -
		// access
		// nameClass 
		// nameId
		// typeValue -
		// Value -
		// Required -
		// replaceUnderscore(str);
		var formSingle = 
			generateInput(
				title,
				access,
				`${key}`+'_'+action, 
				`${key}`+'_'+action,
				type, 
				`${value}`,
				'true'
			);

		form += formSingle;				
	}

	$('#form_add').html(form);
	$('#add'+ModulControl).modal('show');
});

$('#tables').on('click','.edit_record',function(){
	unloadAlertReadUpdate('edit');
	$('.modal-notification-body').hide();
	var titleModal = icon.edit+' Edit '+ModulTitle;
	$('#edit-row-title').html(titleModal);
	$('#edit-row-form').attr('action', getUrlAction+'/edit');
	$('.edit-id.modal.fade').attr('id', 'edit'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var action = 'edit';


	console.log(data);
	for (const [key, value] of Object.entries(data)) {

		// access = checkIdAccess(key);
		access = getAccess(key);
		title = createTitle(key);
		if (access == 'name') {
			tempValueEdit = value;
		}


		// type = checkType(value);
		typeDate = checkDateAccess(key);
		// console.log(typeDate);
		if (typeDate != 'date') {
			type = checkType(value);
		}else{
			type = typeDate;
		}
		// Title -
		// access
		// nameClass 
		// nameId
		// typeValue -
		// Value -
		// Required -
		// replaceUnderscore(str);
		var formSingle = 
			generateInput(
				title,
				access,
				`${key}`+'_'+action, 
				`${key}`+'_'+action,
				type, 
				`${value}`,
				'true'
			);

		form += formSingle;				
	}

	$('#form_edit').html(form);
	$('#edit'+ModulControl).modal('show');
});

$('#tables').on('click','.replace_record',function(){
	unloadAlertReadUpdate('replace');
	$('.modal-notification-body').hide();
	var titleModal = icon.edit+' Replace '+ModulTitle;
	$('#replace-row-title').html(titleModal);
	$('#replace-row-form').attr('action', getUrlAction+'/replace');
	$('.replace-id.modal.fade').attr('id', 'replace'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var action = 'replace';

	for (const [key, value] of Object.entries(data)) {

		// access = checkIdAccess(key);
		access = getAccess(key);
		title = createTitle(key);
		if (access == 'name') {
			tempValueReplace = value;
		}


		// type = checkType(value);
		typeDate = checkDateAccess(key);
		// console.log(typeDate);
		if (typeDate != 'date') {
			type = checkType(value);
		}else{
			type = typeDate;
		}
		// Title -
		// access
		// nameClass 
		// nameId
		// typeValue -
		// Value -
		// Required -
		// replaceUnderscore(str);
		var formSingle = 
			generateInput(
				title,
				access,
				`${key}`+'_'+action, 
				`${key}`+'_'+action,
				type, 
				`${value}`,
				'true'
			);

		form += formSingle;				
	}

	$('#form_replace').html(form);
	$('#replace'+ModulControl).modal('show');
});

$('#tables').on('click','.remove_record',function(){
	unloadAlert();
	var titleModal = icon.rm+' Remove '+ModulTitle;
	$('#remove-row-title').html(titleModal);
	$('#remove-row-form').attr('action', getUrlAction+'/remove');
	$('.remove-id.modal.fade').attr('id', 'remove'+ModulControl);

	var data =	$(this).data();
	console.log(data);
	var form = '';
	var action = 'remove';
	

	for (const [key, value] of Object.entries(data)) {
		// $('[name="'+`${key}`+'Edit"]').val(`${value}`);

		// access = checkIdAccess(key);
		access = 'id';
		title = createTitle(key);
		type = checkType(value);
		if (access == 'id') {
			// Title -
			// access
			// nameClass 			
			// nameId
			// typeValue -
			// Value -
			// Required -
			// replaceUnderscore(str);
			var formSingle = 
				generateInput(
					title,
					access,
					`${key}`+'_'+action, 
					`${key}`+'_'+action, 
					type, 
					`${value}`,
					'true'
				);
		}
		form += formSingle;				
	}

	for (const [key, value] of Object.entries(data)) {
		access = checkNameAccess(key);
		title = createTitle(key);
		type = checkType(value);
		if (access == 'name') {
			var formSingle = generateMessage(ModulTitle, `${value}`);
			form += formSingle;
		}
	}

	console.log(form);
	$('#form_remove').html(form);
	$('#remove'+ModulControl).modal('show');
});

$('#tables').on('click','.delete_record',function(){
	unloadAlert();
	var titleModal = icon.rm+' Delete '+ModulTitle;
	$('#delete-row-title').html(titleModal);
	$('#delete-row-form').attr('action', getUrlAction+'/delete');
	$('.delete-id.modal.fade').attr('id', 'delete'+ModulControl);

	var data =	$(this).data();
	var form = '';
	var action = 'delete';

	for (const [key, value] of Object.entries(data)) {
		// $('[name="'+`${key}`+'Edit"]').val(`${value}`);

		// access = checkIdAccess(key);
		access = 'id';
		title = createTitle(key);
		type = checkType(value);
		if (access == 'id') {
			// Title -
			// access
			// nameClass 			
			// nameId
			// typeValue -
			// Value -
			// Required -
			// replaceUnderscore(str);
			var formSingle = 
				generateInput(
					title,
					access,
					`${key}`+'_'+action, 
					`${key}`+'_'+action, 
					type, 
					`${value}`,
					'true'
				);
		}
		form += formSingle;				
	}

	for (const [key, value] of Object.entries(data)) {
		access = checkNameAccess(key);
		title = createTitle(key);
		type = checkType(value);
		if (access == 'name') {
			var formSingle = generateMessage(ModulTitle, `${value}`);
			form += formSingle;
		}
	}

	$('#form_delete').html(form);
	$('#delete'+ModulControl).modal('show');
});

// --<> alert loader
	$(document).ready(function(){
		$('.modal-notification-body-add').hide();
		$('.modal-notification-body-edit').hide();
	});

	function loadAlertReadUpdate(control){


		$('.modal-content-body-'+control).hide("slide", { direction: "down" }, 500);
		setTimeout(function(){
			$('.modal-notification-body-'+control).show("slide", { direction: "up" }, 1000);
		}, 600);
		
		// $('').show("slide", { direction: "left" }, 1000);
		// $('').hide("slide", { direction: "right" }, 1000);
		// $().slideRight('slow').delay(3000).slideLeft('slow');
	}

	function controlAlertReadUpdate(value){
		var message = '';
		var control = value;
		var tempFalse = 'false';
		var tempTrue = 'false';


		if (value == 'add') {
			var results = [];
			$('#'+value+'-crud-content input').each(function(){
			    results.push({
			        id: this.id,
			        value: this.value
			    });
			});

			$('#'+value+'-crud-content select').each(function(){
			    results.push({
			        id: this.id,
			        value: this.value
			    });
			});

			// console.log(results);

			for (var i = 0; i < results.length; i++) {
				console.log(results[i].value);
				var idExclamation = results[i].id;
				if (results[i].value != null && results[i].value != '') {
					// console.log()
					tempTrue = 'true';
				}else{
					tempFalse = 'true';
					var message = loadExclamation('empty', idExclamation);
				}

			}

			if (tempFalse == 'false' && tempTrue == 'true') {
				var titleModal = icon.add+' Add '+ModulTitle;
				$('#add-row-title-notification').html(titleModal);

				var valueModal = $('#form_add').find('input').val();
				message = '<b>Are you sure to add <u>'+ModulTitle+' : '+valueModal+'</u></b> ?';
				$('#modal-notification-message-add').html(message);

				loadAlertReadUpdate(control);				
			}

			// var valueModal = $('#form_add').find('input').val();

			// 	var arrText= $('input[type=text]').map(function(){
			// 		var idInput = this.attr('id');
			// 		console.log(idInput);
			// 		return this.value;
			// 	}).get();

			// 	console.log(arrText);
			// console.log(valueModal);

			// if (valueModal != null && valueModal != '') {
			// 	var titleModal = icon.add+' Add '+ModulTitle;
			// 	$('#add-row-title-notification').html(titleModal);

			// 	var valueModal = $('#form_add').find('input').val();
			// 	message = '<b>Are you sure to add <u>'+ModulTitle+' : '+valueModal+'</u></b> ?';
			// 	$('#modal-notification-message-add').html(message);

			// 	loadAlertReadUpdate(control);
			// }else{

			// 	var idModal = $('#form_add').find('input').attr('id');
			// 	$('#'+idModal).addClass('is-invalid');

			// 	var message = generateExclamation('empty');
			// 	$(message).insertAfter('#'+idModal);


			// // 	// console.log(idModal);
			// }
		}else if (value == 'replace') {
			var results = [];
			$('#'+value+'-crud-content input').each(function(){
			    results.push({
			        id: this.id,
			        value: this.value
			    });
			});

			$('#'+value+'-crud-content select').each(function(){
			    results.push({
			        id: this.id,
			        value: this.value
			    });
			});

			// console.log(results);

			for (var i = 0; i < results.length; i++) {
				console.log(results[i].value);
				var idExclamation = results[i].id;
				if (results[i].value != null && results[i].value != '') {
					// console.log()
					tempTrue = 'true';
				}else{
					tempFalse = 'true';
					var message = loadExclamation('empty', idExclamation);
				}

			}

			if (tempFalse == 'false' && tempTrue == 'true') {
				var titleModal = icon.edit+' Replace '+ModulTitle;
				$('#edit-row-title-notification').html(titleModal);

				var valueModal = $('#form_replace').find('input').val();
				message = '<b>Are you sure to update <u>'+ModulTitle+' : '+tempValueEdit+' to '+valueModal+' </u></b> ?';
				$('#modal-notification-message-replace').html(message);

				loadAlertReadUpdate(control);				
			}

		}else if (value == 'edit') {
			var titleModal = icon.edit+' Edit '+ModulTitle;
			$('#edit-row-title-notification').html(titleModal);

			var valueModal = $('#form_edit').find('input').val();
			message = '<b>Are you sure to update <u>'+ModulTitle+' : '+tempValueEdit+' to '+valueModal+' </u></b> ?';
			$('#modal-notification-message-edit').html(message);

			loadAlertReadUpdate(control);
		}
	}

	function unloadAlertReadUpdate(value){
		var control = value;
		// console.log(control);
		$('.modal-notification-body-'+control).hide("slide", { direction: "down" }, 500);
		setTimeout(function(){
			$('.modal-content-body-'+control).show("slide", { direction: "up" }, 1000);
			// $('.modal-notification-body').hide();
		}, 600);
	}
// --<> alert loader