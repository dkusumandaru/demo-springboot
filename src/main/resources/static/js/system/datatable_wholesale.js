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

	var url_access = base_url+'item/get_wholesales';

	var table = $("#wholesale").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#wholesale_filter input')
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
						{"data": "date_item_wholesale"},
						{"data": "name_user"},
						{"data": "name_item"},
						
						{"data": "amount_item_wholesale"},
						{"data": "price_item_wholesale"},
						{"data": "total_item_wholesale"},
						
						{"data": "action_item_wholesale"}
					],
		 		order: [[0, 'desc']],
		 		columnDefs: [{ "orderable": false, "targets": 6 }],
		 rowCallback: function(row, data, iDisplayIndex) {
		 		
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
				$('td:eq(3)', row).html('<span class="number-right">'+data.amount_item_wholesale+'</span>');
				$('td:eq(4)', row).html('<span class="number-right">'+currencyFormater(data.price_item_wholesale)+'</span>');
				$('td:eq(5)', row).html('<span class="number-right">'+currencyFormater(data.total_item_wholesale)+'</span>');
				
		 }
	});

	$('#wholesale').on('click','.hapus_record',function(){
			var id 		= $(this).data('id_wholesale');
			var date 	= $(this).data('date_wholesale');
			var idItem	= $(this).data('id_item');
			var name 	= $(this).data('name_item');
			var amount	= $(this).data('amount_wholesale');
			
			$('#ModalWholesaleRemove').modal('show');
			$('[name="idItemWholesaleWholesaleRemove"]').val(id);
			$('[name="idItemWholesaleRemove"]').val(idItem);
			$('[name="nameItemWholesaleRemove"]').val(name);
			$('[id="nameWholesaleRemove"]').text(name);
			$('[id="dateWholesaleRemove"]').text(date);
			$('[name="amountWholesaleRemove"]').val(amount);
	});
});