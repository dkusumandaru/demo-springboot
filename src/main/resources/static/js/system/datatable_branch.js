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

	var url_access = base_url+'app/get_branch';
	var table = $("#branch").dataTable({
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
						{"data": "name_branch"},
						{"data": "address_branch"},
						{"data": "create_branch"},
						{"data": "modify_branch"},
						{"data": "balance_branch"},
						{"data": "action_branch"}
					],
		 		order: [[0, 'asc']],
		 		columnDefs: [{ "orderable": false, "targets": 5 }],
		 rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
				$('td:eq(4)', row).html('<span class="number-right">'+currencyFormater(data.balance_branch)+'</span>');
		 }
	});

	$('#branch').on('click','.edit_record',function(){
		var id_branch=$(this).data('id_branch');
		var name_branch=$(this).data('name_branch');
		var address_branch=$(this).data('address_branch');
		$('#ModalRole').modal('show');
		$('[name="idBranchUpdate"]').val(id_branch);
		$('[name="nameBranchUpdate"]').val(name_branch);
		$('[name="addressBranchUpdate"]').val(address_branch);
	});

	$('#branch').on('click','.hapus_record',function(){
		var id=$(this).data('id_branch');
		var name=$(this).data('name_branch');
		$('#ModalRemove').modal('show');
		$('[name="idBranchRemove"]').val(id);
		$('[id="nameBranchRemove"]').text(name);
	});
});