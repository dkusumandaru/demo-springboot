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

	var url_access = base_url+'transaction/gets';
	var table = $("#transaction").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#transaction_filter input')
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
						{"data": "date_transaction"},
						{"data": "name_user"},
						{"data": "name_branch"},						
						{"data": "method_transaction"},
						{"data": "price_transaction"},
						{"data": "action_transaction"}						
					],
		 		order: [[1, 'desc']],
		 		columnDefs: [
		 				{ "orderable": false, "targets": 6 },
		 				{ "searchable": false, "targets": 5 }
		 		],
		 rowCallback: function(row, data, iDisplayIndex) {
		 		
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				if(data.no_bill != '-'  && data.no_bill != null ){
					var name = data.name_member+'<br> NO : <b>'+data.no_bill+'</b><br>a/n. <i>'+data.name_bill+'</i>';
					$('td:eq(0)', row).html(name);
						
				}else{
					$('td:eq(0)', row).html();
				}

				
				$('td:eq(5)', row).html('<span class="number-right">'+currencyFormater(data.price_transaction)+'</span>');
		 }
	});

	$('#transaction').on('click','.view_record',function(){
			var id_transaction=$(this).data('id_transaction');
			var id_member=$(this).data('id_member');

			$('#viewTransaction').modal('show');
			var url_receipt = base_url+'invoice/public/'+id_member+'/'+id_transaction;
			var receipt = '<iframe src="'+url_receipt+'" width="100%" height="100%" onload="resizeIframe(this)"></iframe>';
			$('#receiptTransaction').html(receipt);
	});

});