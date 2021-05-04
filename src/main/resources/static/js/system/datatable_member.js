$(document).ready(function(){
	// Setup datatables
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

	var url_access = base_url+'member/get_members';

	var table = $("#member").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#member_filter input')
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
						{"data": "name_member"},
						{"data": "email_member"},
						{"data": "phone_member"},
						{"data": "role_member"},
						{"data": "action_member"}
					],
		 		order: [[1, 'asc']],
		 		columnDefs: [{ "orderable": false, "targets": 4 }],
		 rowCallback: function(row, data, iDisplayIndex) {

				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
		 }
	});

	$('#member').on('click','.edit_record',function(){
		var id_member=$(this).data('id_member');
		var name_member=$(this).data('name_member');
		var address_member=$(this).data('address_member');
		var birthday_member=$(this).data('birthday_member');
		var gender_member=$(this).data('gender_member');
		var phone_member=$(this).data('phone_member');
		var email_member=$(this).data('email_member');
		var role_member=$(this).data('role_member');
		$('#ModalMemberUpdate').modal('show');
		$('[name="idMemberUpdate"]').val(id_member);
		$('[name="roleMemberUpdate"]').val(role_member);
		$('[name="nameMemberUpdate"]').val(name_member);
		$('[name="addressMemberUpdate"]').val(address_member);
		$('[name="birthdayMemberUpdate"]').val(birthday_member);
		$('[name="genderMemberUpdate"]').val(gender_member);
		$('[name="phoneMemberUpdate"]').val(phone_member);
		$('[name="emailMemberUpdate"]').val(email_member);	
	});

	$('#member').on('click','.hapus_record',function(){
		var id=$(this).data('id_member');
		var name=$(this).data('name_member');
		$('#ModalMemberRemove').modal('show');
		$('[name="idMemberRemove"]').val(id);
		$('[id="nameMemberRemove"]').text(name);
	});
	
});