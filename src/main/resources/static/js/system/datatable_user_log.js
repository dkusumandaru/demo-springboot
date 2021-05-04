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

	var url_access = base_url+'user/get_logs';
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
						// {"data": "id_user"},
						{"data": "date_user_log"},
						{"data": "name_user"},
						{"data": "name_branch"},
						{"data": "type_user_log"},
					],
		 		order: [[0, 'asc']],
		 rowCallback: function(row, data, iDisplayIndex) {
		 		
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
		 }
	});


});
