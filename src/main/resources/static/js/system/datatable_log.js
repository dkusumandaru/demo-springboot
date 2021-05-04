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

	var url_access = base_url+'item/get_logs';
	var table = $("#logs").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#logs_filter input')
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
						{"data": "name_item"},
						{"data": "type_item_log"},
						{"data": "date_item_log"},
						{"data": "describe_item_log"}
					],
					
		 		order: [[3, 'desc']],
		 rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
    			if (data.type_item_log == 'grant') {
    				var status = '<span class="badge badge-success">Kulakan</span>';
    				$('td:eq(2)', row).html(status);
    			}else if (data.type_item_log == 'revoke') {
    				var status = '<span class="badge badge-danger">Pembatalan Kulakan</span>';
    				$('td:eq(2)', row).html(status);
    			}else if (data.type_item_log == 'push') {
    				var status = '<span class="badge badge-info">Mengirim ke Cabang</span>';
    				$('td:eq(2)', row).html(status);
    			}else if (data.type_item_log == 'pull') {
    				var status = '<span class="badge badge-primary">Penarikan dari Cabang</span>';
    				$('td:eq(2)', row).html(status);
    			}
				
		 }
	});

});