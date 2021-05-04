$(document).ready(function(){
    stop_loader();

	$.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings)
	{
		 return {
			"iStart": oSettings._iDisplayStart,
			"iEnd": oSettings.fnDisplayEnd(),
			"iLength": oSettings._iDisplayLength,
			"iTotal": oSettings.fnRecordsTotal(),
			"iFilteredTotal": oSettings.fnRecordsDisplay(),
			"iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
			"iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
		 };
	};

	var url_access = base_url+'user/get_users';
	var table = $("#user").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#user_filter input')
					.off('.DT')
					.on('input.DT', function() {
						 api.search(this.value).draw();
				});
		 },
				oLanguage: {
				sProcessing: "loading..."
		 },
				processing: true,
				serverSide: true,
				ajax: {"url": url_access, "type": "POST"},
				 	columns: [
						{"data": "name_user"},
						{"data": "email_user"},
						{"data": "phone_user"},
						{"data": "role_user"},
						{"data": "action_user"}
					],
		 		order: [[0, 'asc']],
		 		columnDefs: [{ "orderable": false, "targets": 4 }],
		 rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
		 }
	});

	$('#user').on('click','.edit_record',function(){
			var id_user=$(this).data('id_user');
			var name_user=$(this).data('name_user');
			var address_user=$(this).data('address_user');
			var birthday_user=$(this).data('birthday_user');
			var gender_user=$(this).data('gender_user');
			var phone_user=$(this).data('phone_user');
			var email_user=$(this).data('email_user');
			var role_user=$(this).data('role_user');
			$('#ModalUserUpdate').modal('show');
			$('[name="idUserUpdate"]').val(id_user);
			$('[name="roleUserUpdate"]').val(role_user);
			$('[name="nameUserUpdate"]').val(name_user);
			$('[name="addressUserUpdate"]').val(address_user);
			$('[name="birthdayUserUpdate"]').val(birthday_user);
			$('[name="genderUserUpdate"]').val(gender_user);
			$('[name="phoneUserUpdate"]').val(phone_user);
			$('[name="emailUserUpdate"]').val(email_user);
			
	});

	$('#user').on('click','.hapus_record',function(){
			var id=$(this).data('id_user');
			var name=$(this).data('name_user');
			$('#ModalUserRemove').modal('show');
			$('[name="idUserRemove"]').val(id);
			$('[id="nameUserRemove"]').text(name);
	});
});

$('#add-row').click(function(){
	var role_user 		= $('[name="roleUser"]').val();
	var name_user 		= $('[name="nameUser"]').val();
	var address_user 	= $('[name="addressUser"]').val();
	var birthday_user 	= $('[name="birthdayUser"]').val();
	var gender_user 	= $('[name="genderUser"]').val();
	var phone_user 		= $('[name="phoneUser"]').val();
	var email_user 		= $('[name="emailUser"]').val();

	if(role_user != '' && name_user != '' && address_user != '' && birthday_user != '' && gender_user != '' && phone_user != '' && email_user != ''){
		run_loader();
	}
});