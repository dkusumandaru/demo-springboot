$(document).ready(function(){
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

	var url_access = base_url+'cash/get';
	var table = $("#cash").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#branch_filter input')
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
						{"data": "id_io"},
						{"data": "date_io"},
						{"data": "name_user"},
						{"data": "name_branch"},
						{"data": "status_io"},
						{"data": "value_io"},						
						{"data": "action_branch"}						
					],
		 		order: [[1, 'asc']],
		 		columnDefs: [{ "orderable": false, "targets": 6 }],
		 rowCallback: function(row, data, iDisplayIndex) {

				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html(data.name_io+'<br><small>'+data.describe_io+'</small>');
				if(data.status_io == 'in'){
					$('td:eq(4)', row).html('<span class="badge badge-success">'+data.status_io+'</span>');
				}else{
					$('td:eq(4)', row).html('<span class="badge badge-danger">'+data.status_io+'</span>');
				}
				if(data.status_io == 'in'){
					$('td:eq(5)', row).html('<span class="number-right">+ '+data.value_io+'</span>');
				}else{
					$('td:eq(5)', row).html('<span class="number-right">- '+data.value_io+'</span>');
				}
				var idUser = $('#idUser').val();

				if(data.id_user == idUser){
					$('td:eq(6)', row).html(data.vaction_branch);
				}else{
					$('td:eq(6)', row).html('-');
				}

		 }
	});


	$('#cash').on('click','.hapus_record',function(){
		var id=$(this).data('id_io');
		var name=$(this).data('name_io');
		var id_user=$(this).data('id_user');
		var value_io=$(this).data('value_io');
		var status_io=$(this).data('status_io');
		var id_branch=$(this).data('id_branch');
		$('#ModalRemove').modal('show');
		$('[name="idCashRemove"]').val(id);
		$('[name="idUserCashRemove"]').val(id_user);
		$('[name="valueCashRemove"]').val(value_io);
		$('[name="statusCashRemove"]').val(status_io);
		$('[name="idBranchCashRemove"]').val(id_branch);
		$('[id="nameCashRemove"]').text(name);
	});
});